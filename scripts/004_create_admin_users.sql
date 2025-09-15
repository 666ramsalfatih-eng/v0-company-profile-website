-- Create admin users and comprehensive dummy data
-- This script creates admin users in auth.users and profiles tables

-- Insert admin user into auth.users (this will be handled by Supabase Auth)
-- We'll create the profile entries that correspond to admin users

-- Insert admin profiles (assuming admin users will be created via Supabase Auth)
INSERT INTO profiles (id, username, full_name, role, created_at, updated_at) VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'admin', 'Administrator', 'admin', NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440002', 'manager', 'Manager User', 'manager', NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440003', 'editor', 'Content Editor', 'editor', NOW(), NOW());

-- Insert company information
INSERT INTO company_info (
  id, name, profile_text, vision, mission, address, phone, email, whatsapp, 
  logo_url, social_media, operating_hours, created_at, updated_at
) VALUES (
  '550e8400-e29b-41d4-a716-446655440010',
  'UD. SEHATI',
  'UD. SEHATI adalah perusahaan yang bergerak di bidang produksi bumbu masakan tradisional Indonesia, khususnya kecap dengan merek "KOKIDOLLAR". Didirikan pada tahun 2006, kami telah melayani kebutuhan bumbu masakan berkualitas tinggi untuk UMKM dan konsumen rumah tangga.',
  'Menjadi produsen bumbu masakan terdepan di Indonesia yang mengutamakan kualitas dan cita rasa autentik.',
  'Menyediakan produk bumbu masakan berkualitas tinggi dengan harga terjangkau untuk meningkatkan cita rasa masakan Indonesia.',
  'Jl. Raya Industri No. 123, Bekasi, Jawa Barat 17530',
  '+62-21-8888-9999',
  'info@udsehati.com',
  '+62-812-3456-7890',
  '/logo-ud-sehati.png',
  '{"facebook": "https://facebook.com/udsehati", "instagram": "@udsehati", "twitter": "@udsehati"}',
  '{"monday": "08:00-17:00", "tuesday": "08:00-17:00", "wednesday": "08:00-17:00", "thursday": "08:00-17:00", "friday": "08:00-17:00", "saturday": "08:00-12:00", "sunday": "closed"}',
  NOW(),
  NOW()
);

