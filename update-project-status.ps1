# update-project-status.ps1
# Automated script to update the project-status.md file with recent changes

# Get the current date
$currentDate = Get-Date -Format "MMMM dd, yyyy"

# Path to the project status file
$statusFile = "project-status.md"

# Read the content of the file
$content = Get-Content $statusFile -Raw

# Update the date
$updatedContent = $content -replace "## Last Updated:.*", "## Last Updated: $currentDate"

# Function to add a new update to the Recent Updates section
function Add-Update {
    param (
        [string]$SectionTitle,
        [string[]]$UpdatePoints
    )
    
    # Format the update points as a bulleted list
    $formattedPoints = $UpdatePoints | ForEach-Object { "- $_" }
    $bulletedList = $formattedPoints -join "`n"
    
    # Create the new update section
    $newUpdate = @"

### $SectionTitle
$bulletedList
"@
    
    # Add the new update to the Recent Updates section
    $global:updatedContent = $global:updatedContent -replace "(## Recent Updates\r?\n)", "`$1$newUpdate`n"
}

# Interactive mode to add updates
function Start-InteractiveMode {
    Write-Host "=== Bixing Technology Website Project Status Update Tool ===" -ForegroundColor Cyan
    Write-Host "This tool will help you update the project status file with recent changes." -ForegroundColor Cyan
    Write-Host ""
    
    $continue = $true
    
    while ($continue) {
        Write-Host "Enter a section title for your update (e.g., 'Navigation Improvements'):" -ForegroundColor Yellow
        $sectionTitle = Read-Host
        
        $updatePoints = @()
        $addingPoints = $true
        
        Write-Host "Enter update points one by one. Type 'done' when finished:" -ForegroundColor Yellow
        
        while ($addingPoints) {
            $point = Read-Host
            
            if ($point -eq "done") {
                $addingPoints = $false
            }
            else {
                $updatePoints += $point
            }
        }
        
        if ($updatePoints.Count -gt 0) {
            Add-Update -SectionTitle $sectionTitle -UpdatePoints $updatePoints
            Write-Host "Update added successfully!" -ForegroundColor Green
        }
        
        Write-Host "Do you want to add another update section? (y/n)" -ForegroundColor Yellow
        $response = Read-Host
        
        if ($response -ne "y") {
            $continue = $false
        }
    }
}

# Function to update the Next Steps section
function Update-NextSteps {
    param (
        [string[]]$NextSteps
    )
    
    # Format the next steps as a numbered list
    $formattedSteps = $NextSteps | ForEach-Object { 
        $index = [array]::IndexOf($NextSteps, $_) + 1
        "$index. $_" 
    }
    $numberedList = $formattedSteps -join "`n"
    
    # Replace the Next Steps section
    $nextStepsPattern = "(?s)## Next Steps.*?(?=\r?\n## |$)"
    $nextStepsReplacement = @"
## Next Steps
$numberedList
"@
    
    $global:updatedContent = $global:updatedContent -replace $nextStepsPattern, $nextStepsReplacement
}

# Check if command line arguments were provided
if ($args.Count -gt 0) {
    # If the first argument is -i or --interactive, start interactive mode
    if ($args[0] -eq "-i" -or $args[0] -eq "--interactive") {
        Start-InteractiveMode
    }
    # If the first argument is -u or --update, add an update with the provided section title and points
    elseif ($args[0] -eq "-u" -or $args[0] -eq "--update") {
        if ($args.Count -lt 3) {
            Write-Host "Error: Not enough arguments provided." -ForegroundColor Red
            Write-Host "Usage: .\update-project-status.ps1 -u 'Section Title' 'Update point 1' 'Update point 2' ..." -ForegroundColor Yellow
            exit 1
        }
        
        $sectionTitle = $args[1]
        $updatePoints = $args[2..($args.Count-1)]
        
        Add-Update -SectionTitle $sectionTitle -UpdatePoints $updatePoints
    }
    # If the first argument is -n or --next-steps, update the Next Steps section
    elseif ($args[0] -eq "-n" -or $args[0] -eq "--next-steps") {
        if ($args.Count -lt 2) {
            Write-Host "Error: Not enough arguments provided." -ForegroundColor Red
            Write-Host "Usage: .\update-project-status.ps1 -n 'Next step 1' 'Next step 2' ..." -ForegroundColor Yellow
            exit 1
        }
        
        $nextSteps = $args[1..($args.Count-1)]
        
        Update-NextSteps -NextSteps $nextSteps
    }
    else {
        Write-Host "Error: Unknown argument '$($args[0])'." -ForegroundColor Red
        Write-Host "Usage: .\update-project-status.ps1 [-i|--interactive] [-u|--update 'Section Title' 'Update point 1' ...] [-n|--next-steps 'Next step 1' ...]" -ForegroundColor Yellow
        exit 1
    }
}
else {
    # If no arguments were provided, just update the date
    Write-Host "Updating project status date to: $currentDate" -ForegroundColor Green
}

# Write the updated content back to the file
$updatedContent | Set-Content $statusFile

# Output a confirmation message
Write-Host "Project status file has been updated successfully!" -ForegroundColor Green

# Optionally, you can automatically add the file to git
git add $statusFile

Write-Host "Project status file has been added to git staging area." -ForegroundColor Green
Write-Host ""
Write-Host "To commit this change, run: git commit -m 'Update project status'" -ForegroundColor Cyan
