import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/server"
import { Package, Images, FileText, TrendingUp, Eye, MessageSquare, Briefcase } from "lucide-react"

export default async function AdminDashboardPage() {
  const supabase = await createClient()

  // Get statistics from database
  const [
    { count: productsCount },
    { count: galleryCount },
    { count: blogCount },
    { count: contactSubmissionsCount },
    { count: jobApplicationsCount },
  ] = await Promise.all([
    supabase.from("products").select("*", { count: "exact", head: true }),
    supabase.from("gallery").select("*", { count: "exact", head: true }),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }),
    supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
    supabase.from("job_applications").select("*", { count: "exact", head: true }),
  ])

  const stats = [
    {
      title: "Total Produk",
      value: productsCount || 0,
      description: "Produk aktif di katalog",
      icon: Package,
      trend: "+2 bulan ini",
    },
    {
      title: "Foto Galeri",
      value: galleryCount || 0,
      description: "Foto di galeri",
      icon: Images,
      trend: "+5 bulan ini",
    },
    {
      title: "Artikel Blog",
      value: blogCount || 0,
      description: "Artikel yang dipublikasi",
      icon: FileText,
      trend: "+1 bulan ini",
    },
    {
      title: "Pesan Kontak",
      value: contactSubmissionsCount || 0,
      description: "Pesan dari pengunjung",
      icon: MessageSquare,
      trend: "+12 minggu ini",
    },
    {
      title: "Total Job Applications",
      value: jobApplicationsCount || 0,
      description: "Lamaran kerja yang menunggu review",
      icon: Briefcase,
      trend: "+3 bulan ini",
    },
  ]

  const recentActivities = [
    {
      action: "Produk baru ditambahkan",
      item: "KOKIDOLLAR Kecap Manis 500ml",
      time: "2 jam yang lalu",
      type: "product",
    },
    {
      action: "Pesan kontak baru",
      item: "Dari: customer@email.com",
      time: "4 jam yang lalu",
      type: "contact",
    },
    {
      action: "Artikel blog dipublikasi",
      item: "Tips Memasak dengan Kecap KOKIDOLLAR",
      time: "1 hari yang lalu",
      type: "blog",
    },
    {
      action: "Foto galeri ditambahkan",
      item: "Proses produksi kecap",
      time: "2 hari yang lalu",
      type: "gallery",
    },
    {
      action: "Lamaran kerja baru",
      item: "Dari: applicant@email.com",
      time: "3 hari yang lalu",
      type: "job",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Selamat datang di panel admin UD. SEHATI</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              <div className="flex items-center pt-1">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-xs text-green-500">{stat.trend}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Activity */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
            <CardDescription>Aktivitas terbaru di website dan dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.item}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">{activity.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Aksi Cepat</CardTitle>
            <CardDescription>Akses cepat ke fitur yang sering digunakan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <a
                href="/admin/products"
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Package className="h-4 w-4" />
                  <span className="text-sm font-medium">Tambah Produk</span>
                </div>
                <Badge variant="secondary">Baru</Badge>
              </a>
              <a
                href="/admin/blog"
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <FileText className="h-4 w-4" />
                  <span className="text-sm font-medium">Tulis Artikel</span>
                </div>
              </a>
              <a
                href="/admin/gallery"
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Images className="h-4 w-4" />
                  <span className="text-sm font-medium">Upload Foto</span>
                </div>
              </a>
              <a
                href="/admin/contacts"
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-sm font-medium">Lihat Pesan</span>
                </div>
                {contactSubmissionsCount && contactSubmissionsCount > 0 && (
                  <Badge variant="destructive">{contactSubmissionsCount}</Badge>
                )}
              </a>
              <a
                href="/admin/jobs"
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Briefcase className="h-4 w-4" />
                  <span className="text-sm font-medium">Review Lamaran Kerja</span>
                </div>
                {jobApplicationsCount && jobApplicationsCount > 0 && (
                  <Badge variant="destructive">{jobApplicationsCount}</Badge>
                )}
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Website Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Ringkasan Website</CardTitle>
          <CardDescription>Status dan informasi website UD. SEHATI</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-medium">Website Status</span>
              </div>
              <p className="text-sm text-muted-foreground">Online dan berjalan normal</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Pengunjung Hari Ini</span>
              </div>
              <p className="text-sm text-muted-foreground">Data akan tersedia setelah integrasi analytics</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Lamaran Kerja</span>
              </div>
              <p className="text-sm text-muted-foreground">{jobApplicationsCount || 0} lamaran menunggu review</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
