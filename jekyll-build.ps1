#!/usr/bin/env pwsh
# Comprehensive Jekyll build script for Bixing Technology website

param (
    [switch]$Production,
    [switch]$Development,
    [switch]$Clean
)

# Set colors for console output
$colorInfo = "Cyan"
$colorSuccess = "Green"
$colorWarning = "Yellow"
$colorError = "Red"

function Write-StepHeader {
    param (
        [string]$Message
    )
    Write-Host "`n==== $Message ====`n" -ForegroundColor $colorInfo
}

# Check if Jekyll is installed
function Test-JekyllInstallation {
    if (!(Get-Command jekyll -ErrorAction SilentlyContinue)) {
        Write-Host "Jekyll not found. Please install Jekyll using: gem install jekyll bundler" -ForegroundColor $colorError
        return $false
    }
    return $true
}

# Clean the _site directory
function Remove-SiteDirectory {
    Write-StepHeader "Cleaning _site directory"
    if (Test-Path "_site") {
        Remove-Item "_site" -Recurse -Force
        Write-Host "Site directory cleaned successfully." -ForegroundColor $colorSuccess
    } else {
        Write-Host "Site directory does not exist. Nothing to clean." -ForegroundColor $colorWarning
    }
}

# Build the site with Jekyll
function Invoke-SiteBuild {
    param (
        [string]$Environment = "development"
    )
    
    Write-StepHeader "Building site with Jekyll ($Environment environment)"
    
    if ($Environment -eq "production") {
        $env:JEKYLL_ENV = "production"
        jekyll build --config _config.yml
    } else {
        $env:JEKYLL_ENV = "development"
        jekyll build --config _config.yml,_config.dev.yml
    }
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Jekyll build completed successfully!" -ForegroundColor $colorSuccess
        Write-Host "The site has been generated in the '_site' directory." -ForegroundColor $colorInfo
        return $true
    } else {
        Write-Host "Jekyll build failed with exit code $LASTEXITCODE" -ForegroundColor $colorError
        return $false
    }
}

# Main execution
Write-Host "Bixing Technology Website Build Script" -ForegroundColor $colorInfo
Write-Host "======================================" -ForegroundColor $colorInfo

# Check Jekyll installation
if (-not (Test-JekyllInstallation)) {
    exit 1
}

# Handle clean option
if ($Clean) {
    Remove-SiteDirectory
    if (-not ($Production -or $Development)) {
        Write-Host "Clean completed. No build requested." -ForegroundColor $colorSuccess
        exit 0
    }
}

# Handle build options
if ($Production) {
    if (Invoke-SiteBuild -Environment "production") {
        Write-Host "Production build completed successfully!" -ForegroundColor $colorSuccess
        exit 0
    } else {
        exit 1
    }
} elseif ($Development) {
    if (Invoke-SiteBuild -Environment "development") {
        Write-Host "Development build completed successfully!" -ForegroundColor $colorSuccess
        exit 0
    } else {
        exit 1
    }
} else {
    # Default to development build if no options specified
    Write-Host "No build option specified. Defaulting to development build." -ForegroundColor $colorWarning
    if (Invoke-SiteBuild -Environment "development") {
        Write-Host "Development build completed successfully!" -ForegroundColor $colorSuccess
        exit 0
    } else {
        exit 1
    }
}
