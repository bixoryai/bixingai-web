/**
 * GitHub Pages compatibility script
 * This script automatically adjusts paths when the site is hosted on GitHub Pages
 */

(function () {
  // Check if we're on GitHub Pages (bixoryai.github.io) or custom domain (bixingai.bixory.ai)
  const isGitHubPages = window.location.hostname === 'bixoryai.github.io' ||
                        window.location.hostname === 'bixingai.bixory.ai';

  if (isGitHubPages) {
    console.log('GitHub Pages environment detected, fixing paths...');
    const baseUrl = '/bixingai-web';

    // Add base tag to head to make all relative URLs resolve correctly
    const baseTag = document.createElement('base');
    baseTag.href = baseUrl + '/';
    document.head.prepend(baseTag);
    console.log('Added base tag for GitHub Pages compatibility');
  }
})();
