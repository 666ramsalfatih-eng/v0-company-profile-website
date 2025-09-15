"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">UD. SEHATI</h3>
                <p className="text-sm opacity-90">KOKIDOLLAR</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Produsen bumbu masakan dan kecap berkualitas tinggi sejak 2006. Mitra terpercaya UMKM di seluruh
              Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t("quickLinks")}</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Tentang Kami
              </Link>
              <Link href="/catalog" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Katalog Produk
              </Link>
              <Link href="/gallery" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Galeri
              </Link>
              <Link href="/blog" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Blog
              </Link>
              <Link href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                {t("contact")}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {/* Updated contact info title to use translations */}
            <h4 className="font-semibold">{t("contactInfo")}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p className="text-sm opacity-80">
                  Jl. MT. Haryono Gg. Kembang No. 66, Desa Kedungwaru, Kec. Kedungwaru, Kab. Tulungagung
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <p className="text-sm opacity-80">(0355) 5237256</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <p className="text-sm opacity-80">kokidollarsehati@yahoo.co.id</p>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            {/* Updated operating hours title to use translations */}
            <h4 className="font-semibold">{t("operatingHours")}</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <div className="text-sm opacity-80">
                  <p>{t("mondayFriday")}</p>
                  <p>{t("saturday")}</p>
                  <p>{t("sunday")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">{t("footerCopyright")}</p>
        </div>
      </div>
    </footer>
  )
}
