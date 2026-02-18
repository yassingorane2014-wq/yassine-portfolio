# 🚀 Quick Deploy Guide

## Option 1: Automated Script (Easiest)

I've created a script to help you deploy:

```bash
cd yassine-portfolio
./deploy-to-github.sh
```

The script will guide you through:
1. Creating the GitHub repository
2. Pushing your code
3. Deploying to Vercel

---

## Option 2: Manual Steps

### Step 1: Create GitHub Repository (2 minutes)

1. Go to: **https://github.com/new**
2. **Repository name**: `portfolio-website`
3. **Description**: `Professional Customer Service & Sales Portfolio`
4. **Visibility**: Public
5. **⚠️ IMPORTANT**: DO NOT check any boxes (no README, .gitignore, or license)
6. Click **"Create repository"**

### Step 2: Push Your Code (1 minute)

Your code is already initialized with git. Just run:

```bash
cd yassine-portfolio

# Add your GitHub repository
git remote add origin https://github.com/yassinenaimi343-netizen/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note**: Replace `yassinenaimi343-netizen` with your GitHub username if different.

### Step 3: Deploy to Vercel (3 minutes)

**Why Vercel?**
- ✅ Free forever
- ✅ Automatic HTTPS
- ✅ Auto-deploys on every git push
- ✅ Made by Next.js creators
- ✅ Zero configuration needed

**Deploy Steps:**

1. Go to: **https://vercel.com**
2. Click **"Sign up"** or **"Log in"**
3. Choose **"Continue with GitHub"**
4. Click **"Import Project"** or **"Add New Project"**
5. Find and select **"portfolio-website"**
6. Click **"Deploy"**
7. Wait 2-3 minutes ⏱️
8. **Done!** ✅

You'll get a URL like: `https://portfolio-website-xyz.vercel.app`

---

## Authentication Issues?

If git push fails, you may need to authenticate:

### Option A: GitHub CLI (Recommended)
```bash
# Install GitHub CLI
# Then authenticate
gh auth login

# Push again
git push -u origin main
```

### Option B: Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Generate new token (classic)
3. Select scopes: `repo` (all)
4. Copy the token
5. Use it as password when pushing

### Option C: SSH Key
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "yassinenaimi343@gmail.com"

# Add to GitHub: https://github.com/settings/ssh/new
# Copy your public key
cat ~/.ssh/id_ed25519.pub

# Update remote URL
git remote set-url origin git@github.com:yassinenaimi343-netizen/portfolio-website.git

# Push again
git push -u origin main
```

---

## After Deployment

### ✅ Your Portfolio is Live!

**Share it everywhere:**
- Add to your resume header
- LinkedIn profile summary
- Email signature
- Job applications
- Social media

### Monitor Performance
- Vercel Dashboard: https://vercel.com/dashboard
- Check analytics
- Monitor uptime

### Future Updates
Every time you want to update:
```bash
cd yassine-portfolio
# Make your changes
git add .
git commit -m "Update portfolio"
git push
```

Vercel automatically redeploys! 🚀

---

## Troubleshooting

### "Repository not found"
- Make sure you created the repository on GitHub first
- Check the repository URL is correct
- Ensure repository name matches exactly

### "Authentication failed"
- Use GitHub CLI: `gh auth login`
- Or use Personal Access Token
- Or set up SSH keys (see above)

### "Permission denied"
- Make sure you're logged into the correct GitHub account
- Repository must be under your account

### Build fails on Vercel
- Check build logs in Vercel dashboard
- Usually auto-fixes on retry
- Contact me if issues persist

---

## Summary

1. **Create repo**: https://github.com/new → `portfolio-website`
2. **Push code**: `git push -u origin main`
3. **Deploy**: https://vercel.com → Import → Deploy
4. **Share**: Add URL to resume and LinkedIn

**Estimated time**: 5-10 minutes total ⏱️

---

## Need Help?

- **Deployment script**: `./deploy-to-github.sh`
- **Detailed guide**: `GITHUB_DEPLOYMENT.md`
- **Vercel docs**: https://vercel.com/docs

---

**Your portfolio is ready to shine! Let's get it deployed! 🚀**
