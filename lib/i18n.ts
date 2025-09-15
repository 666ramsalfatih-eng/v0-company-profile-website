export const defaultLocale = "id"
export const locales = ["id", "en"] as const
export type Locale = (typeof locales)[number]

export const translations = {
  id: {
    // Navigation
    home: "Beranda",
    about: "Tentang Kami",
    catalog: "Katalog",
    gallery: "Galeri",
    blog: "Blog",
    contact: "Kontak",
    recruitment: "Karir",

    // Common
    loading: "Memuat...",
    search: "Cari...",
    filter: "Filter",
    save: "Simpan",
    cancel: "Batal",
    edit: "Edit",
    delete: "Hapus",
    add: "Tambah",
    view: "Lihat",
    back: "Kembali",
    next: "Selanjutnya",
    previous: "Sebelumnya",

    // Homepage
    heroTitle: "Bumbu Masakan Berkualitas untuk Semua",
    heroSubtitle:
      "UD. SEHATI menghadirkan produk kecap KOKIDOLLAR dan bumbu masakan siap saji yang telah dipercaya UMKM di seluruh Indonesia. Halal, higienis, dan berkualitas tinggi.",
    viewProducts: "Lihat Produk",
    aboutUs: "Tentang Kami",
    whyChooseUs: "Mengapa Memilih UD. SEHATI?",
    whyChooseUsSubtitle:
      "Komitmen kami terhadap kualitas dan kepuasan pelanggan menjadikan UD. SEHATI pilihan utama para UMKM",
    featuredProducts: "Produk Unggulan",
    featuredProductsSubtitle: "Produk-produk terbaik dari UD. SEHATI yang paling diminati",
    viewAllProducts: "Lihat Semua Produk",
    partnershipCta: "Bergabunglah dengan Ribuan Mitra UMKM Kami",
    partnershipCtaSubtitle:
      "Dapatkan produk berkualitas dengan harga terjangkau dan layanan terbaik. Hubungi kami sekarang untuk informasi kemitraan.",
    contactUs: "Hubungi Kami",
    viewCatalog: "Lihat Katalog",

    // Features
    halalCertified: "Sertifikat Halal & BPOM",
    halalCertifiedDesc: "Produk terjamin halal dan telah mendapat izin resmi dari BPOM dan MUI",
    trustedPartner: "Mitra UMKM Terpercaya",
    trustedPartnerDesc: "Telah bermitra dengan ribuan UMKM di seluruh Indonesia",
    onTimeDelivery: "Pengiriman Tepat Waktu",
    onTimeDeliveryDesc: "Layanan prime dengan pengiriman yang selalu tepat waktu",
    qualityAssured: "Kualitas Terjamin",
    qualityAssuredDesc: "Pengalaman 18+ tahun menghasilkan produk berkualitas tinggi",

    // Footer
    quickLinks: "Tautan Cepat",
    operatingHours: "Jam Operasional",
    mondayFriday: "Senin - Jumat: 08:00 - 17:00",
    saturday: "Sabtu: 08:00 - 12:00",
    sunday: "Minggu: Tutup",
    footerCopyright: "© 2024 UD. SEHATI. Semua hak dilindungi. | Halal & Higienis - BPOM & MUI",

    // About Page
    companyProfile: "Profil Perusahaan",
    visionMission: "Visi & Misi",
    vision: "Visi",
    mission: "Misi",
    companyValues: "Nilai-Nilai Perusahaan",
    dedicatedTeam: "Tim yang Berdedikasi",
    collaborativePartner: "Mitra Usaha dan Kolaboratif",
    contactInfo: "Informasi Kontak",
    address: "Alamat",
    certification: "Sertifikasi",

    // Contact Page
    phone: "Telepon",
    email: "Email",
    whatsapp: "WhatsApp",

    // Theme
    lightMode: "Mode Terang",
    darkMode: "Mode Gelap",

    // Language
    language: "Bahasa",
    indonesian: "Indonesia",
    english: "English",

    // Catalog Page
    productCatalog: "Katalog Produk",
    catalogSubtitle: "Temukan berbagai produk bumbu masakan berkualitas dari UD. SEHATI",
    searchProducts: "Cari produk...",
    allCategories: "Semua Kategori",
    noProductsFound: "Tidak ada produk ditemukan",
    tryDifferentSearch: "Coba kata kunci pencarian yang berbeda",
    since2006: "Sejak 2006",

    // Gallery Page
    photoGallery: "Galeri Foto",
    gallerySubtitle: "Lihat koleksi foto fasilitas, produk, dan aktivitas UD. SEHATI",
    noImagesFound: "Tidak ada gambar ditemukan",
    tryDifferentCategory: "Coba kategori yang berbeda",

    // Blog Page
    latestArticles: "Artikel Terbaru",
    blogSubtitle: "Baca artikel terbaru seputar tips memasak, resep, dan informasi produk",
    readMore: "Baca Selengkapnya",
    noArticlesFound: "Tidak ada artikel ditemukan",
    tryDifferentKeyword: "Coba kata kunci yang berbeda",

    // Recruitment Page
    joinOurTeam: "Bergabung dengan Tim Kami",
    recruitmentSubtitle: "Temukan peluang karir menarik di UD. SEHATI dan kembangkan potensi Anda bersama kami",
    availablePositions: "Posisi yang Tersedia",
    jobRequirements: "Persyaratan",
    jobDescription: "Deskripsi Pekerjaan",
    applyNow: "Lamar Sekarang",
    noJobsAvailable: "Saat ini tidak ada lowongan tersedia",
    checkBackLater: "Silakan cek kembali nanti untuk lowongan terbaru",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    catalog: "Catalog",
    gallery: "Gallery",
    blog: "Blog",
    contact: "Contact",
    recruitment: "Career",

    // Common
    loading: "Loading...",
    search: "Search...",
    filter: "Filter",
    save: "Save",
    cancel: "Cancel",
    edit: "Edit",
    delete: "Delete",
    add: "Add",
    view: "View",
    back: "Back",
    next: "Next",
    previous: "Previous",

    // Homepage
    heroTitle: "Quality Cooking Spices for Everyone",
    heroSubtitle:
      "UD. SEHATI presents KOKIDOLLAR soy sauce products and ready-to-use cooking spices that have been trusted by SMEs throughout Indonesia. Halal, hygienic, and high quality.",
    viewProducts: "View Products",
    aboutUs: "About Us",
    whyChooseUs: "Why Choose UD. SEHATI?",
    whyChooseUsSubtitle: "Our commitment to quality and customer satisfaction makes UD. SEHATI the top choice for SMEs",
    featuredProducts: "Featured Products",
    featuredProductsSubtitle: "The best products from UD. SEHATI that are most in demand",
    viewAllProducts: "View All Products",
    partnershipCta: "Join Thousands of Our SME Partners",
    partnershipCtaSubtitle:
      "Get quality products at affordable prices and the best service. Contact us now for partnership information.",
    contactUs: "Contact Us",
    viewCatalog: "View Catalog",

    // Features
    halalCertified: "Halal & BPOM Certified",
    halalCertifiedDesc: "Products are guaranteed halal and have received official permits from BPOM and MUI",
    trustedPartner: "Trusted SME Partner",
    trustedPartnerDesc: "Has partnered with thousands of SMEs throughout Indonesia",
    onTimeDelivery: "On-Time Delivery",
    onTimeDeliveryDesc: "Prime service with always on-time delivery",
    qualityAssured: "Quality Assured",
    qualityAssuredDesc: "18+ years of experience producing high-quality products",

    // Footer
    quickLinks: "Quick Links",
    operatingHours: "Operating Hours",
    mondayFriday: "Monday - Friday: 08:00 - 17:00",
    saturday: "Saturday: 08:00 - 12:00",
    sunday: "Sunday: Closed",
    footerCopyright: "© 2024 UD. SEHATI. All rights reserved. | Halal & Hygienic - BPOM & MUI",

    // About Page
    companyProfile: "Company Profile",
    visionMission: "Vision & Mission",
    vision: "Vision",
    mission: "Mission",
    companyValues: "Company Values",
    dedicatedTeam: "Dedicated Team",
    collaborativePartner: "Business Partner and Collaborative",
    contactInfo: "Contact Information",
    address: "Address",
    certification: "Certification",

    // Contact Page
    phone: "Phone",
    email: "Email",
    whatsapp: "WhatsApp",

    // Theme
    lightMode: "Light Mode",
    darkMode: "Dark Mode",

    // Language
    language: "Language",
    indonesian: "Indonesia",
    english: "English",

    // Catalog Page
    productCatalog: "Product Catalog",
    catalogSubtitle: "Discover various quality cooking spice products from UD. SEHATI",
    searchProducts: "Search products...",
    allCategories: "All Categories",
    noProductsFound: "No products found",
    tryDifferentSearch: "Try different search keywords",
    since2006: "Since 2006",

    // Gallery Page
    photoGallery: "Photo Gallery",
    gallerySubtitle: "View our collection of photos of facilities, products, and activities at UD. SEHATI",
    noImagesFound: "No images found",
    tryDifferentCategory: "Try a different category",

    // Blog Page
    latestArticles: "Latest Articles",
    blogSubtitle: "Read the latest articles about cooking tips, recipes, and product information",
    readMore: "Read More",
    noArticlesFound: "No articles found",
    tryDifferentKeyword: "Try different keywords",

    // Recruitment Page
    joinOurTeam: "Join Our Team",
    recruitmentSubtitle: "Find exciting career opportunities at UD. SEHATI and develop your potential with us",
    availablePositions: "Available Positions",
    jobRequirements: "Requirements",
    jobDescription: "Job Description",
    applyNow: "Apply Now",
    noJobsAvailable: "Currently no positions available",
    checkBackLater: "Please check back later for new openings",
  },
} as const

export function getTranslation(locale: Locale, key: keyof typeof translations.id): string {
  return translations[locale][key] || translations[defaultLocale][key]
}
