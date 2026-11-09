import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function LegalLayout({
  title,
  updatedAt,
  children,
}: {
  title: string
  updatedAt: string
  children: React.ReactNode
}) {
  return (
    <>
      <div className="bg-white border-b border-border">
        <div className="container-anin py-3">
          <nav className="flex items-center gap-1.5 text-xs text-neutral-400">
            <Link href="/" className="hover:text-blue-700 transition-colors">
              หน้าหลัก
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-blue-700 font-medium">{title}</span>
          </nav>
        </div>
      </div>

      <section className="py-10 lg:py-14">
        <div className="container-anin max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">
            {title}
          </h1>
          <p className="text-sm text-neutral-400 mb-8">อัปเดตล่าสุด: {updatedAt}</p>

          <div className="legal-prose">{children}</div>
        </div>
      </section>
    </>
  )
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-8 first:mt-0">
      <h2 className="text-xl font-semibold text-blue-900 mb-3">{heading}</h2>
      <div className="flex flex-col gap-3 text-neutral-600 leading-relaxed">
        {children}
      </div>
    </section>
  )
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5 text-neutral-600 leading-relaxed">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
