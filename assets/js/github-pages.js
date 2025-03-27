/**
 * GitHub Pages compatibility script
 * This script automatically adjusts paths when the site is hosted on GitHub Pages
 */

(function() {
  // Check if we're on GitHub Pages (bixoryai.github.io or custom domain)
  const isGitHubPages = window.location.hostname === 'bixoryai.github.io' || 
                        window.location.hostname === 'bixingai.bixory.ai';
  
  if (isGitHubPages) {
    const baseUrl = '/bixingai-web';
    
    // Fix relative URLs only when on GitHub Pages
    function fixRelativeUrls() {
      // Fix all links that don't start with http, #, or the baseUrl
      document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith(baseUrl)) {
          // Don't modify links that are already absolute paths starting with baseUrl
          link.setAttribute('href', `${baseUrl}/${href}`);
        }
      });

      // Fix all image sources
      document.querySelectorAll('img[src]').forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('http') && !src.startsWith(baseUrl)) {
          img.setAttribute('src', `${baseUrl}/${src}`);
        }
      });

      // Fix all CSS links
      document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith(baseUrl)) {
          link.setAttribute('href', `${baseUrl}/${href}`);
        }
      });

      // Fix all script sources
      document.querySelectorAll('script[src]').forEach(script => {
        const src = script.getAttribute('src');
        if (src && !src.startsWith('http') && !src.startsWith(baseUrl)) {
          script.setAttribute('src', `${baseUrl}/${src}`);
        }
      });

      console.log('Fixed relative URLs for GitHub Pages compatibility');
    }

    // Run the fix when DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fixRelativeUrls);
    } else {
      fixRelativeUrls();
    }
  }
})();
