# Update-Status.ps1
# Script to automatically update the project-status.md file

# Get the current date
$currentDate = Get-Date -Format "MMMM dd, yyyy"

# Path to the project status file
$statusFile = "project-status.md"

# Read the content of the file
$content = Get-Content $statusFile -Raw

# Update the date
$updatedContent = $content -replace "## Last Updated:.*", "## Last Updated: $currentDate"

# Write the updated content back to the file
$updatedContent | Set-Content $statusFile

# Output a confirmation message
Write-Host "Project status updated with current date: $currentDate"

# Add the following section to the Recent Updates section
# You can uncomment and modify this part when you want to add new updates
<#
$newUpdate = @"

### New Section Title
- Added feature 1
- Modified feature 2
- Fixed issue with feature 3
"@

$updatedContent = $updatedContent -replace "(## Recent Updates\r?\n)", "`$1$newUpdate"
$updatedContent | Set-Content $statusFile
#>

# Optionally, you can automatically add the file to git
git add $statusFile

Write-Host "Project status file has been updated and added to git staging area."
