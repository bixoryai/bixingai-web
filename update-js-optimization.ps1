# Script to update JavaScript references in HTML files to use the optimized i18n module
# and add defer attributes to non-critical scripts

# Function to get the relative path to the root based on file location
function Get-PathToRoot {
    param (
        [string]$FilePath
    )
    
    $relativePath = $FilePath.Replace($PWD.Path, "").Replace("\", "/")
    $pathDepth = ($relativePath -split "/").Length - 1
    $pathToRoot = ""
    
    if ($pathDepth -gt 0) {
        for ($i = 0; $i -lt $pathDepth; $i++) {
            $pathToRoot += "../"
        }
    }
    
    return $pathToRoot
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
    $pathToRoot = Get-PathToRoot -FilePath $file.FullName
    
    # Pattern to match old i18n script references
    $oldI18nPattern = "(?s)<script src=`"(?:\.\.\/)*assets\/js\/(?:translations|i18n)\.js(?:\?v=\d+)?`"></script>"
    
    # Pattern to match the end of the body tag where we'll add our scripts if they don't exist
    $bodyEndPattern = "(?s)</body>"
    
    # New script references with proper paths and defer attributes
    $newScripts = @"

    <!-- Embedded minimal translations as fallback -->
    <script src="${pathToRoot}assets/js/embedded-translations.js"></script>
    
    <!-- Non-critical scripts with defer attribute -->
    <script src="${pathToRoot}assets/js/i18n-module.js" defer></script>
"@
    
    # Add defer attribute to non-critical scripts
    $content = $content -replace "(<script src=`"(?:\.\.\/)*assets\/js\/main\.js(?:\?v=\d+)?`")>", "`$1 defer>"
    $content = $content -replace "(<script src=`"https://unpkg\.com/aos@2\.3\.1/dist/aos\.js`")>", "`$1 defer>"
    
    # Replace old i18n scripts with new optimized approach
    if ($content -match $oldI18nPattern) {
        $content = $content -replace $oldI18nPattern, $newScripts
        Write-Host "  Updated i18n scripts in $($file.Name)" -ForegroundColor Green
        $filesUpdated++
    }
    # If no i18n scripts found, add them before the end of the body tag
    elseif ($content -match $bodyEndPattern -and -not ($content -match "i18n-module\.js")) {
        $content = $content -replace $bodyEndPattern, "$newScripts`n</body>"
        Write-Host "  Added i18n scripts to $($file.Name)" -ForegroundColor Green
        $filesUpdated++
    }
    else {
        Write-Host "  No changes needed for $($file.Name)" -ForegroundColor Yellow
    }
    
    # Write the updated content back to the file
    $content | Set-Content -Path $file.FullName -NoNewline
}

Write-Host "`nJavaScript optimization complete: $filesUpdated files updated." -ForegroundColor Cyan
