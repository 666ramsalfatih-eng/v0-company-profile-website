-- Insert default admin user profile (will be created after first admin signup)
-- This is handled by trigger, but we can set default company info

-- Insert default company information
INSERT INTO public.company_info (
  name, 
  profile_text, 
  vision, 
  mission, 
  address, 
  phone, 
  email,
  operating_hours,
  social_media
) VALUES (
  'UD. SEHATI',
  'Berdiri pada tahun 2006, UD Sehati adalah perusahaan yang bergerak dibidang bumbu masakan siap saji (seasoning) dengan produk kecap yang memiliki merk dagang "KOKIDOLLAR" dan telah memiliki kualitas yang terjamin serta izin halal dari BPOM dan MUI. UD Sehati telah berkembang menjadi unit usaha dagang yang memiliki tenaga ahli berpengalaman dan berkompeten di bidangnya.',
  'Menjadikan semua orang bisa seperti layaknya koki handal. Mempertahankan ke HALAL-an dan ke HIGIENIS-an produk.',
  'Menyajikan produk dengan kualitas terbaik. Mengutamakan kepuasan konsumen dengan menyajikan produk kualitas tinggi. Menjalin kemitraan dengan UMK/ UMKM dan membentuk jaringan pasar yang lebih luas.',
  'Jl. MT. Haryono Gg. Kembang No. 66, Desa Kedungwaru, Kec. Kedungwaru, Kab. Tulungagung.',
  '(0355) 5237256',
  'kokidollarsehati@yahoo.co.id',
  '{"monday": "08:00-17:00", "tuesday": "08:00-17:00", "wednesday": "08:00-17:00", "thursday": "08:00-17:00", "friday": "08:00-17:00", "saturday": "08:00-12:00", "sunday": "closed"}',
  '{"facebook": "", "instagram": "", "twitter": "", "youtube": ""}'
) ON CONFLICT DO NOTHING;

-- Insert default product category
INSERT INTO public.product_categories (name, description) VALUES 
('Kecap', 'Produk kecap dengan berbagai varian rasa'),
('Bumbu Masakan', 'Bumbu masakan siap saji untuk berbagai hidangan'),
('Seasoning', 'Penyedap rasa untuk masakan')
ON CONFLICT DO NOTHING;

-- Insert sample products
INSERT INTO public.products (name, description, category_id, price, is_featured) VALUES 
('KOKIDOLLAR Kecap Manis', 'Kecap manis premium dengan rasa yang khas dan berkualitas tinggi', 
 (SELECT id FROM public.product_categories WHERE name = 'Kecap' LIMIT 1), 15000, true),
('KOKIDOLLAR Kecap Asin', 'Kecap asin berkualitas untuk berbagai masakan', 
 (SELECT id FROM public.product_categories WHERE name = 'Kecap' LIMIT 1), 12000, true),
('Bumbu Rendang Instant', 'Bumbu rendang siap pakai dengan cita rasa autentik', 
 (SELECT id FROM public.product_categories WHERE name = 'Bumbu Masakan' LIMIT 1), 8000, false)
ON CONFLICT DO NOTHING;

-- Insert default contacts
INSERT INTO public.contacts (type, label, value, icon, sort_order) VALUES 
('phone', 'Telepon', '(0355) 5237256', 'phone', 1),
('email', 'Email', 'kokidollarsehati@yahoo.co.id', 'mail', 2),
('address', 'Alamat', 'Jl. MT. Haryono Gg. Kembang No. 66, Desa Kedungwaru, Kec. Kedungwaru, Kab. Tulungagung.', 'map-pin', 3)
ON CONFLICT DO NOTHING;

-- Insert default site settings
INSERT INTO public.site_settings (key, value, description) VALUES 
('site_title', '"UD. SEHATI - Bumbu Masakan Berkualitas"', 'Judul website'),
('site_description', '"Produsen bumbu masakan dan kecap KOKIDOLLAR berkualitas tinggi sejak 2006"', 'Deskripsi website'),
('default_language', '"id"', 'Bahasa default website'),
('theme_mode', '"light"', 'Mode tema default')
ON CONFLICT DO NOTHING;
