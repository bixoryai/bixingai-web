# setup-git-hooks-unified.ps1
# Unified script to set up Git hooks for the Bixing Technology website project
# This script consolidates functionality from:
# - setup-git-hooks.ps1
# - setup-git-hook.ps1
# - setup-hook.ps1

# Get the absolute path to the repository root
$repoRoot = $PSScriptRoot

# Define paths
$hooksDir = Join-Path $repoRoot ".git\hooks"
$preCommitTarget = Join-Path $hooksDir "pre-commit"
$preCommitScript = Join-Path $repoRoot "pre-commit-hook.ps1"

# Check if the hooks directory exists
if (-not (Test-Path $hooksDir)) {
    Write-Host "Error: Git hooks directory not found. Make sure you're in the root of the Git repository." -ForegroundColor Red
    exit 1
}

# Check if the PowerShell script exists
if (-not (Test-Path $preCommitScript)) {
    Write-Host "Error: $preCommitScript not found." -ForegroundColor Red
    exit 1
}

# Backup existing pre-commit hook if it exists
if (Test-Path $preCommitTarget) {
    $backupFile = "${preCommitTarget}.backup.$(Get-Date -Format 'yyyyMMddHHmmss')"
    Write-Host "Backing up existing pre-commit hook to $backupFile" -ForegroundColor Yellow
    Copy-Item -Path $preCommitTarget -Destination $backupFile -Force
    Remove-Item -Path $preCommitTarget -Force
}

# Create the pre-commit hook with direct PowerShell call
$hookContent = @"
#!/bin/sh
# Pre-commit hook to update project-status.md

# Get the repository root directory
REPO_ROOT=`$(git rev-parse --show-toplevel)

# Run the PowerShell script with absolute path
powershell.exe -ExecutionPolicy Bypass -NoProfile -File "`$REPO_ROOT/pre-commit-hook.ps1"

# Check if the script succeeded
if [ `$? -eq 0 ]; then
    # Add the updated file to the commit
    git add project-status.md
    exit 0
else
    echo "Error: Failed to update project-status.md"
    exit 1
fi
"@

# Write the hook content to the pre-commit file
Set-Content -Path $preCommitTarget -Value $hookContent

# Make the hook executable (for Git Bash / WSL)
if (Get-Command "chmod" -ErrorAction SilentlyContinue) {
    chmod +x $preCommitTarget
}

Write-Host "Pre-commit hook installed successfully!" -ForegroundColor Green
Write-Host "The hook will automatically update project-status.md with each commit." -ForegroundColor Cyan
