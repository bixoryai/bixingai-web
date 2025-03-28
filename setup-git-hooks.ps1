# setup-git-hooks.ps1
# Script to set up Git hooks for the Bixing Technology website project

# Define paths
$hooksDir = ".git\hooks"
$preCommitTarget = "$hooksDir\pre-commit"
$preCommitSource = "pre-commit.bat"
$preCommitScript = "pre-commit-hook.ps1"

# Check if the hooks directory exists
if (-not (Test-Path $hooksDir)) {
    Write-Host "Error: Git hooks directory not found. Make sure you're in the root of the Git repository." -ForegroundColor Red
    exit 1
}

# Check if the source files exist
if (-not (Test-Path $preCommitSource)) {
    Write-Host "Error: $preCommitSource not found." -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $preCommitScript)) {
    Write-Host "Error: $preCommitScript not found." -ForegroundColor Red
    exit 1
}

# Backup existing pre-commit hook if it exists
if (Test-Path $preCommitTarget) {
    $backupFile = "$preCommitTarget.backup"
    Write-Host "Backing up existing pre-commit hook to $backupFile" -ForegroundColor Yellow
    Copy-Item -Path $preCommitTarget -Destination $backupFile -Force
    Remove-Item -Path $preCommitTarget -Force
}

# Create the pre-commit hook
$hookContent = @"
#!/bin/sh
# Pre-commit hook for the Bixing Technology website project
# This hook automatically updates the project-status.md file

# Run the batch file
./pre-commit.bat

# Exit with the same status as the batch file
exit $?
"@

# Write the hook content to the pre-commit file
$hookContent | Out-File -FilePath $preCommitTarget -Encoding ascii

# Make sure the line endings are Unix-style (LF instead of CRLF)
(Get-Content $preCommitTarget) -join "`n" | Set-Content -NoNewline $preCommitTarget

# Display success message
Write-Host "Git pre-commit hook has been set up successfully!" -ForegroundColor Green
Write-Host "The hook will automatically update project-status.md with the current date and commit message whenever you make a commit." -ForegroundColor Cyan
Write-Host ""
Write-Host "To test it, make some changes and commit them with:" -ForegroundColor Yellow
Write-Host "git commit -m 'Your commit message'" -ForegroundColor Yellow
