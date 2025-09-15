# 📁 Folder Structure Documentation

## Overview
Dokumentasi lengkap struktur folder untuk proyek UD. SEHATI Company Profile Website.

## 🗂️ Root Directory

\`\`\`
company-profile-website/
├── 📁 app/                    # Next.js App Router (Pages & Layouts)
├── 📁 components/             # Reusable React Components
├── 📁 lib/                    # Utility Libraries & Configurations
├── 📁 contexts/               # React Context Providers
├── 📁 scripts/                # Database Scripts
├── 📁 public/                 # Static Assets
├── 📁 docs/                   # Documentation Files
├── 📄 middleware.ts           # Next.js Middleware
├── 📄 package.json            # Project Dependencies
├── 📄 next.config.mjs         # Next.js Configuration
├── 📄 tailwind.config.js      # Tailwind CSS Configuration
├── 📄 tsconfig.json           # TypeScript Configuration
├── 📄 components.json         # shadcn/ui Configuration
└── 📄 README.md               # Main Documentation
\`\`\`

## 📁 `/app` - Next.js App Router

### Public Routes (Website Utama)
\`\`\`
app/
├── 📄 layout.tsx              # Root Layout (Metadata, Fonts)
├── 📄 ClientLayout.tsx        # Client-side Layout Wrapper
├── 📄 globals.css             # Global Styles & CSS Variables
├── 📄 page.tsx                # Homepage (Hero, Features, Products)
├── 📄 about/
│   └── 📄 page.tsx            # About Us (Company Profile)
├── 📄 catalog/
│   ├── 📄 page.tsx            # Product Catalog
│   └── 📄 loading.tsx         # Loading UI
├── 📄 gallery/
│   └── 📄 page.tsx            # Photo Gallery
├── 📄 blog/
│   ├── 📄 page.tsx            # Blog List
│   └── 📄 loading.tsx         # Loading UI
├── 📄 contact/
│   └── 📄 page.tsx            # Contact Information & Form
└── 📄 recruitment/
    └── 📄 page.tsx            # Job Listings
\`\`\`

### Admin Routes (Dashboard)
\`\`\`
app/admin/
├── 📄 layout.tsx              # Admin Layout (Sidebar, Header)
├── 📄 login/
│   └── 📄 page.tsx            # Admin Login Form
├── 📄 dashboard/
│   └── 📄 page.tsx            # Admin Dashboard (Statistics)
├── 📄 company/
│   └── 📄 page.tsx            # Company Info Management
├── 📄 products/
│   ├── 📄 page.tsx            # Product Management (CRUD)
│   └── 📄 loading.tsx         # Loading UI
└── 📄 gallery/
    ├── 📄 page.tsx            # Gallery Management
    └── 📄 loading.tsx         # Loading UI
\`\`\`

### API Routes
\`\`\`
app/api/
└── 📄 upload/
    └── 📄 route.ts            # File Upload Handler
\`\`\`

## 📁 `/components` - React Components

### UI Components (shadcn/ui)
\`\`\`
components/ui/
├── 📄 button.tsx              # Button Component
├── 📄 card.tsx                # Card Component
├── 📄 input.tsx               # Input Component
├── 📄 badge.tsx               # Badge Component
├── 📄 dialog.tsx              # Dialog/Modal Component
├── 📄 dropdown-menu.tsx       # Dropdown Menu
├── 📄 form.tsx                # Form Components
├── 📄 table.tsx               # Table Component
├── 📄 toast.tsx               # Toast Notifications
└── ... (other shadcn/ui components)
\`\`\`

### Public Website Components
\`\`\`
components/public/
├── 📄 header.tsx              # Site Header (Navigation, Logo)
└── 📄 footer.tsx              # Site Footer (Links, Copyright)
\`\`\`

### Admin Dashboard Components
\`\`\`
components/admin/
├── 📄 header.tsx              # Admin Header (User Menu, Logout)
├── 📄 sidebar.tsx             # Admin Sidebar (Navigation Menu)
└── 📄 file-upload.tsx         # File Upload Component
\`\`\`

### Utility Components
\`\`\`
components/
├── 📄 FeaturedProducts.tsx    # Featured Products Display
├── 📄 language-switcher.tsx   # Language Toggle (ID/EN)
├── 📄 theme-switcher.tsx      # Theme Toggle (Light/Dark)
└── 📄 theme-provider.tsx      # Theme Context Provider
\`\`\`

## 📁 `/lib` - Libraries & Utilities

### Supabase Integration
\`\`\`
lib/supabase/
├── 📄 client.ts               # Client-side Supabase Client
├── 📄 server.ts               # Server-side Supabase Client
└── 📄 middleware.ts           # Authentication Middleware
\`\`\`

### Utilities
\`\`\`
lib/
├── 📄 i18n.ts                 # Internationalization (ID/EN)
└── 📄 utils.ts                # Utility Functions (cn, etc.)
\`\`\`

## 📁 `/contexts` - React Contexts

\`\`\`
contexts/
├── 📄 language-context.tsx    # Language State Management
└── 📄 theme-context.tsx       # Theme State Management
\`\`\`

## 📁 `/scripts` - Database Scripts

\`\`\`
scripts/
├── 📄 001_create_tables.sql   # Database Schema Creation
├── 📄 002_create_policies.sql # Row Level Security Policies
└── 📄 003_seed_data.sql       # Initial Data Seeding
\`\`\`

## 📁 `/public` - Static Assets

\`\`\`
public/
├── 📁 images/                 # Image Assets
│   ├── 📄 logo.png            # Company Logo
│   ├── 📄 hero-bg.jpg         # Hero Background
│   └── 📄 products/           # Product Images
├── 📄 favicon.ico             # Site Favicon
└── 📄 robots.txt              # SEO Robots File
\`\`\`

## 📁 `/docs` - Documentation

\`\`\`
docs/
├── 📄 FOLDER_STRUCTURE.md     # This File
├── 📄 API_DOCUMENTATION.md    # API Reference
├── 📄 DATABASE_SCHEMA.md      # Database Documentation
└── 📄 DEPLOYMENT_GUIDE.md     # Deployment Instructions
\`\`\`

## 🔧 Configuration Files

### Package Management
- **`package.json`** - Dependencies, scripts, project metadata
- **`package-lock.json`** - Dependency lock file

### Next.js Configuration
- **`next.config.mjs`** - Next.js settings, image domains, etc.
- **`middleware.ts`** - Route protection, authentication

### TypeScript Configuration
- **`tsconfig.json`** - TypeScript compiler options
- **`types/`** - Custom type definitions

### Styling Configuration
- **`tailwind.config.js`** - Tailwind CSS customization
- **`components.json`** - shadcn/ui configuration

## 📋 File Naming Conventions

### Pages
- **`page.tsx`** - Route pages
- **`layout.tsx`** - Layout components
- **`loading.tsx`** - Loading UI
- **`error.tsx`** - Error boundaries
- **`not-found.tsx`** - 404 pages

### Components
- **PascalCase** - React components (`FeaturedProducts.tsx`)
- **kebab-case** - Utility files (`file-upload.tsx`)
- **camelCase** - Hooks (`useLanguage.ts`)

### API Routes
- **`route.ts`** - API route handlers
- **Folder structure** - Matches URL structure

## 🎯 Best Practices

### Component Organization
1. **UI Components** - Reusable, generic components
2. **Feature Components** - Business logic components
3. **Page Components** - Route-specific components
4. **Layout Components** - Structural components

### File Structure Rules
1. **Co-location** - Keep related files together
2. **Separation of Concerns** - Separate UI, logic, and data
3. **Consistent Naming** - Follow established conventions
4. **Clear Hierarchy** - Logical folder nesting

### Import Organization
\`\`\`typescript
// External libraries
import React from 'react'
import { NextPage } from 'next'

// Internal utilities
import { cn } from '@/lib/utils'

// Components
import { Button } from '@/components/ui/button'
import { Header } from '@/components/public/header'

// Types
import type { Product } from '@/types'
\`\`\`

## 🔍 Quick Navigation

### Development Workflow
1. **Pages** → `/app/[route]/page.tsx`
2. **Components** → `/components/[category]/[name].tsx`
3. **Styles** → `/app/globals.css` or component-level
4. **Database** → `/scripts/[number]_[description].sql`
5. **API** → `/app/api/[endpoint]/route.ts`

### Common Locations
- **Add new page** → Create folder in `/app/`
- **Add component** → Create in appropriate `/components/` subfolder
- **Add utility** → Add to `/lib/`
- **Add context** → Create in `/contexts/`
- **Database changes** → New script in `/scripts/`

---

*Dokumentasi ini akan diupdate seiring perkembangan proyek.*
