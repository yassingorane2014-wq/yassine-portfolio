# GitHub Deployment Guide

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio-website` (or your preferred name)
3. Description: "Professional portfolio website - Customer Service & Sales Professional"
4. **Keep it Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Push Your Code

After creating the repository, run these commands:

```bash
cd yassine-portfolio

# Add GitHub remote (replace with your actual repository URL)
git remote add origin https://github.com/yassinenaimi343-netizen/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel (Recommended - Easiest)

### Why Vercel?
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Automatic deployments on git push
- ✅ Best for Next.js (the company that makes Next.js)
- ✅ Custom domain support
- ✅ No configuration needed

### Steps:

1. **Go to https://vercel.com**
2. Click "Sign up" or "Log in"
3. Choose "Continue with GitHub"
4. Click "Import Project"
5. Select your `portfolio-website` repository
6. Click "Deploy"
7. **Done!** You'll get a URL like: `https://portfolio-website.vercel.app`

### Custom Domain (Optional)
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS instructions

---

## Alternative: Deploy to Netlify

If you prefer Netlify:

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

---

## Alternative: GitHub Pages (Static Export)

**Note**: GitHub Pages requires static export, which limits some Next.js features.

### Update next.config.ts:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['three'],
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-website' : '',
};

export default nextConfig;
```

### Deploy:

```bash
npm run build
git add out -f
git commit -m "Add static export"
git subtree push --prefix out origin gh-pages
```

### Enable GitHub Pages:
1. Go to repository Settings → Pages
2. Source: Deploy from branch
3. Branch: `gh-pages` / root
4. Save

Your site will be at: `https://yassinenaimi343-netizen.github.io/portfolio-website/`

---

## Recommended: Use Vercel

**Why Vercel is better**:
- No configuration needed
- Automatic HTTPS
- Faster performance
- Better Next.js support
- Automatic deployments
- Free custom domains

---

## After Deployment

### Update Your Links
1. Add portfolio URL to your resume
2. Add to LinkedIn profile
3. Add to email signature
4. Share on social media

### Monitor Performance
- Vercel Analytics (free)
- Google Analytics (optional)

### Keep Updated
Every time you push to GitHub:
- Vercel auto-deploys (no action needed)
- Check deployment at: vercel.com/dashboard

---

## Troubleshooting

### Build Fails
```bash
# Test build locally first
npm run build
```

### Port Issues
```bash
# Kill existing process
npx kill-port 3000
npm run dev
```

### Vercel Deployment Issues
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Check Node.js version compatibility

---

## Your Repository Info

**Repository**: https://github.com/yassinenaimi343-netizen/portfolio-website  
**Local Path**: `/root/yassine-portfolio/`  
**Git Status**: ✅ Initialized and committed  

---

## Next Steps

1. ✅ Create GitHub repository
2. ✅ Push code (see commands above)
3. ✅ Deploy to Vercel
4. ✅ Get your live URL
5. ✅ Share your portfolio!

---

*Last Updated: February 17, 2025*
