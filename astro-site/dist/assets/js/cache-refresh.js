/**
 * Cache-refresh.js - Force a hard refresh to clear browser cache
 * For Bixing Technology website
 */

// Force a hard refresh on page load to clear cache
window.onload = function() {
  // Add a timestamp to all component URLs to prevent caching
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    // Only modify internal links
    if (link.href && link.href.includes(window.location.hostname)) {
      // Add or update cache-busting parameter
      const url = new URL(link.href);
      url.searchParams.set('t', new Date().getTime());
      link.href = url.toString();
    }
  });
};
