/**
 * path-helper.js - Utility for standardizing path references across the website
 * For Bixing Technology website
 */

// Store the base path for the site (empty for local development, '/bixingai-web' for GitHub Pages)
const BASE_PATH = '';

/**
 * Resolves a path to the correct absolute or relative path based on the current environment
 * @param {string} path - The path to resolve (without leading slash)
 * @param {string} pathToRoot - The relative path to the root directory (from data-path-to-root attribute)
 * @returns {string} - The resolved path
 */
function resolvePath(path, pathToRoot = '') {
    // If path already starts with the base path or is an absolute URL, return it as is
    if (path.startsWith('http') || path.startsWith('//')) {
        return path;
    }
    
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    
    // For local development or when BASE_PATH is empty
    if (!BASE_PATH) {
        return pathToRoot + cleanPath;
    }
    
    // For GitHub Pages or other environments with a base path
    return BASE_PATH + '/' + cleanPath;
}

/**
 * Updates all path references in an HTML string to use the correct path format
 * @param {string} html - The HTML content to process
 * @param {string} pathToRoot - The relative path to the root directory
 * @returns {string} - The processed HTML with corrected paths
 */
function updatePathReferences(html, pathToRoot = '') {
    if (!html) return html;
    
    // Replace absolute paths with the correct format
    html = html.replace(/href="\//g, `href="${pathToRoot}`);
    html = html.replace(/src="\//g, `src="${pathToRoot}`);
    
    // Replace relative paths that should be relative to root
    html = html.replace(/href="assets\//g, `href="${pathToRoot}assets/`);
    html = html.replace(/src="assets\//g, `src="${pathToRoot}assets/`);
    html = html.replace(/href="pages\//g, `href="${pathToRoot}pages/`);
    html = html.replace(/href="components\//g, `href="${pathToRoot}components/`);
    html = html.replace(/href="index.html"/g, `href="${pathToRoot}index.html"`);
    
    return html;
}

// Export functions for external use
window.pathHelper = {
    resolvePath: resolvePath,
    updatePathReferences: updatePathReferences
};
