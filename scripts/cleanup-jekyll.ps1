# Backup directories before removal
$date = Get-Date -Format "yyyyMMdd_HHmmss"
$backupDir = "backup_jekyll_$date"

# Create backup directory
New-Item -ItemType Directory -Path $backupDir

# Backup and remove _layouts
if (Test-Path "_layouts") {
    Copy-Item -Path "_layouts" -Destination "$backupDir/_layouts" -Recurse
    Remove-Item -Path "_layouts" -Recurse
}

# Backup and remove _includes
if (Test-Path "_includes") {
    Copy-Item -Path "_includes" -Destination "$backupDir/_includes" -Recurse
    Remove-Item -Path "_includes" -Recurse
}

Write-Host "Jekyll directories have been backed up to $backupDir and removed"
Write-Host "If you need to restore them, you can find them in the backup directory"
