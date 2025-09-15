"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createClient } from "@/lib/supabase/client"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Save, Upload } from "lucide-react"

interface CompanyInfo {
  id?: string
  name: string
  logo_url: string
  profile_text: string
  vision: string
  mission: string
  address: string
  phone: string
  email: string
  whatsapp: string
  operating_hours: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
  social_media: {
    facebook: string
    instagram: string
    twitter: string
    youtube: string
  }
}

export default function CompanyPage() {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    name: "",
    logo_url: "",
    profile_text: "",
    vision: "",
    mission: "",
    address: "",
    phone: "",
    email: "",
    whatsapp: "",
    operating_hours: {
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    },
    social_media: {
      facebook: "",
      instagram: "",
      twitter: "",
      youtube: "",
    },
  })
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    fetchCompanyInfo()
  }, [])

  const fetchCompanyInfo = async () => {
    try {
      const supabase = createClient()
      const { data, error } = await supabase.from("company_info").select("*").single()

      if (error && error.code !== "PGRST116") {
        throw error
      }

      if (data) {
        setCompanyInfo(data)
      }
    } catch (error) {
      console.error("Error fetching company info:", error)
      toast({
        title: "Error",
        description: "Gagal memuat informasi perusahaan",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const supabase = createClient()

      const { error } = await supabase.from("company_info").upsert([companyInfo])

      if (error) throw error

      toast({
        title: "Berhasil",
        description: "Informasi perusahaan berhasil disimpan",
      })
    } catch (error) {
      console.error("Error saving company info:", error)
      toast({
        title: "Error",
        description: "Gagal menyimpan informasi perusahaan",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Informasi Perusahaan</h1>
          <p className="text-muted-foreground">Kelola informasi dasar perusahaan</p>
        </div>
        <Button onClick={handleSave} disabled={isSaving}>
          {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
          Simpan
        </Button>
      </div>

      <div className="grid gap-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Informasi Dasar</CardTitle>
            <CardDescription>Informasi dasar tentang perusahaan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Perusahaan</Label>
                <Input
                  id="name"
                  value={companyInfo.name}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="logo_url">URL Logo</Label>
                <div className="flex gap-2">
                  <Input
                    id="logo_url"
                    value={companyInfo.logo_url}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, logo_url: e.target.value })}
                    placeholder="https://example.com/logo.png"
                  />
                  <Button variant="outline" size="icon">
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="profile_text">Profil Perusahaan</Label>
              <Textarea
                id="profile_text"
                rows={4}
                value={companyInfo.profile_text}
                onChange={(e) => setCompanyInfo({ ...companyInfo, profile_text: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Vision & Mission */}
        <Card>
          <CardHeader>
            <CardTitle>Visi & Misi</CardTitle>
            <CardDescription>Visi dan misi perusahaan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="vision">Visi</Label>
              <Textarea
                id="vision"
                rows={3}
                value={companyInfo.vision}
                onChange={(e) => setCompanyInfo({ ...companyInfo, vision: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mission">Misi</Label>
              <Textarea
                id="mission"
                rows={3}
                value={companyInfo.mission}
                onChange={(e) => setCompanyInfo({ ...companyInfo, mission: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Informasi Kontak</CardTitle>
            <CardDescription>Informasi kontak perusahaan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="address">Alamat</Label>
              <Textarea
                id="address"
                rows={2}
                value={companyInfo.address}
                onChange={(e) => setCompanyInfo({ ...companyInfo, address: e.target.value })}
              />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="phone">Telepon</Label>
                <Input
                  id="phone"
                  value={companyInfo.phone}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={companyInfo.email}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  value={companyInfo.whatsapp}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, whatsapp: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Operating Hours */}
        <Card>
          <CardHeader>
            <CardTitle>Jam Operasional</CardTitle>
            <CardDescription>Jam operasional perusahaan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(companyInfo.operating_hours).map(([day, hours]) => (
                <div key={day} className="space-y-2">
                  <Label htmlFor={day} className="capitalize">
                    {day === "monday"
                      ? "Senin"
                      : day === "tuesday"
                        ? "Selasa"
                        : day === "wednesday"
                          ? "Rabu"
                          : day === "thursday"
                            ? "Kamis"
                            : day === "friday"
                              ? "Jumat"
                              : day === "saturday"
                                ? "Sabtu"
                                : "Minggu"}
                  </Label>
                  <Input
                    id={day}
                    value={hours}
                    onChange={(e) =>
                      setCompanyInfo({
                        ...companyInfo,
                        operating_hours: { ...companyInfo.operating_hours, [day]: e.target.value },
                      })
                    }
                    placeholder="08:00-17:00 atau 'Tutup'"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Social Media */}
        <Card>
          <CardHeader>
            <CardTitle>Media Sosial</CardTitle>
            <CardDescription>Link media sosial perusahaan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(companyInfo.social_media).map(([platform, url]) => (
                <div key={platform} className="space-y-2">
                  <Label htmlFor={platform} className="capitalize">
                    {platform}
                  </Label>
                  <Input
                    id={platform}
                    value={url}
                    onChange={(e) =>
                      setCompanyInfo({
                        ...companyInfo,
                        social_media: { ...companyInfo.social_media, [platform]: e.target.value },
                      })
                    }
                    placeholder={`https://${platform}.com/udsehati`}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