-- Insert more product categories
INSERT INTO product_categories (id, name, description, is_active, created_at, updated_at) VALUES
  ('550e8400-e29b-41d4-a716-446655440020', 'Kecap Manis', 'Kecap manis dengan berbagai varian rasa', true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440021', 'Kecap Asin', 'Kecap asin untuk berbagai masakan', true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440022', 'Bumbu Instan', 'Bumbu masakan siap pakai', true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440023', 'Saus & Sambal', 'Berbagai macam saus dan sambal', true, NOW(), NOW());

-- Insert more products
INSERT INTO products (
  id, name, description, price, image_url, category_id, 
  is_active, is_featured, discount_percentage, specifications, created_at, updated_at
) VALUES
  ('550e8400-e29b-41d4-a716-446655440030', 'KOKIDOLLAR Kecap Manis Premium 600ml', 'Kecap manis premium dengan rasa yang kaya dan tekstur yang sempurna. Dibuat dari kedelai pilihan dan gula aren asli.', 25000, '/kokidollar-sweet-soy-sauce-bottle.jpg', '550e8400-e29b-41d4-a716-446655440020', true, true, 0, '{"volume": "600ml", "ingredients": "Kedelai, Gula Aren, Garam, Air", "shelf_life": "24 bulan", "halal": true}', NOW(), NOW()),
  
  ('550e8400-e29b-41d4-a716-446655440031', 'KOKIDOLLAR Kecap Asin 500ml', 'Kecap asin berkualitas tinggi untuk berbagai masakan Indonesia. Memberikan rasa gurih yang sempurna.', 20000, '/kokidollar-salty-soy-sauce-bottle.jpg', '550e8400-e29b-41d4-a716-446655440021', true, true, 10, '{"volume": "500ml", "ingredients": "Kedelai, Garam, Air", "shelf_life": "24 bulan", "halal": true}', NOW(), NOW()),
  
  ('550e8400-e29b-41d4-a716-446655440032', 'KOKIDOLLAR Kecap Manis 300ml', 'Kemasan praktis untuk kebutuhan rumah tangga sehari-hari. Kualitas premium dalam kemasan yang ekonomis.', 15000, '/kokidollar-sweet-soy-sauce-bottle.jpg', '550e8400-e29b-41d4-a716-446655440020', true, false, 0, '{"volume": "300ml", "ingredients": "Kedelai, Gula Aren, Garam, Air", "shelf_life": "24 bulan", "halal": true}', NOW(), NOW()),
  
  ('550e8400-e29b-41d4-a716-446655440033', 'Bumbu Rendang Instan KOKIDOLLAR', 'Bumbu rendang siap pakai dengan rasa autentik Padang. Praktis dan mudah digunakan.', 12000, '/traditional-indonesian-soy-sauce-bottles-and-spice.jpg', '550e8400-e29b-41d4-a716-446655440022', true, true, 15, '{"weight": "100g", "serves": "4-6 porsi", "shelf_life": "18 bulan", "halal": true}', NOW(), NOW()),
  
  ('550e8400-e29b-41d4-a716-446655440034', 'Sambal Oelek KOKIDOLLAR', 'Sambal oelek pedas dengan cita rasa tradisional. Cocok untuk berbagai masakan.', 18000, '/traditional-indonesian-soy-sauce-bottles-and-spice.jpg', '550e8400-e29b-41d4-a716-446655440023', true, false, 0, '{"volume": "250ml", "spice_level": "Pedas", "shelf_life": "12 bulan", "halal": true}', NOW(), NOW());

-- Insert product ratings
INSERT INTO product_ratings (id, product_id, reviewer_name, reviewer_email, rating, review, is_approved, created_at) VALUES
  ('550e8400-e29b-41d4-a716-446655440040', '550e8400-e29b-41d4-a716-446655440030', 'Sari Dewi', 'sari.dewi@email.com', 5, 'Kecap manis terenak yang pernah saya coba! Rasanya pas dan tidak terlalu manis.', true, NOW()),
  ('550e8400-e29b-41d4-a716-446655440041', '550e8400-e29b-41d4-a716-446655440030', 'Budi Santoso', 'budi.santoso@email.com', 4, 'Kualitas bagus, harga terjangkau. Recommended!', true, NOW()),
  ('550e8400-e29b-41d4-a716-446655440042', '550e8400-e29b-41d4-a716-446655440031', 'Maya Sari', 'maya.sari@email.com', 5, 'Kecap asin yang gurih dan tidak terlalu asin. Cocok untuk masakan Chinese food.', true, NOW()),
  ('550e8400-e29b-41d4-a716-446655440043', '550e8400-e29b-41d4-a716-446655440033', 'Ahmad Rizki', 'ahmad.rizki@email.com', 4, 'Bumbu rendang yang praktis dan rasanya mendekati buatan sendiri.', true, NOW());

-- Insert gallery items
INSERT INTO gallery (id, title, description, image_url, category, is_active, sort_order, created_at, updated_at) VALUES
  ('550e8400-e29b-41d4-a716-446655440050', 'Pabrik Produksi KOKIDOLLAR', 'Fasilitas produksi modern dengan standar kebersihan tinggi', '/indonesian-soy-sauce-bottles-and-spices-display.jpg', 'Fasilitas', true, 1, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440051', 'Proses Pembuatan Kecap', 'Proses fermentasi kedelai dengan metode tradisional', '/traditional-indonesian-soy-sauce-bottles-and-spice.jpg', 'Produksi', true, 2, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440052', 'Tim Produksi Berpengalaman', 'Tim ahli dengan pengalaman puluhan tahun', '/indonesian-soy-sauce-bottles-and-spices-display.jpg', 'Tim', true, 3, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440053', 'Produk KOKIDOLLAR', 'Berbagai varian produk kecap dan bumbu KOKIDOLLAR', '/kokidollar-sweet-soy-sauce-bottle.jpg', 'Produk', true, 4, NOW(), NOW());

-- Insert blog posts
INSERT INTO blog_posts (
  id, title, slug, excerpt, content, featured_image_url, author_id, 
  is_published, published_at, meta_title, meta_description, tags, created_at, updated_at
) VALUES
  ('550e8400-e29b-41d4-a716-446655440060', 
   'Sejarah dan Tradisi Pembuatan Kecap Indonesia', 
   'sejarah-tradisi-pembuatan-kecap-indonesia',
   'Mengenal lebih dalam tentang sejarah dan tradisi pembuatan kecap di Indonesia yang telah berlangsung selama berabad-abad.',
   'Kecap merupakan salah satu bumbu dapur yang tidak dapat dipisahkan dari masakan Indonesia. Sejarah kecap di Indonesia dimulai sejak masuknya pengaruh Tiongkok pada abad ke-15. Namun, seiring berjalannya waktu, kecap Indonesia mengalami adaptasi dan modifikasi sesuai dengan selera lokal...',
   '/traditional-indonesian-soy-sauce-bottles-and-spice.jpg',
   '550e8400-e29b-41d4-a716-446655440001',
   true, NOW(), 
   'Sejarah Kecap Indonesia | UD. SEHATI',
   'Pelajari sejarah dan tradisi pembuatan kecap Indonesia dari masa ke masa',
   '["sejarah", "kecap", "tradisi", "indonesia"]',
   NOW(), NOW()),
   
  ('550e8400-e29b-41d4-a716-446655440061',
   'Tips Memilih Kecap Berkualitas untuk Masakan Anda',
   'tips-memilih-kecap-berkualitas',
   'Panduan lengkap untuk memilih kecap berkualitas yang akan membuat masakan Anda semakin lezat dan bergizi.',
   'Memilih kecap yang berkualitas sangat penting untuk menghasilkan masakan yang lezat. Berikut adalah beberapa tips yang dapat membantu Anda memilih kecap terbaik...',
   '/kokidollar-sweet-soy-sauce-bottle.jpg',
   '550e8400-e29b-41d4-a716-446655440002',
   true, NOW(),
   'Tips Memilih Kecap Berkualitas | UD. SEHATI',
   'Panduan memilih kecap berkualitas untuk masakan yang lebih lezat',
   '["tips", "kecap", "masakan", "kualitas"]',
   NOW(), NOW());

-- Insert job postings
INSERT INTO job_postings (
  id, title, department, location, employment_type, description, requirements, 
  salary_range, is_active, expires_at, created_at, updated_at
) VALUES
  ('550e8400-e29b-41d4-a716-446655440070',
   'Operator Produksi',
   'Produksi',
   'Bekasi, Jawa Barat',
   'Full Time',
   'Bertanggung jawab dalam proses produksi kecap dan bumbu masakan sesuai dengan standar kualitas perusahaan.',
   'Pendidikan minimal SMA/SMK, pengalaman di bidang produksi makanan minimal 1 tahun, mampu bekerja dalam tim, teliti dan bertanggung jawab.',
   'Rp 4.000.000 - Rp 5.500.000',
   true,
   NOW() + INTERVAL '30 days',
   NOW(), NOW()),
   
  ('550e8400-e29b-41d4-a716-446655440071',
   'Marketing Executive',
   'Marketing',
   'Jakarta/Bekasi',
   'Full Time',
   'Mengembangkan strategi pemasaran dan menjalin kerjasama dengan mitra bisnis untuk meningkatkan penjualan produk.',
   'Pendidikan minimal D3/S1 Marketing/Manajemen, pengalaman marketing minimal 2 tahun, memiliki kendaraan sendiri, komunikatif dan target oriented.',
   'Rp 6.000.000 - Rp 8.000.000',
   true,
   NOW() + INTERVAL '45 days',
   NOW(), NOW());

-- Insert online shops
INSERT INTO online_shops (id, name, url, icon_url, is_active, sort_order, created_at, updated_at) VALUES
  ('550e8400-e29b-41d4-a716-446655440080', 'Shopee', 'https://shopee.co.id/udsehati', '/shopee-icon.png', true, 1, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440081', 'Tokopedia', 'https://tokopedia.com/udsehati', '/tokopedia-icon.png', true, 2, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440082', 'Lazada', 'https://lazada.co.id/udsehati', '/lazada-icon.png', true, 3, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440083', 'Blibli', 'https://blibli.com/udsehati', '/blibli-icon.png', true, 4, NOW(), NOW());

-- Insert banners
INSERT INTO banners (id, title, subtitle, image_url, link_url, is_active, sort_order, created_at, updated_at) VALUES
  ('550e8400-e29b-41d4-a716-446655440090', 
   'KOKIDOLLAR - Kecap Premium Indonesia', 
   'Cita rasa autentik untuk masakan terbaik Anda',
   '/traditional-indonesian-soy-sauce-bottles-and-spice.jpg',
   '/catalog',
   true, 1, NOW(), NOW()),
   
  ('550e8400-e29b-41d4-a716-446655440091',
   'Promo Spesial Bulan Ini',
   'Diskon hingga 15% untuk pembelian dalam jumlah besar',
   '/kokidollar-sweet-soy-sauce-bottle.jpg',
   '/catalog',
   true, 2, NOW(), NOW());

-- Insert contacts
INSERT INTO contacts (id, type, label, value, icon, is_active, sort_order, created_at, updated_at) VALUES
  ('550e8400-e29b-41d4-a716-446655440100', 'phone', 'Telepon Kantor', '+62-21-8888-9999', 'phone', true, 1, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440101', 'whatsapp', 'WhatsApp', '+62-812-3456-7890', 'message-circle', true, 2, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440102', 'email', 'Email', 'info@udsehati.com', 'mail', true, 3, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440103', 'address', 'Alamat', 'Jl. Raya Industri No. 123, Bekasi, Jawa Barat 17530', 'map-pin', true, 4, NOW(), NOW());

-- Insert site settings
INSERT INTO site_settings (id, key, value, description, created_at, updated_at) VALUES
  ('550e8400-e29b-41d4-a716-446655440110', 'site_name', '"UD. SEHATI"', 'Nama website', NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440111', 'site_description', '"Produsen kecap dan bumbu masakan berkualitas tinggi"', 'Deskripsi website', NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440112', 'contact_email', '"info@udsehati.com"', 'Email kontak utama', NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440113', 'whatsapp_number', '"+62-812-3456-7890"', 'Nomor WhatsApp', NOW(), NOW());

-- Insert some contact submissions for testing
INSERT INTO contact_submissions (id, name, email, phone, subject, message, is_read, created_at) VALUES
  ('550e8400-e29b-41d4-a716-446655440120', 'John Doe', 'john.doe@email.com', '+62-812-1234-5678', 'Pertanyaan Produk', 'Saya ingin mengetahui lebih lanjut tentang produk kecap KOKIDOLLAR untuk usaha warung makan saya.', false, NOW()),
  ('550e8400-e29b-41d4-a716-446655440121', 'Siti Nurhaliza', 'siti.nurhaliza@email.com', '+62-813-9876-5432', 'Kerjasama Bisnis', 'Apakah ada program kemitraan untuk distributor daerah?', true, NOW());
