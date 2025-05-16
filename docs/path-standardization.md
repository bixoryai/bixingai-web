# Path Standardization Guide

This document outlines the standardized approach to handling paths in the Bixing Technology website, ensuring consistent behavior across both local development and GitHub Pages deployment.

## Key Concepts

### 1. `data-path-to-root` Attribute

Every HTML page should include a `data-path-to-root` attribute on the `<body>` tag that specifies the relative path from the current page to the root directory:

```html
<!-- For pages in the root directory -->
<body data-path-to-root="">

<!-- For pages in first-level subdirectories (e.g., /pages/) -->
<body data-path-to-root="../">

<!-- For pages in second-level subdirectories (e.g., /pages/menu/) -->
<body data-path-to-root="../../">

<!-- For pages in third-level subdirectories (e.g., /blog/2023/01/) -->
<body data-path-to-root="../../../">
```

### 2. Path Helper Utility

The `path-helper.js` utility provides functions for standardizing path references:

- `resolvePath(path, pathToRoot)`: Resolves a path based on the current environment
- `updatePathReferences(html, pathToRoot)`: Updates all path references in HTML content
- `getPathToRoot()`: Gets the correct path-to-root value for the current page
- `normalizePathToRoot(pathToRoot)`: Normalizes the data-path-to-root attribute value

### 3. Components Loading

The `components.js` file uses the `data-path-to-root` attribute to correctly load header and footer components with proper path resolution.

## Implementation Guidelines

### 1. Resource References

All resource references (CSS, JavaScript, images) should use relative paths with the `data-path-to-root` value:

```html
<!-- CSS references -->
<link rel="stylesheet" href="[path-to-root]assets/css/styles.css">

<!-- JavaScript references -->
<script src="[path-to-root]assets/js/script.js"></script>

<!-- Image references -->
<img src="[path-to-root]assets/images/logo.png" alt="Logo">
```

### 2. Required Scripts

Every page should include the following scripts in this order:

```html
<!-- Path Helper and Components -->
<script src="[path-to-root]assets/js/path-helper.js"></script>
<script src="[path-to-root]assets/js/components.js"></script>

<!-- i18n Scripts -->
<script src="[path-to-root]assets/js/i18n-common.js"></script>
<script src="[path-to-root]assets/js/i18n-[page-name].js"></script>
```

### 3. Component Placeholders

Each page should include placeholders for the header and footer components:

```html
<!-- Header Placeholder -->
<div id="header-placeholder"></div>

<!-- Main Content -->
<main>
  <!-- Page content here -->
</main>

<!-- Footer Placeholder -->
<div id="footer-placeholder"></div>
```

## Deployment Considerations

### 1. Local Development

For local development, the `data-path-to-root` attribute ensures that all paths are resolved correctly relative to the root directory.

### 2. GitHub Pages Deployment

When deployed to GitHub Pages with a baseurl (e.g., `/bixingai-web`), the `path-helper.js` utility will automatically handle the baseurl prefix.

## Common Issues and Solutions

### 1. Missing Header or Footer

If the header or footer is not displaying:

- Verify that the `data-path-to-root` attribute is set correctly
- Ensure that `path-helper.js` and `components.js` are included in the page
- Check the browser console for any path resolution errors

### 2. Broken Resource Links

If CSS, JavaScript, or images are not loading:

- Check that all resource paths use the `data-path-to-root` value
- Verify that the paths are relative, not absolute (starting with `/`)
- Ensure that the file paths are correct relative to the root directory

### 3. Language Toggle Issues

If the language toggle is not working:

- Ensure that `i18n-common.js` is loaded before any page-specific i18n scripts
- Verify that the language toggle button uses the global `toggleLanguage()` function
- Check that all translatable elements have `data-i18n` attributes

## Testing Path Resolution

To test path resolution across different environments:

1. Test locally using a web server (e.g., `python -m http.server`)
2. Test with GitHub Pages preview
3. Verify that all resources load correctly in both environments
4. Check that navigation works properly between pages at different directory levels

By following these guidelines, we ensure consistent path handling across the entire Bixing Technology website, regardless of the deployment environment.
