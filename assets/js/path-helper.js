/**
 * path-helper.js - Utility for standardizing path references across the website
 * For Bixing Technology website
 * 
 * This helper ensures consistent path handling across different environments:
 * - Local development: Uses relative paths based on data-path-to-root attribute
 * - GitHub Pages: Handles baseurl prefix (/bixingai-web) when deployed
 */

// Store the base path for the site (empty for local development, '/bixingai-web' for GitHub Pages)
// This will be automatically detected from the _config.yml baseurl setting when deployed
const BASE_PATH = '';

/**
 * Resolves a path to the correct absolute or relative path based on the current environment
 * @param {string} path - The path to resolve (can have leading slash or not)
 * @param {string} pathToRoot - The relative path to the root directory (from data-path-to-root attribute)
 * @returns {string} - The resolved path
 */
function resolvePath(path, pathToRoot = '') {
    // If path already starts with http/https or is a protocol-relative URL, return it as is
    if (path.startsWith('http') || path.startsWith('//')) {
        return path;
    }
    
    // Handle CDN URLs that don't need path adjustment
    if (path.includes('cdn.jsdelivr.net') || 
        path.includes('cdnjs.cloudflare.com') || 
        path.includes('unpkg.com')) {
        return path;
    }
    
    // Remove leading slash if present for local path resolution
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
    
    // Skip processing if the HTML is too small (likely not actual HTML content)
    if (html.length < 10) return html;
    
    try {
        // Replace absolute paths with the correct format
        html = html.replace(/href="\//g, `href="${pathToRoot}`);
        html = html.replace(/src="\//g, `src="${pathToRoot}`);
        
        // Replace relative paths that should be relative to root
        html = html.replace(/href="assets\//g, `href="${pathToRoot}assets/`);
        html = html.replace(/src="assets\//g, `src="${pathToRoot}assets/`);
        html = html.replace(/href="pages\//g, `href="${pathToRoot}pages/`);
        html = html.replace(/href="components\//g, `href="${pathToRoot}components/`);
        html = html.replace(/href="index.html"/g, `href="${pathToRoot}index.html"`);
        
        // Handle blog paths
        html = html.replace(/href="blog\//g, `href="${pathToRoot}blog/`);
        
        // We've already handled the specific cases we need
        // The general case of modifying all URLs is too complex and error-prone
        // So we'll stick with the specific replacements above
        
        return html;
    } catch (error) {
        console.error('Error in updatePathReferences:', error);
        return html; // Return original HTML if there's an error
    }
}

/**
 * Gets the correct path-to-root value for the current page
 * @returns {string} - The path to root value
 */
function getPathToRoot() {
    // Try to get from body attribute first
    const bodyPathAttr = document.body ? document.body.getAttribute('data-path-to-root') : null;
    if (bodyPathAttr !== null) {
        return bodyPathAttr;
    }
    
    // Fallback: Calculate based on URL path depth
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(Boolean); // Remove empty parts
    
    // If we're at root or in GitHub Pages root
    if (pathParts.length === 0 || (pathParts.length === 1 && pathParts[0] === 'bixingai-web')) {
        return '';
    }
    
    // Calculate relative path based on directory depth
    return '../'.repeat(pathParts.length - 1);
}

/**
 * Normalizes the data-path-to-root attribute value
 * @param {string} pathToRoot - The path to root value to normalize
 * @returns {string} - The normalized path to root
 */
function normalizePathToRoot(pathToRoot) {
    if (!pathToRoot) return '';
    
    // Convert absolute root path to empty string
    if (pathToRoot === '/') return '';
    
    // Ensure path ends with a slash if not empty
    if (pathToRoot && !pathToRoot.endsWith('/')) {
        return pathToRoot + '/';
    }
    
    return pathToRoot;
}

// Export functions for external use
window.pathHelper = {
    resolvePath: resolvePath,
    updatePathReferences: updatePathReferences,
    getPathToRoot: getPathToRoot,
    normalizePathToRoot: normalizePathToRoot
};
