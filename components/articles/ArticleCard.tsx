import Link from "next/link"
import Image from "next/image"
import { FileText } from "lucide-react"
import { formatThaiDate } from "@/lib/format-date"

export type ArticleCardData = {
  slug: string
  title: string
  excerpt: string
  coverImage: string | null
  category: string
  updatedAt: string | null
}

export default function ArticleCard({ article }: { article: ArticleCardData }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-white overflow-hidden hover:shadow-md hover:border-blue-100 transition-all"
    >
      <div className="relative aspect-[1200/630] bg-surface-alt">
        {article.coverImage ? (
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-blue-200">
            <FileText className="w-10 h-10" strokeWidth={1.5} />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 p-5 flex-1">
        <span className="text-xs font-medium text-blue-700">{article.category}</span>
        <h3 className="font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">{article.excerpt}</p>
        {article.updatedAt && (
          <p className="text-xs text-neutral-400 mt-auto pt-2">
            อัปเดต {formatThaiDate(article.updatedAt)}
          </p>
        )}
      </div>
    </Link>
  )
}
