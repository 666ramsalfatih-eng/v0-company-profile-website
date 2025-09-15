"use client"

import { Header } from "@/components/public/header"
import { Footer } from "@/components/public/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Award, Users, Clock, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              {t("about")}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">UD. SEHATI</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 text-pretty">
              Berdiri sejak 2006, kami adalah perusahaan yang bergerak di bidang bumbu masakan siap saji dengan komitmen
              terhadap kualitas dan kepuasan pelanggan
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/traditional-indonesian-spice-factory-with-workers.jpg"
                alt="Fasilitas produksi UD. SEHATI"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">{t("companyProfile")}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Berdiri pada tahun 2006, UD Sehati adalah perusahaan yang bergerak dibidang bumbu masakan siap saji
                (seasoning) dengan produk kecap yang memiliki merk dagang "KOKIDOLLAR" dan telah memiliki kualitas yang
                terjamin serta izin halal dari BPOM dan MUI.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                UD Sehati telah berkembang menjadi unit usaha dagang yang memiliki tenaga ahli berpengalaman dan
                berkompeten di bidangnya. Sebagai unit bisnis yang dikelola secara profesional, UD. Sehati senantiasa
                hadir dengan pelayanan prime (pengiriman tepat waktu), harga produk yang terjangkau, serta ide-ide
                pemasaran kreatif yang menjadikan kami dipercaya menjadi mitra bagi Usaha Mikro Kecil Menengah (UMKM) di
                Kota Tulungagung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("visionMission")}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Komitmen kami untuk memberikan yang terbaik bagi pelanggan dan mitra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t("vision")}</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Menjadikan semua orang bisa seperti layaknya koki handal</li>
                  <li>• Mempertahankan ke HALAL-an dan ke HIGIENIS-an produk</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t("mission")}</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Menyajikan produk dengan kualitas terbaik</li>
                  <li>• Mengutamakan kepuasan konsumen dengan menyajikan produk kualitas tinggi</li>
                  <li>• Menjalin kemitraan dengan UMK/UMKM dan membentuk jaringan pasar yang lebih luas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("companyValues")}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Nilai-nilai yang menjadi fondasi dalam setiap langkah kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">{t("dedicatedTeam")}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  UD. Sehati didorong oleh tim yang terampil dan penuh semangat yang berkomitmen untuk mendorong inovasi
                  dan mencapai keunggulan.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">{t("collaborativePartner")}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  UD. Sehati berkolaborasi/bermitra dengan Usaha Mikro Kecil Menengah (UMKM) serta mendorong kerja tim
                  dan pemecahan masalah kreatif untuk memberikan hasil produksi terbaik.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("contactInfo")}</h2>
            <p>Hubungi kami untuk informasi lebih lanjut tentang produk dan kemitraan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">{t("address")}</h3>
                <p className="text-sm">
                  Jl. MT. Haryono Gg. Kembang No. 66, Desa Kedungwaru, Kec. Kedungwaru, Kab. Tulungagung
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">{t("operatingHours")}</h3>
                <div className="text-sm space-y-1">
                  <p>{t("mondayFriday")}</p>
                  <p>{t("saturday")}</p>
                  <p>{t("sunday")}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">{t("certification")}</h3>
                <div className="text-sm space-y-1">
                  <p>BPOM RI</p>
                  <p>Halal MUI</p>
                  <p>ISO 9001:2015</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
