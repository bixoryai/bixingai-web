/**
 * form-security.js
 * Security utilities for form handling in Bixing Technology website
 * Provides input validation, sanitization, and CSRF protection
 */

// Create a namespace for form security utilities
window.BixingFormSecurity = (function () {
  // Regular expressions for validation
  const PATTERNS = {
    // Basic email validation pattern
    EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    // Allow letters, numbers, spaces, and common punctuation
    NAME: /^[a-zA-Z0-9\s.,'-]{1,50}$/,
    // Allow letters, numbers, spaces, and common punctuation
    TEXT: /^[a-zA-Z0-9\s.,;:'"!?()-]{1,1000}$/,
    // Simple phone number validation
    PHONE: /^[0-9+\-().]{7,20}$/,
    // URL validation
    URL: /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/
  };
  function sanitizeInput (input) {
    if (!input || typeof input !== 'string') return '';

    // Replace potentially dangerous characters with HTML entities
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
     * Validate input against a specific pattern
     * @param {string} input - The input to validate
     * @param {string} type - The type of validation to perform (email, name, text, phone, url)
     * @returns {boolean} - Whether the input is valid
     */
  function validateInput (input, type) {
    if (!input || typeof input !== 'string') return false;

    const pattern = PATTERNS[type.toUpperCase()];
    if (!pattern) return false;

    return pattern.test(input);
  }

  /**
     * Generate a CSRF token for form submission
     * @returns {string} - CSRF token
     */
  function generateCSRFToken () {
    // Generate a random token
    const token = Math.random().toString(36).substring(2) +
                     Math.random().toString(36).substring(2);

    // Store in sessionStorage for verification
    try {
      sessionStorage.setItem('bixing_csrf_token', token);
    } catch (e) {
      console.warn('Could not store CSRF token in sessionStorage');
    }

    return token;
  }

  /**
     * Verify a CSRF token
     * @param {string} token - The token to verify
     * @returns {boolean} - Whether the token is valid
     */
  function verifyCSRFToken (token) {
    if (!token) return false;

    try {
      const storedToken = sessionStorage.getItem('bixing_csrf_token');
      return token === storedToken;
    } catch (e) {
      console.warn('Could not verify CSRF token from sessionStorage');
      return false;
    }
  }

  /**
     * Add CSRF protection to a form
     * @param {HTMLFormElement} form - The form to protect
     */
  function protectForm (form) {
    if (!form || !(form instanceof HTMLFormElement)) return;

    // Remove any existing CSRF token input
    const existingToken = form.querySelector('input[name="csrf_token"]');
    if (existingToken) existingToken.remove();

    // Generate a new token
    const token = generateCSRFToken();

    // Add the token to the form
    const tokenInput = document.createElement('input');
    tokenInput.type = 'hidden';
    tokenInput.name = 'csrf_token';
    tokenInput.value = token;
    form.appendChild(tokenInput);
  }

  /**
     * Validate a form's inputs
     * @param {HTMLFormElement} form - The form to validate
     * @returns {Object} - Validation result with isValid flag and errors object
     */
  function validateForm (form) {
    if (!form || !(form instanceof HTMLFormElement)) {
      return { isValid: false, errors: { form: 'Invalid form element' } };
    }

    const result = {
      isValid: true,
      errors: {},
      sanitizedData: {}
    };

    // Get all input elements
    const inputs = form.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {
      // Skip submit buttons and hidden fields (except CSRF token)
      if (input.type === 'submit' || (input.type === 'hidden' && input.name !== 'csrf_token')) {
        return;
      }

      const name = input.name || input.id;
      const value = input.value.trim();

      // Required field validation
      if (input.hasAttribute('required') && !value) {
        result.isValid = false;
        result.errors[name] = 'This field is required';
        return;
      }

      // Skip empty optional fields
      if (!value) return;

      // Type-specific validation
      if (input.type === 'email') {
        if (!validateInput(value, 'email')) {
          result.isValid = false;
          result.errors[name] = 'Please enter a valid email address';
          return;
        }
      } else if (input.classList.contains('validate-name') ||
                      name.toLowerCase().includes('name')) {
        if (!validateInput(value, 'name')) {
          result.isValid = false;
          result.errors[name] = 'Please enter a valid name';
          return;
        }
      } else if (input.type === 'tel' || name.toLowerCase().includes('phone')) {
        if (!validateInput(value, 'phone')) {
          result.isValid = false;
          result.errors[name] = 'Please enter a valid phone number';
          return;
        }
      } else if (input.type === 'url') {
        if (!validateInput(value, 'url')) {
          result.isValid = false;
          result.errors[name] = 'Please enter a valid URL';
          return;
        }
      }

      // Sanitize the input value
      result.sanitizedData[name] = sanitizeInput(value);
    });

    // Validate CSRF token
    const csrfToken = form.querySelector('input[name="csrf_token"]');
    if (!csrfToken || !verifyCSRFToken(csrfToken.value)) {
      result.isValid = false;
      result.errors.csrf = 'Invalid security token. Please refresh the page and try again.';
    }

    return result;
  }

  /**
     * Display validation errors on a form
     * @param {HTMLFormElement} form - The form to display errors on
     * @param {Object} errors - The errors object from validateForm
     */
  function displayErrors (form, errors) {
    if (!form || !errors) return;

    // Clear existing error messages
    const existingErrors = form.querySelectorAll('.form-error-message');
    existingErrors.forEach(error => error.remove());

    // Remove existing error classes
    const inputs = form.querySelectorAll('.is-invalid');
    inputs.forEach(input => input.classList.remove('is-invalid'));

    // Display new error messages
    Object.keys(errors).forEach(fieldName => {
      const errorMessage = errors[fieldName];
      const field = form.querySelector(`[name="${fieldName}"], #${fieldName}`);

      if (field) {
        // Add error class to the field
        field.classList.add('is-invalid');

        // Create error message element
        const errorElement = document.createElement('div');
        errorElement.className = 'form-error-message text-danger mt-1';
        errorElement.textContent = errorMessage;

        // Insert after the field
        field.parentNode.insertBefore(errorElement, field.nextSibling);
      } else if (fieldName === 'csrf') {
        // Display CSRF error at the top of the form
        const errorElement = document.createElement('div');
        errorElement.className = 'form-error-message text-danger mb-3 alert alert-danger';
        errorElement.textContent = errorMessage;
        form.prepend(errorElement);
      }
    });
  }

  /**
     * Initialize form security for all forms on the page
     */
  function init () {
    // Add CSRF protection to all forms
    document.querySelectorAll('form').forEach(form => {
      protectForm(form);

      // Add submit event listener for validation
      form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate the form
        const validationResult = validateForm(form);

        if (!validationResult.isValid) {
          // Display validation errors
          displayErrors(form, validationResult.errors);
          return;
        }

        // If we have a form handler, call it with the sanitized data
        if (typeof window.handleFormSubmit === 'function') {
          window.handleFormSubmit(event, validationResult.sanitizedData);
        } else {
          // Default success message
          alert('Form submitted successfully!');
          form.reset();
        }
      });
    });
  }

  // Public API
  return {
    init,
    sanitizeInput,
    validateInput,
    validateForm,
    protectForm,
    displayErrors
  };
})();

// Initialize form security when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  BixingFormSecurity.init();
});
