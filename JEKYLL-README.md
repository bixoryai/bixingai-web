# Jekyll Blog Post Management for Bixing Technology Website

This document explains how to use Jekyll for managing blog posts on the Bixing Technology website.

## Overview

Jekyll is used **only** for blog post management in this project. The rest of the website structure is implemented using standard HTML, CSS, and JavaScript. The Jekyll includes and layouts system is not used for general website structure.

## Directory Structure

- `_posts/`: Contains all blog post markdown files
- `_layouts/post.html`: The template used for rendering individual blog posts
- `assets/images/blog/`: Contains images used in blog posts

## Adding a New Blog Post

1. Create a new markdown file in the `_posts` directory with the filename format: `YYYY-MM-DD-title-with-hyphens.md`
2. Add the required front matter at the top of the file:

```yaml
---
layout: post
title: "Your Blog Post Title"
date: YYYY-MM-DD
author: "Author Name"
categories: ["Primary Category", "Secondary Category"]
tags: ["tag1", "tag2", "tag3"]
featured_image: "image-filename.jpg"
excerpt: "A brief summary of your blog post that will appear in previews."
---
```

3. Write your blog post content in markdown format below the front matter
4. If using images, place them in the `assets/images/blog/` directory and reference them in your post

## Building the Site

We've provided two PowerShell scripts to build the site:

### Simple Build Script

```powershell
./build.ps1
```

This will build the site with default settings.

### Advanced Build Script

```powershell
./jekyll-build.ps1 [-Production] [-Development] [-Clean]
```

Options:
- `-Production`: Builds the site in production mode with optimizations
- `-Development`: Builds the site in development mode with debugging features
- `-Clean`: Cleans the `_site` directory before building

Examples:
```powershell
# Clean and build for production
./jekyll-build.ps1 -Clean -Production

# Build for development
./jekyll-build.ps1 -Development
```

## Viewing the Site Locally

After building the site, the static files will be in the `_site` directory. You can serve these files using any web server.

## Integration with Insights Page

The Insights page (`pages/menu/insights.html`) has been updated to display blog posts from the `_posts` directory. It uses Jekyll's Liquid templating to:

1. Display the most recent post as the featured insight
2. List all posts in the insights grid
3. Generate filter buttons based on post categories

## Important Notes

- Always build the site before deploying to ensure all Jekyll templates are processed
- Remember that Jekyll is only used for blog posts, not for the general website structure
- The site is designed to work with both Jekyll-processed pages and regular HTML pages
