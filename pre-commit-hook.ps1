#!/usr/bin/env pwsh
# Pre-commit hook to update project-status.md automatically

# Get the repository root directory
$repoRoot = git rev-parse --show-toplevel
Set-Location $repoRoot

# Get the current date
$currentDate = Get-Date -Format "MMMM dd, yyyy"

# Path to the project status file
$statusFile = "project-status.md"

# Check if the status file exists
if (-not (Test-Path $statusFile)) {
    Write-Host "Warning: $statusFile does not exist. Hook will not update the status file."
    exit 0
}

try {
    # Read the content of the file
    $content = Get-Content $statusFile -Raw -ErrorAction Stop

    # Update the date
    $updatedContent = $content -replace "## Last Updated:.*", "## Last Updated: $currentDate"

    # Get the staged files for this commit
    $stagedFiles = git diff --cached --name-only

    # Add a note about the changed files
    $changes = "### Recent Changes`n"
    foreach ($file in $stagedFiles) {
        $changes += "- Modified: $file`n"
    }

    # Add the changes section after the date
    $updatedContent = $updatedContent -replace "(## Last Updated:.*)`n", "`$1`n`n$changes`n"

    # Write the updated content back to the file
    $updatedContent | Set-Content $statusFile -NoNewline -ErrorAction Stop

    Write-Host "Successfully updated $statusFile"
    exit 0
} catch {
    Write-Host "Error updating $statusFile: $_"
    exit 1
}
