import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ChevronRight, ShieldCheck, Info } from "lucide-react"
import { getPublishedArticle, getPublishedArticles } from "@/lib/articles"
import { formatThaiDate } from "@/lib/format-date"
import ArticleBody from "@/components/articles/ArticleBody"
import GlobalCTA from "@/components/shared/GlobalCTA"

type Props = { params: Promise<{ slug: string }> }

// Only published articles are pre-rendered. Any other slug, including
// drafts, returns 404 instead of rendering on demand.
export const dynamicParams = false

export async function generateStaticParams() {
  const articles = await getPublishedArticles()
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getPublishedArticle(slug)
  if (!article) return {}

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/articles/${slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/articles/${slug}`,
      publishedTime: article.publishedAt ?? undefined,
      modifiedTime: article.updatedAt ?? undefined,
      images: article.coverImage ? [{ url: article.coverImage }] : undefined,
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getPublishedArticle(slug)
  if (!article) notFound()

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="container-anin py-3">
          <nav className="flex items-center gap-1.5 text-xs text-neutral-400">
            <Link href="/" className="hover:text-blue-700 transition-colors">
              หน้าหลัก
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/articles" className="hover:text-blue-700 transition-colors">
              คลังสุขภาพ
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-blue-700 font-medium line-clamp-1">{article.title}</span>
          </nav>
        </div>
      </div>

      <article className="py-10 lg:py-14">
        <div className="container-anin max-w-3xl">
          <span className="inline-block text-xs font-medium text-blue-700 bg-blue-50 rounded-full px-3 py-1 mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 leading-tight mb-3">
            {article.title}
          </h1>
          <p className="flex items-center gap-1.5 text-sm text-neutral-500 mb-8">
            <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
            ตรวจสอบโดย {article.reviewedBy} · อัปเดต {formatThaiDate(article.updatedAt)}
          </p>

          {article.coverImage && (
            <div className="relative aspect-[1200/630] rounded-2xl overflow-hidden bg-surface-alt mb-8">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          <ArticleBody source={article.content} />

          {article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1.5 rounded-full border border-border bg-white text-neutral-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Not-a-diagnosis notice */}
          <div className="flex gap-3 mt-10 rounded-xl border border-gold-300 bg-gold-100 p-4 lg:p-5">
            <Info className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
            <p className="text-sm text-neutral-600 leading-relaxed">
              ข้อมูลในบทความนี้มีวัตถุประสงค์เพื่อให้ความรู้ทั่วไปเท่านั้น
              ไม่ใช่การวินิจฉัยหรือการรักษาโรค และไม่สามารถใช้แทนคำแนะนำจากแพทย์หรือเภสัชกรได้
              หากมีอาการผิดปกติหรืออาการไม่ดีขึ้น ควรปรึกษาผู้เชี่ยวชาญ{" "}
              <Link href="/medical-disclaimer" className="text-blue-700 underline hover:text-blue-800">
                อ่านข้อจำกัดความรับผิดด้านสุขภาพ
              </Link>
            </p>
          </div>
        </div>
      </article>

      <GlobalCTA />
    </>
  )
}
