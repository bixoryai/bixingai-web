#!/usr/bin/env pwsh
# Pre-commit hook for Windows to update project-status.md automatically

# Get the current date
$currentDate = Get-Date -Format "MMMM dd, yyyy"

# Path to the project status file
$statusFile = "project-status.md"

# Check if the status file exists
if (-not (Test-Path $statusFile)) {
    Write-Host "Warning: $statusFile does not exist. Hook will not update the status file."
    exit 0
}

# Read the content of the file
$content = Get-Content $statusFile -Raw

# Update the date
$updatedContent = $content -replace "## Last Updated:.*", "## Last Updated: $currentDate"

# Get the commit message from the COMMIT_MSG file
$commitMsgFile = ".git\COMMIT_EDITMSG"
if (Test-Path $commitMsgFile) {
    $commitMsg = Get-Content $commitMsgFile -Raw
    
    # Extract meaningful information from the commit message
    # Remove common prefixes like "fix:", "feat:", etc.
    $cleanMsg = $commitMsg -replace "^(fix|feat|docs|style|refactor|test|chore):\s*", ""
    
    # Create a new update entry
    $newUpdate = @"

### Recent Changes
- $cleanMsg
"@
    
    # Add the new update to the Recent Updates section
    $updatedContent = $updatedContent -replace "(## Recent Updates\r?\n)", "`$1$newUpdate`n"
}

# Write the updated content back to the file
$updatedContent | Set-Content $statusFile

# Add the updated file to the commit
git add $statusFile

# Exit successfully
exit 0
