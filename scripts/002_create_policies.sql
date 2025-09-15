-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.online_shops ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_postings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "profiles_select_own" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles_update_own" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Public read access for website content
CREATE POLICY "public_read_company_info" ON public.company_info FOR SELECT USING (true);
CREATE POLICY "public_read_banners" ON public.banners FOR SELECT USING (is_active = true);
CREATE POLICY "public_read_product_categories" ON public.product_categories FOR SELECT USING (is_active = true);
CREATE POLICY "public_read_products" ON public.products FOR SELECT USING (is_active = true);
CREATE POLICY "public_read_product_ratings" ON public.product_ratings FOR SELECT USING (is_approved = true);
CREATE POLICY "public_read_gallery" ON public.gallery FOR SELECT USING (is_active = true);
CREATE POLICY "public_read_online_shops" ON public.online_shops FOR SELECT USING (is_active = true);
CREATE POLICY "public_read_blog_posts" ON public.blog_posts FOR SELECT USING (is_published = true);
CREATE POLICY "public_read_contacts" ON public.contacts FOR SELECT USING (is_active = true);
CREATE POLICY "public_read_job_postings" ON public.job_postings FOR SELECT USING (is_active = true);

-- Admin full access policies (authenticated users)
CREATE POLICY "admin_full_access_company_info" ON public.company_info FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_full_access_banners" ON public.banners FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_full_access_product_categories" ON public.product_categories FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_full_access_products" ON public.products FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_full_access_product_ratings" ON public.product_ratings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_full_access_gallery" ON public.gallery FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_full_access_online_shops" ON public.online_shops FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_full_access_blog_posts" ON public.blog_posts FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_full_access_contacts" ON public.contacts FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_full_access_contact_submissions" ON public.contact_submissions FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_full_access_job_postings" ON public.job_postings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_full_access_job_applications" ON public.job_applications FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_full_access_site_settings" ON public.site_settings FOR ALL USING (auth.role() = 'authenticated');

-- Allow public to insert contact submissions and product ratings
CREATE POLICY "public_insert_contact_submissions" ON public.contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "public_insert_product_ratings" ON public.product_ratings FOR INSERT WITH CHECK (true);
CREATE POLICY "public_insert_job_applications" ON public.job_applications FOR INSERT WITH CHECK (true);
