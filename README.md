# UD. SEHATI - Company Profile Website

![UD. SEHATI Logo](public/indonesian-soy-sauce-bottles-and-spices-display.jpg)

## 📋 Project Overview

**UD. SEHATI** adalah website profil perusahaan untuk produsen bumbu masakan dan kecap "KOKIDOLLAR" yang telah berdiri sejak 2006. Website ini dibangun menggunakan Next.js 14 dengan fitur lengkap untuk menampilkan profil perusahaan, katalog produk, dan sistem manajemen admin.

### 🎯 Tujuan Proyek
- Membangun website company profile yang modern dan profesional
- Menyediakan katalog produk yang mudah diakses
- Sistem admin dashboard untuk manajemen konten
- Dukungan multi-bahasa (Indonesia/English)
- Responsive design untuk semua perangkat

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Themes**: next-themes
- **Internationalization**: Custom i18n system

## 📁 Struktur Folder

\`\`\`
company-profile-website/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 (public)/                 # Public website routes
│   │   ├── 📄 page.tsx              # Homepage
│   │   ├── 📄 about/page.tsx        # About Us
│   │   ├── 📄 catalog/page.tsx      # Product Catalog
│   │   ├── 📄 gallery/page.tsx      # Gallery
│   │   ├── 📄 blog/page.tsx         # Blog
│   │   ├── 📄 contact/page.tsx      # Contact Us
│   │   └── 📄 recruitment/page.tsx  # Recruitment
│   ├── 📁 admin/                    # Admin dashboard
│   │   ├── 📄 login/page.tsx        # Admin login
│   │   ├── 📄 dashboard/page.tsx    # Dashboard
│   │   ├── 📄 company/page.tsx      # Company management
│   │   ├── 📄 products/page.tsx     # Product management
│   │   ├── 📄 gallery/page.tsx      # Gallery management
│   │   └── 📄 layout.tsx            # Admin layout
│   ├── 📁 api/                      # API routes
│   │   └── 📄 upload/route.ts       # File upload
│   ├── 📄 layout.tsx                # Root layout
│   ├── 📄 ClientLayout.tsx          # Client-side layout
│   └── 📄 globals.css               # Global styles
├── 📁 components/                   # Reusable components
│   ├── 📁 ui/                       # shadcn/ui components
│   ├── 📁 public/                   # Public site components
│   │   ├── 📄 header.tsx            # Site header
│   │   └── 📄 footer.tsx            # Site footer
│   ├── 📁 admin/                    # Admin components
│   │   ├── 📄 header.tsx            # Admin header
│   │   ├── 📄 sidebar.tsx           # Admin sidebar
│   │   └── 📄 file-upload.tsx       # File upload
│   ├── 📄 FeaturedProducts.tsx      # Featured products
│   ├── 📄 language-switcher.tsx     # Language toggle
│   ├── 📄 theme-switcher.tsx        # Theme toggle
│   └── 📄 theme-provider.tsx        # Theme provider
├── 📁 lib/                          # Utilities
│   ├── 📁 supabase/                 # Supabase integration
│   │   ├── 📄 client.ts             # Client-side client
│   │   ├── 📄 server.ts             # Server-side client
│   │   └── 📄 middleware.ts         # Auth middleware
│   ├── 📄 i18n.ts                   # Internationalization
│   └── 📄 utils.ts                  # Utility functions
├── 📁 contexts/                     # React contexts
│   ├── 📄 language-context.tsx      # Language context
│   └── 📄 theme-context.tsx         # Theme context
├── 📁 scripts/                      # Database scripts
│   ├── 📄 001_create_tables.sql     # Database schema
│   ├── 📄 002_create_policies.sql   # RLS policies
│   └── 📄 003_seed_data.sql         # Sample data
├── 📁 public/                       # Static assets
│   └── 📁 images/                   # Image assets
├── 📄 middleware.ts                 # Next.js middleware
├── 📄 package.json                  # Dependencies
├── 📄 next.config.mjs               # Next.js config
├── 📄 tailwind.config.js            # Tailwind config
├── 📄 tsconfig.json                 # TypeScript config
└── 📄 components.json               # shadcn/ui config
\`\`\`

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm atau yarn
- Akun Supabase

### 1. Clone Repository
\`\`\`bash
git clone <repository-url>
cd company-profile-website
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
# atau
yarn install
\`\`\`

### 3. Setup Environment Variables
Buat file `.env.local` di root project:

\`\`\`env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000
\`\`\`

### 4. Setup Database
1. Buka Supabase Dashboard
2. Buat project baru
3. Jalankan script SQL berikut secara berurutan:
   - `scripts/001_create_tables.sql`
   - `scripts/002_create_policies.sql`
   - `scripts/003_seed_data.sql`

### 5. Run Development Server
\`\`\`bash
npm run dev
# atau
yarn dev
\`\`\`

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 🗄️ Database Schema

### Tables Overview
- **profiles** - User profiles dan authentication
- **company_info** - Informasi perusahaan
- **product_categories** - Kategori produk
- **products** - Katalog produk
- **gallery** - Galeri foto
- **blog_posts** - Artikel blog
- **contacts** - Form kontak
- **job_postings** - Lowongan kerja
- **job_applications** - Aplikasi kerja
- **site_settings** - Pengaturan website

### Key Features
- Row Level Security (RLS) untuk keamanan
- Real-time subscriptions
- File storage integration
- Multi-language content support

## 🔐 Authentication

### Admin Access
- **URL**: `/admin/login`
- **Default Admin**: Buat melalui Supabase Auth
- **Roles**: admin, editor, viewer

### Protected Routes
- Semua route `/admin/*` memerlukan authentication
- Middleware otomatis redirect ke login jika belum login

## 🌐 Internationalization

### Supported Languages
- 🇮🇩 **Indonesian** (default)
- 🇬🇧 **English**

### Usage
\`\`\`tsx
import { useLanguage } from '@/contexts/language-context'

function Component() {
  const { t, language, setLanguage } = useLanguage()
  
  return <h1>{t('welcome')}</h1>
}
\`\`\`

### Adding Translations
Edit `lib/i18n.ts` untuk menambah terjemahan baru.

## 🎨 Theming

### Available Themes
- ☀️ **Light Mode**
- 🌙 **Dark Mode**
- 🖥️ **System** (mengikuti OS)

### Custom Colors
- **Primary**: Cyan-800 (brand color)
- **Secondary**: Amber (accent color)
- **Neutral**: Gray scale

## 📱 Features

### Public Website
- ✅ Homepage dengan hero section
- ✅ About Us dengan sejarah perusahaan
- ✅ Product catalog dengan search & filter
- ✅ Gallery foto produk
- ✅ Blog artikel
- ✅ Contact form
- ✅ Recruitment page
- ✅ Multi-language support
- ✅ Dark/Light theme
- ✅ Responsive design

### Admin Dashboard
- ✅ Secure authentication
- ✅ Company information management
- ✅ Product CRUD operations
- ✅ Gallery management
- ✅ File upload system
- ✅ Blog management
- ✅ Contact form submissions
- ✅ Job posting management
- ✅ User management
- ✅ Site settings

## 🚀 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Connect repository di Vercel
3. Set environment variables
4. Deploy

### Manual Deployment
\`\`\`bash
npm run build
npm start
\`\`\`

## 🧪 Testing

### Local Testing
\`\`\`bash
# Development server
npm run dev

# Build test
npm run build
npm start

# Type checking
npm run type-check
\`\`\`

### Database Testing
1. Pastikan semua script SQL berhasil dijalankan
2. Test CRUD operations di admin dashboard
3. Verify RLS policies bekerja dengan benar

## 📚 API Documentation

### Public APIs
- `GET /api/products` - Get products
- `GET /api/gallery` - Get gallery items
- `GET /api/blog` - Get blog posts

### Admin APIs
- `POST /api/upload` - Upload files
- `POST /api/products` - Create product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

## 🔧 Configuration

### Next.js Config
\`\`\`javascript
// next.config.mjs
const nextConfig = {
  images: {
    domains: ['your-supabase-url.supabase.co'],
  },
}
\`\`\`

### Tailwind Config
\`\`\`javascript
// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      }
    }
  }
}
\`\`\`

## 🐛 Troubleshooting

### Common Issues

1. **Supabase Connection Error**
   - Periksa environment variables
   - Pastikan Supabase URL dan keys benar

2. **Authentication Issues**
   - Clear browser cookies
   - Check RLS policies
   - Verify user roles

3. **Build Errors**
   - Run `npm run type-check`
   - Check import paths
   - Verify all dependencies installed

### Debug Mode
Tambahkan `console.log("[v0] ...")` untuk debugging.

## 📞 Support

Untuk bantuan teknis:
- 📧 Email: support@udsehati.com
- 📱 WhatsApp: +62-xxx-xxxx-xxxx
- 🌐 Website: https://udsehati.com

## 📄 License

© 2024 UD. SEHATI. All rights reserved.

---

**Dibuat dengan ❤️ menggunakan Next.js dan Supabase**
