#!/usr/bin/env pwsh
# Jekyll build script for Bixing Technology website

Write-Host "Starting Jekyll build process..." -ForegroundColor Cyan

# Check if Jekyll is installed
if (!(Get-Command jekyll -ErrorAction SilentlyContinue)) {
    Write-Host "Jekyll not found. Please install Jekyll using: gem install jekyll bundler" -ForegroundColor Red
    exit 1
}

# Build the site
Write-Host "Building site with Jekyll..." -ForegroundColor Cyan
jekyll build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Jekyll build completed successfully!" -ForegroundColor Green
    Write-Host "The site has been generated in the '_site' directory." -ForegroundColor Cyan
    Write-Host "You can now serve the site using your preferred web server." -ForegroundColor Cyan
} else {
    Write-Host "Jekyll build failed with exit code $LASTEXITCODE" -ForegroundColor Red
    exit $LASTEXITCODE
}
