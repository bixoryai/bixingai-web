# Get the absolute path to the repository root
$repoRoot = $PSScriptRoot

# Create the pre-commit hook content
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

# Backup existing hook if it exists
$hookPath = Join-Path $repoRoot ".git\hooks\pre-commit"
if (Test-Path $hookPath) {
    $backupPath = "${hookPath}.backup.$(Get-Date -Format 'yyyyMMddHHmmss')"
    Move-Item -Path $hookPath -Destination $backupPath
    Write-Host "Existing hook backed up to: $backupPath"
}

# Write the new hook
$hookContent | Out-File -FilePath $hookPath -Encoding ASCII -NoNewline

# Make the hook executable
if ($IsWindows) {
    # On Windows, the hook is executed by Git's sh.exe, so no need to set execute permission
    Write-Host "Hook installed successfully"
} else {
    chmod +x $hookPath
    Write-Host "Hook installed and made executable"
}

Write-Host "Pre-commit hook has been set up successfully!"
