# Git Hooks for Bixing Technology Website

This document explains the Git hook system implemented for the Bixing Technology website project.

## Overview

Git hooks are scripts that run automatically at certain points in the Git workflow. For this project, we use a pre-commit hook to automatically update the `project-status.md` file with information about the current commit.

## Setup

To set up the Git hooks for this project, run the following command from the project root:

```powershell
.\setup-git-hooks-unified.ps1
```

This script will:
1. Back up any existing pre-commit hook
2. Install the new pre-commit hook
3. Make the hook executable

## How It Works

The pre-commit hook performs the following actions:
1. Updates the "Last Updated" date in the project-status.md file
2. Adds information about the files being changed in the current commit
3. Automatically adds the updated project-status.md file to the commit

## Troubleshooting

If you encounter issues with the Git hooks:

1. Make sure PowerShell is available in your PATH
2. Check that the pre-commit-hook.ps1 file exists in the project root
3. Ensure you have the necessary permissions to execute scripts

## Manual Update

If you need to manually update the project status file, you can run:

```powershell
.\pre-commit-hook.ps1
```

This will perform the same updates that would happen during a commit.
