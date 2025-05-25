/**
 * storage-utils.js
 * A unified storage utility for the Bixing Technology website
 * Provides consistent localStorage access with error handling
 */

// Namespace to avoid global pollution
window.BixingStorage = (function() {
    // Private constants
    const STORAGE_PREFIX = 'bixing_';
    
    // Common storage keys
    const KEYS = {
        LANGUAGE: 'bixingLanguage',
        THEME: 'bixingTheme',
        LAST_VISIT: 'bixingLastVisit'
    };
    
    /**
     * Safely get an item from localStorage with error handling
     * @param {string} key - The key to retrieve
     * @param {*} defaultValue - Default value if key doesn't exist or localStorage is unavailable
     * @returns {*} The stored value or default value
     */
    function getItem(key, defaultValue = null) {
        try {
            const value = localStorage.getItem(key);
            return value !== null ? value : defaultValue;
        } catch (error) {
            console.warn(`localStorage read error for key "${key}":`, error);
            return defaultValue;
        }
    }
    
    /**
     * Safely set an item in localStorage with error handling
     * @param {string} key - The key to set
     * @param {*} value - The value to store
     * @returns {boolean} True if successful, false otherwise
     */
    function setItem(key, value) {
        try {
            localStorage.setItem(key, value);
            return true;
        } catch (error) {
            console.warn(`localStorage write error for key "${key}":`, error);
            return false;
        }
    }
    
    /**
     * Safely remove an item from localStorage with error handling
     * @param {string} key - The key to remove
     * @returns {boolean} True if successful, false otherwise
     */
    function removeItem(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.warn(`localStorage remove error for key "${key}":`, error);
            return false;
        }
    }
    
    /**
     * Check if localStorage is available
     * @returns {boolean} True if localStorage is available, false otherwise
     */
    function isAvailable() {
        try {
            const testKey = STORAGE_PREFIX + 'test';
            localStorage.setItem(testKey, 'test');
            localStorage.removeItem(testKey);
            return true;
        } catch (error) {
            console.warn('localStorage is not available:', error);
            return false;
        }
    }
    
    /**
     * Get the current language preference
     * @returns {string} The current language code ('en' or 'zh')
     */
    function getLanguage() {
        return getItem(KEYS.LANGUAGE, 'en');
    }
    
    /**
     * Set the language preference
     * @param {string} lang - The language code to set ('en' or 'zh')
     * @returns {boolean} True if successful, false otherwise
     */
    function setLanguage(lang) {
        return setItem(KEYS.LANGUAGE, lang);
    }
    
    /**
     * Record the current visit timestamp
     * @returns {boolean} True if successful, false otherwise
     */
    function recordVisit() {
        return setItem(KEYS.LAST_VISIT, new Date().toISOString());
    }
    
    /**
     * Get the last visit timestamp
     * @returns {string|null} ISO timestamp of last visit or null
     */
    function getLastVisit() {
        return getItem(KEYS.LAST_VISIT, null);
    }
    
    // Public API
    return {
        KEYS,
        getItem,
        setItem,
        removeItem,
        isAvailable,
        getLanguage,
        setLanguage,
        recordVisit,
        getLastVisit
    };
})();

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Record the visit
    BixingStorage.recordVisit();
});
