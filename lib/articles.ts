import { createReader } from "@keystatic/core/reader"
import keystaticConfig from "@/keystatic.config"

// Server-only: the Keystatic reader reads MDX files from the local repo.
const reader = createReader(process.cwd(), keystaticConfig)

/** All published articles, newest first. Drafts are never returned. */
export async function getPublishedArticles() {
  const all = await reader.collections.articles.all()
  return all
    .filter((a) => a.entry.status === "published")
    .sort((a, b) => (b.entry.publishedAt ?? "").localeCompare(a.entry.publishedAt ?? ""))
}

/** A single published article with its MDX body, or null if missing or still a draft. */
export async function getPublishedArticle(slug: string) {
  const article = await reader.collections.articles.read(slug, { resolveLinkedFiles: true })
  if (!article || article.status !== "published") return null
  return article
}
