# Standardize-Paths.ps1
# Script to standardize path references across all HTML files in the Bixing Technology website
# This script ensures consistent path handling for both local development and GitHub Pages deployment

Write-Host "Starting path standardization process..." -ForegroundColor Cyan

# Define the root directory
$rootDir = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Write-Host "Root directory: $rootDir" -ForegroundColor Yellow

# Function to calculate the correct data-path-to-root value based on file location
function Get-PathToRoot {
    param (
        [string]$FilePath
    )
    
    # Get the relative path from the root directory
    $relativePath = $FilePath.Replace($rootDir, "").TrimStart("\")
    
    # Count directory levels
    $dirLevels = ($relativePath.Split("\") | Where-Object { $_ -ne "" }).Count - 1
    
    if ($dirLevels -le 0) {
        return ""
    } else {
        return "../" * $dirLevels
    }
}

# Function to update data-path-to-root attribute in HTML files
function Update-DataPathToRoot {
    param (
        [string]$FilePath
    )
    
    $content = Get-Content -Path $FilePath -Raw
    $fileName = Split-Path -Leaf $FilePath
    $relPath = $FilePath.Replace($rootDir, "").TrimStart("\")
    
    # Calculate the correct path-to-root value
    $pathToRoot = Get-PathToRoot -FilePath $FilePath
    
    # Skip files that don't have a body tag
    if (-not ($content -match "<body")) {
        Write-Host "Skipping $relPath (no body tag found)" -ForegroundColor Gray
        return
    }
    
    # Check if the file already has a data-path-to-root attribute
    if ($content -match '<body[^>]*data-path-to-root\s*=\s*[''"]([^''"]*)[''"]') {
        $currentPathToRoot = $matches[1]
        
        # Only update if the current value is incorrect
        if ($currentPathToRoot -ne $pathToRoot -and $currentPathToRoot -ne "/$pathToRoot") {
            Write-Host "Updating $relPath: data-path-to-root from '$currentPathToRoot' to '$pathToRoot'" -ForegroundColor Green
            
            # Replace the existing attribute value
            $updatedContent = $content -replace '<body([^>]*)data-path-to-root\s*=\s*[''"]([^''"]*)[''"]', "<body`$1data-path-to-root=`"$pathToRoot`""
            Set-Content -Path $FilePath -Value $updatedContent
        } else {
            Write-Host "Skipping $relPath (already correct or compatible)" -ForegroundColor Gray
        }
    } else {
        # Add the attribute if it doesn't exist
        Write-Host "Adding data-path-to-root='$pathToRoot' to $relPath" -ForegroundColor Green
        $updatedContent = $content -replace '<body([^>]*?)>', "<body`$1 data-path-to-root=`"$pathToRoot`">"
        Set-Content -Path $FilePath -Value $updatedContent
    }
}

# Function to update resource paths in HTML files
function Update-ResourcePaths {
    param (
        [string]$FilePath
    )
    
    $content = Get-Content -Path $FilePath -Raw
    $fileName = Split-Path -Leaf $FilePath
    $relPath = $FilePath.Replace($rootDir, "").TrimStart("\")
    $pathToRoot = Get-PathToRoot -FilePath $FilePath
    
    # Skip files that don't have absolute paths to assets
    if (-not ($content -match 'href="/assets/' -or $content -match 'src="/assets/')) {
        Write-Host "Skipping resource path updates for $relPath (no absolute paths found)" -ForegroundColor Gray
        return
    }
    
    Write-Host "Updating resource paths in $relPath" -ForegroundColor Green
    
    # Replace absolute paths with relative paths
    $updatedContent = $content
    $updatedContent = $updatedContent -replace 'href="/assets/', "href=`"${pathToRoot}assets/"
    $updatedContent = $updatedContent -replace 'src="/assets/', "src=`"${pathToRoot}assets/"
    
    # Update other common absolute paths
    $updatedContent = $updatedContent -replace 'href="/pages/', "href=`"${pathToRoot}pages/"
    $updatedContent = $updatedContent -replace 'src="/pages/', "src=`"${pathToRoot}pages/"
    $updatedContent = $updatedContent -replace 'href="/components/', "href=`"${pathToRoot}components/"
    $updatedContent = $updatedContent -replace 'src="/components/', "src=`"${pathToRoot}components/"
    $updatedContent = $updatedContent -replace 'href="/blog/', "href=`"${pathToRoot}blog/"
    $updatedContent = $updatedContent -replace 'src="/blog/', "src=`"${pathToRoot}blog/"
    
    # Only update if changes were made
    if ($updatedContent -ne $content) {
        Set-Content -Path $FilePath -Value $updatedContent
    }
}

# Find all HTML files in the project
$htmlFiles = Get-ChildItem -Path $rootDir -Filter "*.html" -Recurse -File

# Process each HTML file
foreach ($file in $htmlFiles) {
    # Skip files in the _site directory (Jekyll output)
    if ($file.FullName -match "_site\\") {
        continue
    }
    
    # Update data-path-to-root attribute
    Update-DataPathToRoot -FilePath $file.FullName
    
    # Update resource paths
    Update-ResourcePaths -FilePath $file.FullName
}

Write-Host "Path standardization completed successfully!" -ForegroundColor Green
