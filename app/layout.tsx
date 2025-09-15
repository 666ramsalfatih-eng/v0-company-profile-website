import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "UD. SEHATI - Bumbu Masakan Berkualitas",
  description:
    "Produsen bumbu masakan dan kecap KOKIDOLLAR berkualitas tinggi sejak 2006. Mitra terpercaya UMKM di Tulungagung.",
  generator: "v0.app",
  keywords: ["bumbu masakan", "kecap", "KOKIDOLLAR", "UD SEHATI", "seasoning", "UMKM", "Tulungagung"],
  authors: [{ name: "UD. SEHATI" }],
  openGraph: {
    title: "UD. SEHATI - Bumbu Masakan Berkualitas",
    description: "Produsen bumbu masakan dan kecap KOKIDOLLAR berkualitas tinggi sejak 2006",
    type: "website",
    locale: "id_ID",
  },
}

import ClientLayout from "./ClientLayout"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
