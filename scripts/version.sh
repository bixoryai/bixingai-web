#!/bin/bash

# DEPRECATED: Version Management Script for BixingAI Web
# This script is no longer needed as releases are now fully automated.
#
# 🎉 NEW AUTOMATED PROCESS:
#   - Create feature branches from 'develop'
#   - Make changes and commit with descriptive messages
#   - Create PR from feature branch to 'develop'
#   - Merge develop to main via PR
#   - GitHub Actions automatically creates release with intelligent version bumping!
#
# Version bumping is based on commit analysis:
#   - PATCH: fix, bug, patch, hotfix, security, lint, style, refactor, docs, chore
#   - MINOR: feat, feature, add, new, implement, create, enhance, improve
#   - MAJOR: breaking, major, breaking change, api change, remove, delete, drop
#
# Manual override available via GitHub Actions workflow_dispatch if needed.

echo "⚠️  DEPRECATED: This script is no longer needed!"
echo ""
echo "🎉 Releases are now fully automated!"
echo ""
echo "📋 New workflow:"
echo "   1. Work on 'develop' branch (or feature branches)"
echo "   2. Create PR to merge develop → main"
echo "   3. GitHub Actions automatically:"
echo "      - Analyzes commits for version bump type"
echo "      - Creates new version tag"
echo "      - Generates release notes"
echo "      - Creates GitHub release"
echo ""
echo "🔗 Check the release workflow: .github/workflows/release.yml"
echo ""
exit 0

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if we're on main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo -e "${RED}❌ Error: Must be on main branch to create releases${NC}"
    echo -e "${YELLOW}Current branch: $CURRENT_BRANCH${NC}"
    exit 1
fi

# Check if working tree is clean
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${RED}❌ Error: Working tree is not clean. Please commit or stash changes.${NC}"
    git status --short
    exit 1
fi

# Validate arguments
if [ $# -lt 1 ]; then
    echo -e "${BLUE}Usage: $0 [patch|minor|major] \"Release description\"${NC}"
    echo -e "${YELLOW}Examples:${NC}"
    echo -e "  $0 patch \"Fix critical bug in form validation\""
    echo -e "  $0 minor \"Add new feature to contact form\""
    echo -e "  $0 major \"Complete redesign of homepage\""
    exit 1
fi

VERSION_TYPE=$1
DESCRIPTION=$2

# Validate version type
case $VERSION_TYPE in
    patch|minor|major)
        ;;
    *)
        echo -e "${RED}❌ Error: Version type must be 'patch', 'minor', or 'major'${NC}"
        exit 1
        ;;
esac

# Get current version
CURRENT_VERSION=$(git describe --tags --abbrev=0 2>/dev/null || echo "v0.0.0")
CURRENT_VERSION=${CURRENT_VERSION#v} # Remove 'v' prefix

echo -e "${BLUE}📋 Current version: v${CURRENT_VERSION}${NC}"

# Parse version numbers
IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT_VERSION"

# Increment version based on type
case $VERSION_TYPE in
    patch)
        PATCH=$((PATCH + 1))
        ;;
    minor)
        MINOR=$((MINOR + 1))
        PATCH=0
        ;;
    major)
        MAJOR=$((MAJOR + 1))
        MINOR=0
        PATCH=0
        ;;
esac

NEW_VERSION="${MAJOR}.${MINOR}.${PATCH}"
NEW_TAG="v${NEW_VERSION}"

echo -e "${GREEN}🎯 New version: ${NEW_TAG}${NC}"
echo -e "${YELLOW}📝 Description: ${DESCRIPTION}${NC}"

# Confirm with user
echo -e "${YELLOW}⚠️  This will create a new release. Continue? (y/N)${NC}"
read -r CONFIRM
if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
    echo -e "${BLUE}Operation cancelled.${NC}"
    exit 0
fi

# Run quality checks
echo -e "${BLUE}🔍 Running quality checks...${NC}"
npm run lint

ERROR_COUNT=$(npm run lint 2>&1 | grep -c "error" || true)
if [ "$ERROR_COUNT" -gt 0 ]; then
    echo -e "${RED}❌ Cannot release: Found $ERROR_COUNT critical errors${NC}"
    npm run lint
    exit 1
fi

echo -e "${GREEN}✅ Quality checks passed${NC}"

# Update package.json version (if needed)
echo -e "${BLUE}📦 Updating package.json version...${NC}"
npm version $NEW_VERSION --no-git-tag-version

# Create and push tag
echo -e "${BLUE}🏷️  Creating tag ${NEW_TAG}...${NC}"
git add package.json
git commit -m "Bump version to ${NEW_VERSION}" || true # Ignore if no changes

git tag -a "$NEW_TAG" -m "Release ${NEW_TAG}: ${DESCRIPTION}

${DESCRIPTION}

Version: ${NEW_VERSION}
Type: ${VERSION_TYPE}
Date: $(date -u)"

echo -e "${BLUE}📤 Pushing changes and tag...${NC}"
git push origin main
git push origin "$NEW_TAG"

# Create GitHub release
echo -e "${BLUE}🚀 Creating GitHub release...${NC}"
gh release create "$NEW_TAG" \
    --title "Release ${NEW_TAG}" \
    --notes "## 🚀 Release ${NEW_TAG}

**${DESCRIPTION}**

### Version Details
- **Version:** ${NEW_VERSION}
- **Type:** ${VERSION_TYPE}
- **Date:** $(date -u)

### Quality Metrics
- **Linting Status:** ✅ Passed
- **Critical Errors:** 0
- **Total Issues:** $(npm run lint 2>&1 | grep -o "[0-9]* problems" | head -1)

### Deployment
Ready for production deployment ✨"

echo -e "${GREEN}🎉 Release ${NEW_TAG} created successfully!${NC}"
echo -e "${BLUE}📋 Release URL: https://github.com/bixoryai/bixingai-web/releases/tag/${NEW_TAG}${NC}"