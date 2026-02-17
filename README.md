# Yassine Naimi - Portfolio Website

A modern, interactive portfolio website built with Next.js, React, Three.js, and Framer Motion. This website is a pixel-perfect clone of the design style from [devashish.design](https://www.devashish.design/), customized with Yassine Naimi's personal information and professional experience.

## ✨ Features

- **Modern Design**: Clean, minimalist aesthetic with smooth animations
- **3D Interactive Elements**: Three.js powered 3D animations and interactive components
- **Smooth Animations**: Framer Motion for buttery-smooth page transitions and micro-interactions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards configured
- **Performance Optimized**: Fast loading with optimized images and lazy loading

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yassinenaimi343-netizen/resume-portfolio.git
   cd yassine-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yassinenaimi343-netizen/resume-portfolio)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

### Manual Build

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
yassine-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section with 3D
│   ├── Scene3D.tsx         # Three.js 3D scene
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Work experience timeline
│   ├── Skills.tsx          # Skills grid
│   ├── Projects.tsx        # Education & achievements
│   └── Contact.tsx         # Contact section
├── lib/
│   └── animations.ts       # Reusable animation variants
├── public/
│   └── yassine_nami_cv_original.pdf  # Resume file
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🎨 Customization

### Update Personal Information

All personal data is contained within the component files. To update:

1. **Contact Info**: Edit `components/Contact.tsx`
2. **Work Experience**: Edit `components/Experience.tsx`
3. **Skills**: Edit `components/Skills.tsx`
4. **Education**: Edit `components/Projects.tsx`
5. **About Me**: Edit `components/About.tsx`

### Add Profile Photo

Replace the placeholder in `components/About.tsx`:

```tsx
// Replace this:
<div className="w-full h-full flex items-center justify-center">
  <User size={120} className="text-gray-400 dark:text-gray-600" />
</div>

// With:
<img 
  src="/your-photo.jpg" 
  alt="Yassine Naimi" 
  className="w-full h-full object-cover"
/>
```

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme.

## 📝 Content Sections

- **Hero**: Introduction with animated 3D background
- **About**: Personal bio, stats, and downloadable resume
- **Experience**: Work history with timeline layout
- **Skills**: Professional capabilities organized by category
- **Projects**: Education and achievements showcase
- **Contact**: Contact information and social links

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Server-side rendering with Next.js
- Optimized images and assets
- Lazy loading for components
- Efficient animations with Framer Motion
- Code splitting and tree shaking

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Design inspiration: [Dev Ashish Dewangan](https://www.devashish.design/)
- Built by: Yassine Naimi

## 📞 Contact

- **Email**: yassinenaimii@icloud.com
- **Phone**: 613-410-5524
- **Location**: Ottawa, ON, Canada
- **LinkedIn**: [linkedin.com/in/yassine-naimi](https://linkedin.com/in/yassine-naimi)
- **GitHub**: [github.com/yassinenaimi343-netizen](https://github.com/yassinenaimi343-netizen)

---

**Note**: This portfolio website was built to showcase professional experience and skills. All content is accurate and represents real achievements and qualifications.
