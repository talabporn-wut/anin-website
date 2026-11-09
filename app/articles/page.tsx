import { getPublishedArticles } from "@/lib/articles"
import ArticleCard from "@/components/articles/ArticleCard"
import ArticlesClient from "./ArticlesClient"

export default async function ArticlesPage() {
  const latest = (await getPublishedArticles()).slice(0, 6)

  return <ArticlesClient latestArticles={<LatestArticlesSection articles={latest} />} />
}

/* ── Section 5: Latest articles (Keystatic) ── */
function LatestArticlesSection({
  articles,
}: {
  articles: Awaited<ReturnType<typeof getPublishedArticles>>
}) {
  if (articles.length === 0) return null

  return (
    <section className="bg-white pb-16 lg:pb-20">
      <div className="container-anin">
        <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6">บทความล่าสุด</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {articles.map(({ slug, entry }) => (
            <ArticleCard
              key={slug}
              article={{
                slug,
                title: entry.title,
                excerpt: entry.excerpt,
                coverImage: entry.coverImage,
                category: entry.category,
                updatedAt: entry.updatedAt,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
