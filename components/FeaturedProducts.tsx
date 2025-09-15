"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Star, ShoppingCart, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import Link from "next/link"

interface Product {
  id: string
  name: string
  description: string
  image_url: string
  category_id: string
  price: number
  specifications: any
  is_featured: boolean
}

export default function FeaturedProducts() {
  const { t } = useLanguage()
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchFeaturedProducts()
  }, [])

  const fetchFeaturedProducts = async () => {
    try {
      const supabase = createClient()
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          product_categories(name)
        `)
        .eq("is_active", true)
        .eq("is_featured", true)
        .order("created_at", { ascending: false })
        .limit(4)

      if (error) throw error
      setProducts(data || [])
    } catch (error) {
      console.error("Error fetching featured products:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const getProductRating = (product: Product) => {
    if (product.specifications?.rating) {
      return product.specifications.rating
    }
    return 4.5 // Default rating
  }

  const getWhatsAppLink = (product: Product) => {
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan produk ${product.name}. Bisa minta informasi lebih lanjut?`,
    )
    return `https://wa.me/6281234567890?text=${message}`
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">{t("featuredProducts")}</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">{t("featuredProductsSubtitle")}</p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-square bg-muted animate-pulse" />
                <CardContent className="p-4 space-y-2">
                  <div className="h-4 bg-muted animate-pulse rounded" />
                  <div className="h-3 bg-muted animate-pulse rounded w-3/4" />
                  <div className="h-6 bg-muted animate-pulse rounded w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => {
              const rating = getProductRating(product)
              const whatsappLink = getWhatsAppLink(product)

              return (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative">
                    <img
                      src={product.image_url || "/placeholder.svg?height=300&width=300&query=kokidollar product"}
                      alt={product.name}
                      className="object-cover w-full h-full"
                    />
                    <Badge className="absolute top-2 left-2" variant="secondary">
                      {(product as any).product_categories?.name || "Produk"}
                    </Badge>
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>

                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">({rating})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        {product.price ? `Rp ${Number(product.price).toLocaleString("id-ID")}` : "Hubungi kami"}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1" asChild>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          WhatsApp
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/catalog">
                          <ShoppingCart className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/catalog">{t("viewAllProducts")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
