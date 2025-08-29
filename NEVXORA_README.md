# Nevxora - Digital Architects Website

A modern, responsive website for Nevxora Digital Architects, built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Dark theme with gradient accents and smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop views
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Interactive Components**: Smooth scrolling navigation and hover effects
- **Contact Form**: Functional contact form with form validation
- **Performance Optimized**: Fast loading with optimized images and assets

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/ui components
- **Icons**: Lucide React
- **Backend**: Supabase (ready for setup)
- **Forms**: React Hook Form with validation

## 📱 Responsive Design

The website is fully responsive with breakpoints optimized for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## 🎨 Design System

### Colors
- **Primary**: Cyan blue (#00BFFF) gradient to purple
- **Background**: Dark navy (#1a1b2e)
- **Cards**: Semi-transparent dark with backdrop blur
- **Text**: High contrast white/gray for accessibility

### Typography
- Modern, clean sans-serif fonts
- Responsive text scaling
- Proper contrast ratios

### Components
- Custom button variants with gradient effects
- Card components with hover animations
- Form inputs with focus states
- Navigation with smooth scrolling

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📧 Backend Setup (Optional)

To enable the contact form functionality:

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Get your project URL and anon key

2. **Update Supabase Configuration**
   ```typescript
   // src/lib/supabase.ts
   const supabaseUrl = 'YOUR_SUPABASE_URL'
   const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'
   ```

3. **Create Contact Table** (SQL in Supabase)
   ```sql
   create table contacts (
     id uuid default gen_random_uuid() primary key,
     name text not null,
     email text not null,
     message text not null,
     created_at timestamp default now()
   );
   ```

4. **Enable Row Level Security**
   ```sql
   alter table contacts enable row level security;
   
   create policy "Anyone can insert contacts" on contacts
   for insert with check (true);
   ```

## 📂 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Shadcn/ui components
│   ├── Header.tsx       # Navigation header
│   ├── HeroSection.tsx  # Hero section with services
│   ├── ServicesSection.tsx # Detailed services
│   ├── AboutSection.tsx # About company
│   ├── ContactSection.tsx # Contact form
│   └── Footer.tsx       # Footer
├── lib/                 # Utilities and config
│   ├── utils.ts         # Utility functions
│   └── supabase.ts      # Supabase client
├── assets/              # Images and static files
├── pages/               # Page components
└── hooks/               # Custom React hooks
```

## 🎯 Key Sections

### 1. Hero Section
- Company branding and tagline
- Service overview cards
- Call-to-action buttons
- Animated gradient effects

### 2. Services Section
- Detailed service descriptions
- Feature lists for each service
- Interactive hover effects
- Web Dev, Mobile Apps, AI/ML, E-commerce

### 3. About Section
- Company mission and vision
- Statistics and achievements
- Why choose Nevxora
- Professional credibility

### 4. Contact Section
- Contact form with validation
- Company contact information
- Professional presentation
- Form submission handling

## 🔧 Customization

### Colors
Update the design system in `src/index.css`:
```css
:root {
  --primary: 196 100% 50%;
  --gradient-primary: linear-gradient(135deg, hsl(196, 100%, 50%), hsl(270, 80%, 60%));
}
```

### Content
- Update company information in components
- Replace logo in `src/assets/`
- Modify service offerings
- Update contact details

### Styling
- Customize button variants in `src/components/ui/button.tsx`
- Modify animations and transitions
- Adjust responsive breakpoints

## 📱 Mobile Optimization

- Touch-friendly navigation
- Optimized font sizes
- Proper viewport configuration
- Fast loading on mobile networks
- Accessible form controls

## 🌟 Performance

- Lazy loading for images
- Optimized bundle size
- Minimal JavaScript payload
- Efficient CSS with Tailwind
- Fast development with Vite

## 📈 SEO Features

- Semantic HTML structure
- Proper heading hierarchy
- Meta tags and descriptions
- Open Graph tags
- Structured data ready
- Clean, crawlable URLs

## 🚀 Deployment

The website is ready for deployment on:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test responsiveness
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ by the Nevxora team using modern web technologies.