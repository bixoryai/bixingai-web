# Create backup directory
$date = Get-Date -Format "yyyyMMdd_HHmmss"
$backupDir = "backup_jekyll_$date"
New-Item -ItemType Directory -Path $backupDir

# Remove unused layout files but keep post.html
if (Test-Path "_layouts") {
    # First backup everything
    Copy-Item -Path "_layouts" -Destination "$backupDir/_layouts" -Recurse
    
    # Remove specific files
    $filesToRemove = @(
        "_layouts/default.html",
        "_layouts/page.html",
        "_layouts/service.html"
    )
    
    foreach ($file in $filesToRemove) {
        if (Test-Path $file) {
            Remove-Item -Path $file
            Write-Host "Removed $file"
        }
    }
}

# Remove _includes directory as we're handling base URL in JavaScript
if (Test-Path "_includes") {
    Copy-Item -Path "_includes" -Destination "$backupDir/_includes" -Recurse
    Remove-Item -Path "_includes" -Recurse
    Write-Host "Removed _includes directory"
}

Write-Host "Unused Jekyll files have been backed up to $backupDir and removed"
Write-Host "The post.html layout has been preserved for blog functionality"
