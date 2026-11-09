import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import type { ComponentPropsWithoutRef } from "react"

// Tailwind styles for the elements the Keystatic editor can produce
// (headings, bold, lists, links, images, blockquotes).
const components = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mt-10 mb-3" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-lg font-semibold text-blue-900 mt-8 mb-2" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-neutral-600 leading-relaxed my-4" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-neutral-800" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-6 my-4 space-y-1.5 text-neutral-600 leading-relaxed" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-6 my-4 space-y-1.5 text-neutral-600 leading-relaxed" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="border-l-4 border-blue-200 bg-blue-50 pl-4 pr-3 py-2 my-6 rounded-r-lg text-neutral-700" {...props} />
  ),
  hr: () => <hr className="my-8 border-border" />,
  a: ({ href = "", ...props }: ComponentPropsWithoutRef<"a">) =>
    href.startsWith("/") || href.startsWith("#") ? (
      <Link href={href} className="text-blue-700 underline hover:text-blue-800" {...props} />
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 underline hover:text-blue-800"
        {...props}
      />
    ),
  img: ({ alt = "", ...props }: ComponentPropsWithoutRef<"img">) => (
    // Inline article images have unknown dimensions, so a plain <img> is used.
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} loading="lazy" className="my-6 w-full h-auto rounded-xl" {...props} />
  ),
}

export default function ArticleBody({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />
}
