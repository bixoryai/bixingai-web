# Script to update CSS links in HTML files to use consolidated CSS
# This script replaces multiple individual CSS imports with a single consolidated CSS import

# Define the pattern to search for (multiple CSS imports)
$cssPattern = '(?s)<link rel="stylesheet" href="(?:\.\.\/)*assets\/css\/styles\.css">.*?<link rel="stylesheet" href="(?:\.\.\/)*assets\/css\/[^"]+\.css(?:\?v=\d+)?">'

# Define the replacement (consolidated CSS import)
function GetReplacement($pathToRoot) {
    return @"
    <!-- Consolidated CSS - Reduces HTTP requests and improves performance -->
    <link rel="stylesheet" href="${pathToRoot}assets/css/consolidated/index.css?v=20250403">
"@
}

# Get all HTML files in the project (excluding components directory)
$htmlFiles = Get-ChildItem -Path . -Filter "*.html" -Recurse | Where-Object { $_.FullName -notlike "*\components\*" }

# Counter for tracking changes
$filesUpdated = 0

foreach ($file in $htmlFiles) {
    Write-Host "Processing $($file.FullName)..."
    
    # Read the file content
    $content = Get-Content -Path $file.FullName -Raw
    
    # Determine the path to root based on file location
    $relativePath = $file.Directory.FullName.Replace($PWD.Path, "").Replace("\", "/")
    $pathDepth = ($relativePath -split "/").Length - 1
    $pathToRoot = ""
    
    if ($pathDepth -gt 0) {
        for ($i = 0; $i -lt $pathDepth; $i++) {
            $pathToRoot += "../"
        }
    }
    
    # Replace the CSS links
    $newContent = $content -replace $cssPattern, (GetReplacement $pathToRoot)
    
    # Check if content was modified
    if ($newContent -ne $content) {
        # Write the updated content back to the file
        $newContent | Set-Content -Path $file.FullName -NoNewline
        Write-Host "  Updated CSS links in $($file.Name)" -ForegroundColor Green
        $filesUpdated++
    } else {
        Write-Host "  No changes needed for $($file.Name)" -ForegroundColor Yellow
    }
}

Write-Host "`nCSS consolidation complete: $filesUpdated files updated." -ForegroundColor Cyan
