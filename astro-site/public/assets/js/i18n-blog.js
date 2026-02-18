/**
 * i18n-blog.js - Blog-specific translations and functionality
 * This file extends the global translations object with blog-specific translations
 * and provides functionality to load individual blog post translations
 */

// Initialize translations object if it doesn't exist
window.translations = window.translations || {};
window.translations.en = window.translations.en || {};
window.translations.zh = window.translations.zh || {};

// Common blog translations
window.translations.en = Object.assign({}, window.translations.en, {
  'blog.readMore': 'Read More',
  'blog.relatedPosts': 'Related Posts',
  'blog.publishedOn': 'Published on',
  'blog.author': 'Author',
  'blog.categories': 'Categories',
  'blog.sharePost': 'Share this post',
  'blog.backToInsights': 'Back to Insights'
});

window.translations.zh = Object.assign({}, window.translations.zh, {
  'blog.readMore': '阅读更多',
  'blog.relatedPosts': '相关文章',
  'blog.publishedOn': '发布于',
  'blog.author': '作者',
  'blog.categories': '分类',
  'blog.sharePost': '分享这篇文章',
  'blog.backToInsights': '返回洞察'
});

// Function to load blog-specific translations
function loadBlogTranslations() {
  // Check if we're on a blog page by looking at the URL
  const currentPath = window.location.pathname;
  if (!currentPath.includes('/blog/')) {
    return Promise.resolve(); // Not a blog page, resolve immediately
  }

  // Extract blog post slug from URL
  const pathParts = currentPath.split('/');
  const blogPostSlug = pathParts[pathParts.length - 1].replace('.html', '');

  // Get the path to root from the body element
  const body = document.body;
  let pathToRoot = '';
  if (body.hasAttribute('data-path-to-root')) {
    pathToRoot = body.getAttribute('data-path-to-root');
  }

  // Construct path to blog-specific translations using the correct relative path
  const blogTranslationsPath = `${pathToRoot}blog/${pathParts[2]}/${pathParts[3]}/${pathParts[4]}/${blogPostSlug}-translations.json`;

  // Fetch blog-specific translations
  return fetch(blogTranslationsPath)
    .then(response => {
      if (!response.ok) {
        return null;
      }
      return response.json();
    })
    .then(blogData => {
      if (blogData) {
        // First, capture all the original English content from the HTML
        // This ensures we can switch back to English properly
        document.querySelectorAll('[data-i18n]').forEach(element => {
          try {
            const key = element.getAttribute('data-i18n');
            if (!window.translations.en[key]) {
              window.translations.en[key] = element.innerHTML || element.textContent;
            }
          } catch (error) {
            // Handle element processing error silently
          }
        });

        // Then merge the blog-specific Chinese translations

        window.translations.zh = Object.assign({}, window.translations.zh, blogData);

        // Log the translations to verify they're loaded correctly
      } else {
        // Blog data not found for this language
      }
      return blogData;
    })
    .catch(() => {
      // Handle fetch error silently
    });
}

// Create a direct translation function specifically for blog posts
function applyBlogTranslations(lang) {
  if (!window.translations || !window.translations[lang]) {
    return;
  }

  // Apply translations to all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(function(element) {
    try {
      const key = element.getAttribute('data-i18n');
      if (window.translations[lang][key]) {
        // Use innerHTML for elements that might contain HTML tags
        if (
          element.tagName === 'P' ||
          element.classList.contains('company-description') ||
          window.translations[lang][key].includes('<br>')
        ) {
          element.innerHTML = window.translations[lang][key];
        } else {
          element.textContent = window.translations[lang][key];
        }
      } else {
        // Translation key not found, keep original content
      }
    } catch (error) {
      // Handle element processing error silently
    }
  });
}

// Load blog-specific translations when the document is ready
document.addEventListener('DOMContentLoaded', function() {
  // Initial load of translations
  loadBlogTranslations().then(() => {
    // Apply translations with the current language
    const currentLang = localStorage.getItem('bixingLanguage') || 'en';
    // Use our blog-specific translation function
    applyBlogTranslations(currentLang);
  });

  // Also reload translations when language is toggled
  document.addEventListener('languageToggled', function(e) {
    const lang = e.detail.language;

    // Reload translations and apply them
    loadBlogTranslations().then(() => {
      // Use our blog-specific translation function
      applyBlogTranslations(lang);
    });
  });
});

// Function to toggle social icons based on language
// This is a common function used in blog posts
window.toggleSocialIcons = function(language) {
  const wechatShare = document.querySelector('.wechat-share');
  const twitterShare = document.querySelector('.twitter-share');

  if (wechatShare && twitterShare) {
    if (language === 'zh') {
      wechatShare.style.display = 'inline-block';
      twitterShare.style.display = 'none';
    } else {
      wechatShare.style.display = 'none';
      twitterShare.style.display = 'inline-block';
    }
  }
};
