# Setup Guide - Yassine Naimi Portfolio

This guide will help you set up and customize your portfolio website.

## 📋 Prerequisites

Before you begin, make sure you have:

- ✅ Node.js 18 or higher installed ([Download here](https://nodejs.org/))
- ✅ Git installed ([Download here](https://git-scm.com/))
- ✅ A code editor (VS Code recommended)
- ✅ Your resume PDF file
- ✅ Your profile photo (optional)

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Dependencies

```bash
cd yassine-portfolio
npm install --legacy-peer-deps
```

This will install all required packages including:
- Next.js (React framework)
- Framer Motion (animations)
- Three.js (3D graphics)
- Tailwind CSS (styling)

### Step 2: Start Development Server

```bash
npm run dev
```

Open your browser and go to [http://localhost:3000](http://localhost:3000)

You should see your portfolio website running! 🎉

### Step 3: Make It Yours

Continue reading to customize the content.

---

## 🎨 Customization Guide

### 1. Update Profile Photo

**Current status**: Placeholder icon displayed

**To add your photo**:

1. Place your photo in the `public` folder (e.g., `public/profile.jpg`)
2. Open `components/About.tsx`
3. Find this section (around line 65):

```tsx
<div className="w-full h-full flex items-center justify-center">
  <User size={120} className="text-gray-400 dark:text-gray-600" />
</div>
```

4. Replace with:

```tsx
<img 
  src="/profile.jpg" 
  alt="Yassine Naimi" 
  className="w-full h-full object-cover"
/>
```

**Recommended photo specs**:
- Format: JPG or PNG
- Size: 800x800px minimum
- Aspect ratio: 1:1 (square)
- File size: < 500KB

---

### 2. Update Contact Information

**File**: `components/Contact.tsx`

Find and update these sections:

```tsx
// Email
href="mailto:yassinenaimii@icloud.com"

// Phone
href="tel:613-410-5524"

// Location
<p className="font-medium">341 Gloucester Street, Ottawa, ON</p>

// LinkedIn
href="https://linkedin.com/in/yassine-naimi"

// GitHub
href="https://github.com/yassinenaimi343-netizen"
```

---

### 3. Update Work Experience

**File**: `components/Experience.tsx`

The `experiences` array contains all work history. Format:

```typescript
{
  title: "Job Title",
  company: "Company Name",
  location: "City, Country",
  period: "Month Year – Month Year",
  description: [
    "Responsibility or achievement 1",
    "Responsibility or achievement 2",
    "Responsibility or achievement 3",
  ],
}
```

**To add a new job**:
- Copy an existing object
- Update all fields
- Add to the array

**To remove a job**:
- Delete the entire object from the array

---

### 4. Update Skills

**File**: `components/Skills.tsx`

The `skills` array contains skill categories. Format:

```typescript
{
  category: "Category Name",
  icon: IconComponent,  // From lucide-react
  items: ["Skill 1", "Skill 2", "Skill 3"],
}
```

**Available icons**: Browse at [lucide.dev](https://lucide.dev/)

**To modify**:
1. Import icon at top: `import { NewIcon } from "lucide-react";`
2. Update icon in category: `icon: NewIcon`
3. Update items array with your skills

---

### 5. Update Education & Achievements

**File**: `components/Projects.tsx`

The `projects` array contains education and achievements. Format:

```typescript
{
  title: "Degree or Achievement",
  category: "Education" or "Achievement",
  description: "Brief description",
  institution: "School/Company Name",
  period: "Month Year – Month Year",
  tags: ["Tag1", "Tag2", "Tag3"],
  icon: GraduationCap or Award,
}
```

---

### 6. Update About Section

**File**: `components/About.tsx`

Find the text paragraphs (around line 82) and update with your bio:

```tsx
<p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
  Your first paragraph here...
</p>

<p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
  Your second paragraph here...
</p>
```

**Update stats** (around line 97):

```tsx
<p className="text-3xl font-bold font-display">6+</p>
<p className="text-sm text-gray-500 dark:text-gray-400">Years Experience</p>
```

---

### 7. Update Hero Section

**File**: `components/Hero.tsx`

**Main heading** (around line 54):

```tsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight">
  <span className="block">Your First Name</span>
  <span className="block bg-gradient-to-r from-gray-900 to-gray-600...">
    Your Last Name
  </span>
</h1>
```

**Subtitle** (around line 62):

```tsx
<p className="text-xl md:text-2xl lg:text-3xl...">
  Your Professional Title
</p>
```

**Description** (around line 71):

```tsx
<p className="text-base md:text-lg...">
  Your brief bio/introduction
</p>
```

---

### 8. Update SEO & Metadata

**File**: `app/layout.tsx`

Update the metadata object (around line 17):

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your professional bio...",
  keywords: ["Your Name", "Keywords", "Here"],
  // ... update other fields
};
```

---

### 9. Replace Resume File

**Current**: `public/yassine_nami_cv_original.pdf`

**To update**:
1. Place your PDF in `public` folder
2. Rename it or update references in:
   - `components/About.tsx` (line 119)
   - `components/Contact.tsx` (line 138)

Example:
```tsx
href="/your-resume-name.pdf"
```

---

## 🎨 Color Customization

**File**: `tailwind.config.ts`

The site uses Tailwind's default colors plus custom accent color (indigo).

**To change accent color**:

Find all instances of:
- `bg-indigo-600` → `bg-yourcolor-600`
- `text-indigo-600` → `text-yourcolor-600`
- `border-indigo-600` → `border-yourcolor-600`

**Available colors**: blue, purple, pink, green, red, yellow, etc.

Or add custom colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_HEX_COLOR',
    },
  },
},
```

---

## 🌐 3D Animation Customization

**File**: `components/Scene3D.tsx`

**Change sphere color** (line 26):

```tsx
<MeshDistortMaterial
  color="#6366f1"  // Change this hex color
  // ...
/>
```

**Adjust animation speed** (line 29):

```tsx
speed={2}  // Higher = faster
```

**Adjust distortion** (line 28):

```tsx
distort={0.4}  // 0 to 1 (higher = more distortion)
```

---

## 📱 Testing Checklist

Before deploying, test these:

- [ ] All links work (email, phone, social media)
- [ ] Resume downloads correctly
- [ ] 3D animation loads and runs smoothly
- [ ] All text is updated (no placeholder content)
- [ ] Mobile view looks good
- [ ] Dark mode works
- [ ] All images load
- [ ] Navigation menu works
- [ ] Smooth scrolling works
- [ ] Animations trigger on scroll

**Test on multiple browsers**:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

---

## 🐛 Troubleshooting

### Build Errors

**Error**: `Cannot find module '@react-three/fiber'`
```bash
npm install --legacy-peer-deps
```

**Error**: `peer dependency warning`
```bash
# Already configured in .npmrc - ignore warnings
```

### Development Server Issues

**Port 3000 already in use**:
```bash
# Kill process on port 3000
npx kill-port 3000
# Then restart
npm run dev
```

**Changes not showing**:
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### 3D Graphics Not Showing

- Check browser console for WebGL errors
- Ensure browser supports WebGL
- Try updating browser

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Three.js Documentation](https://threejs.org/docs/)
- [Lucide Icons](https://lucide.dev/)

---

## 🎓 Learning Path

Want to customize further? Learn these technologies:

1. **React Basics** → [react.dev/learn](https://react.dev/learn)
2. **Next.js** → [nextjs.org/learn](https://nextjs.org/learn)
3. **Tailwind CSS** → [tailwindcss.com/docs](https://tailwindcss.com/docs)
4. **TypeScript** → [typescriptlang.org/docs](https://www.typescriptlang.org/docs/)

---

## 📞 Need Help?

If you get stuck:

1. Check this guide again
2. Read error messages carefully
3. Search for the error on Google/Stack Overflow
4. Check the [README.md](./README.md) file
5. Review [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment issues

---

**Happy customizing! 🚀**

*Last updated: February 2025*
