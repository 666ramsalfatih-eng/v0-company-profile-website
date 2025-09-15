# 🧪 Local Testing Guide

## Overview
Panduan lengkap untuk testing website UD. SEHATI di environment lokal.

## 🚀 Quick Start

### 1. Prerequisites Check
\`\`\`bash
# Check Node.js version (minimum 18.x)
node --version

# Check npm version
npm --version

# Check git
git --version
\`\`\`

### 2. Project Setup
\`\`\`bash
# Clone repository
git clone <repository-url>
cd company-profile-website

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local
\`\`\`

### 3. Environment Configuration
Edit `.env.local`:
\`\`\`env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Development URLs
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000

# Optional: Custom port
PORT=3000
\`\`\`

## 🗄️ Database Setup

### 1. Supabase Project Setup
1. Buka [Supabase Dashboard](https://supabase.com/dashboard)
2. Create new project
3. Copy Project URL dan API Keys
4. Paste ke `.env.local`

### 2. Run Database Scripts
Jalankan script berikut di Supabase SQL Editor:

\`\`\`sql
-- 1. Create Tables
-- Copy paste isi dari scripts/001_create_tables.sql

-- 2. Setup RLS Policies  
-- Copy paste isi dari scripts/002_create_policies.sql

-- 3. Seed Sample Data
-- Copy paste isi dari scripts/003_seed_data.sql
\`\`\`

### 3. Verify Database
\`\`\`sql
-- Check tables created
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';

-- Check sample data
SELECT * FROM company_info LIMIT 5;
SELECT * FROM products LIMIT 5;
\`\`\`

## 🏃‍♂️ Running the Application

### Development Server
\`\`\`bash
# Start development server
npm run dev

# Custom port
npm run dev -- -p 3001

# With turbo (faster)
npm run dev:turbo
\`\`\`

### Build Testing
\`\`\`bash
# Build for production
npm run build

# Start production server
npm start

# Analyze bundle
npm run analyze
\`\`\`

## 🧪 Testing Checklist

### ✅ Public Website Testing

#### Homepage (`/`)
- [ ] Hero section loads correctly
- [ ] Featured products display
- [ ] Navigation menu works
- [ ] Language switcher (ID/EN)
- [ ] Theme switcher (Light/Dark)
- [ ] Responsive design (mobile/tablet/desktop)
- [ ] All images load properly
- [ ] Links work correctly

#### About Page (`/about`)
- [ ] Company information displays
- [ ] Timeline/history section
- [ ] Vision & mission content
- [ ] Team information
- [ ] Contact details

#### Catalog Page (`/catalog`)
- [ ] Product list loads from database
- [ ] Search functionality
- [ ] Category filtering
- [ ] Product detail modal/page
- [ ] Pagination works
- [ ] Loading states

#### Gallery Page (`/gallery`)
- [ ] Images load from Supabase Storage
- [ ] Image modal/lightbox
- [ ] Categories filter
- [ ] Responsive grid layout

#### Blog Page (`/blog`)
- [ ] Blog posts list
- [ ] Article detail pages
- [ ] Search and categories
- [ ] Pagination
- [ ] SEO meta tags

#### Contact Page (`/contact`)
- [ ] Contact form submission
- [ ] Form validation
- [ ] Success/error messages
- [ ] Google Maps integration (if any)
- [ ] Contact information display

#### Recruitment Page (`/recruitment`)
- [ ] Job listings display
- [ ] Job application form
- [ ] File upload for CV
- [ ] Form validation

### ✅ Admin Dashboard Testing

#### Authentication (`/admin/login`)
- [ ] Login form works
- [ ] Validation messages
- [ ] Redirect after login
- [ ] Session persistence
- [ ] Logout functionality

#### Dashboard (`/admin/dashboard`)
- [ ] Statistics display correctly
- [ ] Charts/graphs load
- [ ] Recent activities
- [ ] Quick actions work

#### Company Management (`/admin/company`)
- [ ] Company info form
- [ ] Update functionality
- [ ] Image upload
- [ ] Form validation
- [ ] Success messages

#### Product Management (`/admin/products`)
- [ ] Product list with pagination
- [ ] Add new product
- [ ] Edit existing product
- [ ] Delete product (with confirmation)
- [ ] Image upload
- [ ] Category assignment
- [ ] Search and filter

#### Gallery Management (`/admin/gallery`)
- [ ] Image upload (single/multiple)
- [ ] Image preview
- [ ] Edit image details
- [ ] Delete images
- [ ] Category management

### ✅ API Testing

#### File Upload (`/api/upload`)
\`\`\`bash
# Test file upload
curl -X POST http://localhost:3000/api/upload \
  -F "file=@test-image.jpg" \
  -H "Authorization: Bearer YOUR_TOKEN"
\`\`\`

#### Database Operations
- [ ] Create operations work
- [ ] Read operations return correct data
- [ ] Update operations persist
- [ ] Delete operations remove data
- [ ] RLS policies enforce security

## 🔧 Development Tools

### Browser DevTools
\`\`\`javascript
// Check Supabase connection
console.log(window.supabase)

// Check current user
const { data: user } = await supabase.auth.getUser()
console.log(user)

// Test database query
const { data, error } = await supabase
  .from('products')
  .select('*')
  .limit(5)
console.log(data, error)
\`\`\`

### Network Tab Monitoring
- [ ] API calls return 200 status
- [ ] No 404 errors for assets
- [ ] Reasonable load times
- [ ] Proper caching headers

### Console Errors
- [ ] No JavaScript errors
- [ ] No React warnings
- [ ] No TypeScript errors
- [ ] No accessibility warnings

## 🐛 Common Issues & Solutions

### 1. Supabase Connection Issues
\`\`\`bash
# Check environment variables
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY

# Test connection
curl -H "apikey: YOUR_ANON_KEY" \
     -H "Authorization: Bearer YOUR_ANON_KEY" \
     "YOUR_SUPABASE_URL/rest/v1/products?select=*"
\`\`\`

### 2. Authentication Problems
\`\`\`sql
-- Check user in Supabase
SELECT * FROM auth.users;

-- Check profiles table
SELECT * FROM profiles;

-- Reset user password
UPDATE auth.users 
SET encrypted_password = crypt('newpassword', gen_salt('bf'))
WHERE email = 'admin@example.com';
\`\`\`

### 3. File Upload Issues
- Check Supabase Storage bucket exists
- Verify RLS policies on storage
- Check file size limits
- Verify MIME type restrictions

### 4. Build Errors
\`\`\`bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules
rm -rf node_modules package-lock.json
npm install

# Type checking
npm run type-check

# Lint checking
npm run lint
\`\`\`

## 📊 Performance Testing

### Lighthouse Audit
\`\`\`bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html
\`\`\`

### Core Web Vitals
- [ ] First Contentful Paint (FCP) < 1.8s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1

### Bundle Analysis
\`\`\`bash
# Analyze bundle size
npm run analyze

# Check for unused dependencies
npx depcheck
\`\`\`

## 🔒 Security Testing

### Authentication Testing
- [ ] Protected routes redirect to login
- [ ] JWT tokens expire correctly
- [ ] Session management works
- [ ] Role-based access control

### Input Validation
- [ ] XSS protection
- [ ] SQL injection prevention
- [ ] File upload restrictions
- [ ] Form validation

### RLS Policy Testing
\`\`\`sql
-- Test as different users
SET ROLE authenticated;
SELECT * FROM products; -- Should work

SET ROLE anon;
SELECT * FROM products; -- Should work (public data)

-- Test admin-only data
SELECT * FROM profiles; -- Should fail for non-admin
\`\`\`

## 📱 Mobile Testing

### Responsive Design
- [ ] iPhone SE (375px)
- [ ] iPhone 12 (390px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)

### Touch Interactions
- [ ] Buttons are touch-friendly (44px minimum)
- [ ] Swipe gestures work
- [ ] Scroll behavior is smooth
- [ ] No horizontal scroll

### Performance on Mobile
- [ ] Fast loading on 3G
- [ ] Images are optimized
- [ ] Minimal JavaScript bundle

## 🚀 Pre-Deployment Checklist

### Code Quality
- [ ] All TypeScript errors resolved
- [ ] ESLint warnings addressed
- [ ] Prettier formatting applied
- [ ] No console.log statements in production

### Environment Variables
- [ ] All required env vars set
- [ ] No sensitive data in client-side code
- [ ] Proper CORS configuration

### Database
- [ ] All migrations applied
- [ ] RLS policies tested
- [ ] Backup strategy in place

### Assets
- [ ] All images optimized
- [ ] Favicon and meta tags set
- [ ] robots.txt configured
- [ ] sitemap.xml generated

---

## 📞 Getting Help

Jika mengalami masalah:

1. **Check logs**: `npm run dev` output
2. **Browser console**: F12 → Console tab
3. **Supabase logs**: Dashboard → Logs
4. **GitHub Issues**: Create issue dengan detail error

**Happy Testing! 🎉**
