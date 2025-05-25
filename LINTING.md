# Linting Setup for Bixing Technology Website

This document describes the linting configuration and usage for the Bixing Technology website project.

## Overview

We've implemented a comprehensive linting setup to ensure code quality and consistency across the project. The setup includes:

- **ESLint** for JavaScript files
- **HTMLHint** for HTML files
- **Stylelint** for CSS files
- **Husky** for Git hooks
- **lint-staged** for running linters on staged files

## Getting Started

To use the linting tools, you'll need to install the dependencies:

```bash
npm install
```

This will install all the necessary linting tools and set up the Git hooks automatically.

## Available Commands

The following npm scripts are available for linting:

- `npm run lint` - Run all linters
- `npm run lint:js` - Lint JavaScript files only
- `npm run lint:html` - Lint HTML files only
- `npm run lint:css` - Lint CSS files only
- `npm run lint:fix` - Fix automatically fixable issues in JavaScript and CSS files

## Automatic Linting

The project is configured to automatically run linters before each commit through Husky and lint-staged. This ensures that only code that passes the linting rules gets committed.

If you need to bypass the pre-commit hooks (not recommended), you can use the `--no-verify` flag with your git commit command.

## Configuration Files

- `.eslintrc.json` - ESLint configuration
- `.htmlhintrc` - HTMLHint configuration
- `.stylelintrc.json` - Stylelint configuration

## Linting Rules

### JavaScript (ESLint)

Key rules include:
- Use semicolons at the end of statements
- Use single quotes for strings
- Use 2 spaces for indentation
- No unused variables
- Always use strict equality (===)
- Use const/let instead of var
- Maximum line length of 100 characters

### HTML (HTMLHint)

Key rules include:
- Lowercase tag names and attributes
- Double quotes for attribute values
- No duplicate attributes
- Properly closed tags
- Unique IDs
- Required alt attributes for images
- Required title elements

### CSS (Stylelint)

Key rules include:
- 2 space indentation
- Single quotes for strings
- Lowercase hex colors
- No vendor prefixes (use autoprefixer instead)
- Maximum nesting depth of 3
- Always use leading zeros in decimal values

## Customizing Rules

If you need to modify the linting rules, you can edit the respective configuration files. Make sure to commit these changes so they're shared with the team.
