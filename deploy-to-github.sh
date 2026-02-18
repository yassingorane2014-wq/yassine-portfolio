#!/bin/bash

# Portfolio Deployment Script
# This script helps you deploy your portfolio to GitHub

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║                                                               ║"
echo "║           Portfolio GitHub Deployment Helper                 ║"
echo "║                                                               ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git not initialized. Initializing now..."
    git init
    git add .
    git commit -m "Initial commit: Professional portfolio website"
    echo "✅ Git initialized and initial commit created"
else
    echo "✅ Git repository already initialized"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 1: CREATE GITHUB REPOSITORY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Open this URL in your browser:"
echo "   👉 https://github.com/new"
echo ""
echo "2. Fill in the details:"
echo "   - Repository name: portfolio-website"
echo "   - Description: Professional Customer Service & Sales Portfolio"
echo "   - Visibility: Public (required for free hosting)"
echo "   - ⚠️  DO NOT initialize with README, .gitignore, or license"
echo ""
echo "3. Click 'Create repository'"
echo ""

read -p "Press Enter when you've created the repository..."

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 2: ENTER YOUR REPOSITORY URL"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Your repository URL should look like:"
echo "https://github.com/yassinenaimi343-netizen/portfolio-website.git"
echo ""

read -p "Enter your GitHub repository URL: " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ No URL provided. Using default..."
    REPO_URL="https://github.com/yassinenaimi343-netizen/portfolio-website.git"
fi

echo ""
echo "Using repository: $REPO_URL"
echo ""

# Check if remote already exists
if git remote | grep -q "origin"; then
    echo "⚠️  Remote 'origin' already exists. Removing..."
    git remote remove origin
fi

# Add remote
echo "Adding remote repository..."
git remote add origin "$REPO_URL"

# Rename branch to main
echo "Setting branch to 'main'..."
git branch -M main

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 3: PUSH TO GITHUB"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Pushing your code to GitHub..."
echo ""

# Push to GitHub
if git push -u origin main; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "STEP 4: DEPLOY TO VERCEL (RECOMMENDED)"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "Your code is now on GitHub! 🎉"
    echo ""
    echo "To deploy to Vercel (easiest & free):"
    echo ""
    echo "1. Go to: https://vercel.com"
    echo "2. Click 'Sign up' or 'Log in with GitHub'"
    echo "3. Click 'Import Project' or 'Add New Project'"
    echo "4. Select your 'portfolio-website' repository"
    echo "5. Click 'Deploy'"
    echo "6. Wait ~2 minutes for deployment"
    echo "7. Get your live URL! 🚀"
    echo ""
    echo "Your portfolio will be live at:"
    echo "https://portfolio-website.vercel.app"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "✅ DEPLOYMENT COMPLETE!"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "Your repository: $REPO_URL"
    echo ""
    echo "Next steps:"
    echo "  1. Deploy to Vercel (see instructions above)"
    echo "  2. Add portfolio URL to your resume"
    echo "  3. Share on LinkedIn"
    echo "  4. Update job applications"
    echo ""
else
    echo ""
    echo "❌ Failed to push to GitHub"
    echo ""
    echo "Possible issues:"
    echo "  1. Repository doesn't exist - create it first"
    echo "  2. Authentication required - you may need to:"
    echo "     - Use SSH URL instead: git@github.com:yassinenaimi343-netizen/portfolio-website.git"
    echo "     - Set up GitHub Personal Access Token"
    echo "     - Configure GitHub CLI: gh auth login"
    echo ""
    echo "Try this:"
    echo "  git remote set-url origin git@github.com:yassinenaimi343-netizen/portfolio-website.git"
    echo "  git push -u origin main"
    echo ""
fi

echo ""
echo "Need help? Check GITHUB_DEPLOYMENT.md for detailed instructions"
echo ""
