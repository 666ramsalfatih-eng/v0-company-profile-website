"use client"

import { Header } from "@/components/public/header"
import { Footer } from "@/components/public/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Clock, Users, Briefcase, Mail } from "lucide-react"
import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"

interface JobOpening {
  id: string
  title: string
  department: string
  location: string
  employment_type: string
  description: string
  requirements: string[]
  salary_range: string
  posted_at: string
  application_deadline: string
}

export default function RecruitmentPage() {
  const { t } = useLanguage()
  const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchJobOpenings()
  }, [])

  const fetchJobOpenings = async () => {
    try {
      const supabase = createClient()
      const { data, error } = await supabase
        .from("job_postings")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false })

      if (error) throw error

      const transformedData =
        data?.map((job) => ({
          ...job,
          posted_at: job.created_at,
          application_deadline: job.deadline || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // Default 30 days from now
          requirements: job.requirements
            ? Array.isArray(job.requirements)
              ? job.requirements
              : [job.requirements]
            : [],
        })) || []

      setJobOpenings(transformedData)
    } catch (error) {
      console.error("Error fetching job openings:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              {t("recruitment")}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">{t("joinOurTeam")}</h1>
            <p className="text-xl text-muted-foreground text-pretty">{t("recruitmentSubtitle")}</p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mengapa Bekerja di UD. SEHATI?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bergabunglah dengan tim yang berdedikasi dalam menghadirkan produk berkualitas untuk masyarakat Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tim yang Solid</h3>
                <p className="text-muted-foreground">
                  Bekerja dengan tim yang saling mendukung dan berkomitmen pada keunggulan
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pengembangan Karir</h3>
                <p className="text-muted-foreground">
                  Kesempatan untuk berkembang dan meningkatkan keahlian dalam industri makanan
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-muted-foreground">
                  Lingkungan kerja yang mendukung keseimbangan antara pekerjaan dan kehidupan pribadi
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("availablePositions")}</h2>
            <p className="text-muted-foreground">Temukan posisi yang sesuai dengan keahlian dan minat Anda</p>
          </div>

          {isLoading ? (
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-6 bg-muted animate-pulse rounded" />
                    <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
                    <div className="h-4 bg-muted animate-pulse rounded w-1/2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : jobOpenings.length > 0 ? (
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">{job.department}</Badge>
                          <Badge variant="outline">{job.employment_type}</Badge>
                        </div>
                      </div>
                      <Button>
                        <Mail className="mr-2 h-4 w-4" />
                        {t("applyNow")}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>Deadline: {formatDate(job.application_deadline)}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">{t("jobDescription")}</h4>
                      <p className="text-muted-foreground">{job.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">{t("jobRequirements")}</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    {job.salary_range && (
                      <div>
                        <h4 className="font-semibold mb-2">Gaji</h4>
                        <p className="text-muted-foreground">{job.salary_range}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t("noJobsAvailable")}</h3>
                <p className="text-muted-foreground mb-4">{t("checkBackLater")}</p>
                <Button variant="outline" asChild>
                  <a href="mailto:hr@udsehati.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Kirim CV Anda
                  </a>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
