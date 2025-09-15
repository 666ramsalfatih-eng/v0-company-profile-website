"use client"

import { Header } from "@/components/public/header"
import { Footer } from "@/components/public/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Award, Users, Truck, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import FeaturedProducts from "@/components/FeaturedProducts"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge variant="secondary" className="w-fit">
                  {t("since2006")}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">{t("heroTitle")}</h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-pretty max-w-2xl">{t("heroSubtitle")}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/catalog">{t("viewProducts")}</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/about">{t("aboutUs")}</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/indonesian-soy-sauce-bottles-and-spices-display.jpg"
                  alt="Produk KOKIDOLLAR"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">{t("whyChooseUs")}</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 text-pretty max-w-3xl mx-auto">
                {t("whyChooseUsSubtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t("halalCertified")}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{t("halalCertifiedDesc")}</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t("trustedPartner")}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{t("trustedPartnerDesc")}</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t("onTimeDelivery")}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{t("onTimeDeliveryDesc")}</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t("qualityAssured")}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{t("qualityAssuredDesc")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <FeaturedProducts />

        {/* Partnership CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">{t("partnershipCta")}</h2>
            <p className="text-lg mb-8 text-pretty max-w-3xl mx-auto">{t("partnershipCtaSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">{t("contactUs")}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/catalog">{t("viewCatalog")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
