# Deployment Guide

This guide will help you deploy your Yassine Naimi portfolio website to various hosting platforms.

## 🚀 Quick Deploy

### Option 1: Vercel (Recommended - Easiest)

Vercel is the company behind Next.js and offers the best integration.

**Step-by-step:**

1. **Push to GitHub**
   ```bash
   cd yassine-portfolio
   git init
   git add .
   git commit -m "Initial commit: Yassine Naimi Portfolio"
   git remote add origin https://github.com/yassinenaimi343-netizen/resume-portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js - just click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., yassinenaimi.com)
   - Follow DNS configuration instructions

**Environment Variables (if needed):**
- Go to Settings → Environment Variables
- Add any variables from `.env.example`

---

### Option 2: Netlify

**Step-by-step:**

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `.next`
     - **Install command**: `npm install --legacy-peer-deps`
   - Click "Deploy site"

3. **Custom Domain**
   - Go to Site settings → Domain management
   - Add custom domain and configure DNS

---

### Option 3: GitHub Pages (Static Export)

GitHub Pages requires static export, which limits some Next.js features.

1. **Update next.config.ts**:
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     transpilePackages: ['three'],
   };
   ```

2. **Add deploy script to package.json**:
   ```json
   "scripts": {
     "deploy": "next build && next export && touch out/.nojekyll"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   git add out -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix out origin gh-pages
   ```

4. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Your site will be at `https://yassinenaimi343-netizen.github.io/resume-portfolio/`

---

## 🔧 Build Troubleshooting

### Common Issues

**Issue 1: Peer dependency errors**
```bash
npm install --legacy-peer-deps
```

**Issue 2: Three.js build errors**
- Already configured in `next.config.ts` with `transpilePackages: ['three']`

**Issue 3: Image optimization errors**
- For static exports, set `images: { unoptimized: true }` in next.config.ts

**Issue 4: Environment variables not loading**
- Create `.env.local` from `.env.example`
- Prefix public variables with `NEXT_PUBLIC_`

---

## 📊 Post-Deployment Checklist

- [ ] Test all sections load correctly
- [ ] Verify 3D animations work
- [ ] Check mobile responsiveness
- [ ] Test contact links (email, phone, social)
- [ ] Verify resume download works
- [ ] Test dark mode
- [ ] Check page load speed (use [PageSpeed Insights](https://pagespeed.web.dev/))
- [ ] Verify SEO meta tags (use [Meta Tags](https://metatags.io/))
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Configure custom domain (if applicable)
- [ ] Set up analytics (Google Analytics, Vercel Analytics, etc.)

---

## 🌐 Custom Domain Setup

### Configure DNS Records

For most domain providers (GoDaddy, Namecheap, etc.):

**For Vercel:**
- Add A record: `76.76.21.21`
- Add CNAME record: `www` → `cname.vercel-dns.com`

**For Netlify:**
- Add CNAME record: `www` → `your-site.netlify.app`
- Or use Netlify DNS for automatic setup

### SSL Certificate

Both Vercel and Netlify automatically provision free SSL certificates via Let's Encrypt.

---

## 📈 Performance Optimization

- **Enable Compression**: Automatically enabled on Vercel/Netlify
- **Image Optimization**: Use Next.js Image component (already implemented)
- **Caching**: Configure in `next.config.ts` headers
- **Analytics**: Add Vercel Analytics or Google Analytics

---

## 🔐 Security Headers

Add to `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};
```

---

## 📞 Support

If you encounter issues:

1. Check [Next.js Documentation](https://nextjs.org/docs)
2. Visit [Vercel Support](https://vercel.com/support)
3. Check [Netlify Forums](https://answers.netlify.com/)
4. Contact: yassinenaimii@icloud.com

---

**Last Updated**: February 2025
