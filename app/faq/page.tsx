"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Store, ChevronRight } from "lucide-react"
import { faqCategories, faqItems, FAQCategory } from "@/content/faq"
import { LINE_URL } from "@/lib/navigation"

export default function FAQPage() {
  return (
    <>
      <Breadcrumb />
      <HeroSection />
      <FAQListSection />
      <FAQClosingCTA />
    </>
  )
}

function LineIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.08 2 11.1c0 3.05 1.6 5.76 4.1 7.5-.18.63-.65 2.28-.74 2.63-.12.43.16.43.34.31.14-.09 1.82-1.23 2.56-1.73.54.08 1.12.12 1.74.12 5.52 0 10-4.08 10-9.1S17.52 2 12 2z" />
    </svg>
  )
}

/* ── Breadcrumb ── */
function Breadcrumb() {
  return (
    <div className="bg-white border-b border-border">
      <div className="container-anin py-3">
        <nav className="flex items-center gap-1.5 text-xs text-neutral-400">
          <Link href="/" className="hover:text-blue-700 transition-colors">
            หน้าหลัก
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-700 font-medium">คำถามที่พบบ่อย</span>
        </nav>
      </div>
    </div>
  )
}

/* ── Hero ── */
function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #EEF4FF 0%, #F5F9FF 60%, #ffffff 100%)" }}
    >
      <div className="container-anin">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[380px] items-center gap-8 py-12 lg:py-0">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              คำถามที่พบบ่อย <span className="text-blue-600">(FAQ)</span>
            </h1>
            <p className="text-neutral-500 text-base leading-relaxed max-w-md">
              รวมคำถามที่พบบ่อยเกี่ยวกับยา ผลิตภัณฑ์สุขภาพ
              และการใช้บริการของ ANIN
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-2 group"
            >
              <span className="shrink-0 w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center shadow-xs">
                <LineIcon className="text-[#06C755]" />
              </span>
              <span className="text-base leading-snug">
                <span className="block text-neutral-600">หากไม่พบคำตอบที่ต้องการ</span>
                <span className="block text-blue-700 font-medium group-hover:underline">
                  เภสัชกร ANIN พร้อมให้คำแนะนำผ่าน LINE
                </span>
              </span>
            </a>
          </div>

          {/* Right: Pharmacist photo + decorative question bubbles */}
          <div className="relative hidden lg:flex items-center justify-center h-full min-h-[380px]">
            <div className="absolute top-4 left-6 w-14 h-14 rounded-2xl rounded-bl-sm bg-blue-500 text-white flex items-center justify-center text-2xl font-bold shadow-md">
              ?
            </div>
            <div className="absolute top-0 right-16 w-11 h-11 rounded-2xl rounded-br-sm bg-emerald-400 text-white flex items-center justify-center text-lg font-bold shadow-md">
              ?
            </div>
            <div className="absolute bottom-16 left-0 w-12 h-12 rounded-2xl rounded-bl-sm bg-blue-400 text-white flex items-center justify-center text-xl font-bold shadow-md">
              ?
            </div>
            <div className="absolute bottom-4 right-4 w-14 h-14 rounded-2xl rounded-br-sm bg-emerald-500 text-white flex items-center justify-center text-2xl font-bold shadow-md">
              ?
            </div>

            <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full bg-blue-100 flex flex-col items-center justify-center gap-2 text-blue-300 overflow-hidden">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <span className="text-sm">รูปเภสัชกร ANIN</span>
            </div>
            {/*
              เมื่อมีรูปจริง:
              <Image src="/images/sections/faq-pharmacist.png" alt="เภสัชกร ANIN" fill className="object-contain" />
            */}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── FAQ List with Tabs ── */
function FAQListSection() {
  const [activeTab, setActiveTab] = useState<FAQCategory>("service")
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [showAll, setShowAll] = useState(false)

  const filtered = faqItems.filter((item) => item.category === activeTab)
  const displayed = showAll ? filtered : filtered.slice(0, 6)

  return (
    <section className="bg-surface-alt py-12 lg:py-16">
      <div className="container-anin">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md border border-border p-5 lg:p-8">

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveTab(cat.id); setOpenIndex(null); setShowAll(false) }}
                className={`text-base font-medium px-4 py-2 rounded-lg transition-colors ${
                  activeTab === cat.id
                    ? "bg-blue-900 text-white"
                    : "bg-surface-alt text-neutral-500 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {displayed.map((item, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start gap-4 p-5 text-left hover:bg-blue-50 transition-colors"
                >
                  <span className="shrink-0 w-6 h-6 rounded-full bg-blue-700 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    Q
                  </span>
                  <span className="flex-1 text-base font-medium text-blue-900">{item.q}</span>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C5FD4" strokeWidth="2"
                    className={`shrink-0 mt-0.5 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5 flex gap-4">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-gold-100 text-gold-600 text-xs font-bold flex items-center justify-center mt-0.5">
                      A
                    </span>
                    <p className="text-base text-neutral-500 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Show more */}
          {filtered.length > 6 && (
            <div className="mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 mx-auto text-base text-neutral-500 border border-border px-6 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {showAll ? "แสดงน้อยลง" : `ดูคำถามในหมวดนี้ทั้งหมด (${filtered.length})`}
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className={showAll ? "rotate-180" : ""}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ── Closing CTA ── */
function FAQClosingCTA() {
  return (
    <section className="bg-surface-blue py-12 lg:py-16">
      <div className="container-anin">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">

          {/* Phone mockup */}
          <div className="hidden lg:block relative shrink-0 w-28 h-40 rounded-2xl bg-white border border-border shadow-sm p-3">
            <span className="absolute -top-2 -left-2 flex items-center gap-1 bg-[#06C755] text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
              <LineIcon className="w-3 h-3" /> LINE
            </span>
            <div className="flex flex-col gap-1.5 mt-4">
              <div className="h-2.5 w-3/4 rounded-full bg-blue-100" />
              <div className="h-2.5 w-1/2 rounded-full bg-blue-100 self-end" />
              <div className="h-2.5 w-2/3 rounded-full bg-blue-100" />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col gap-1 text-center lg:text-left">
            <h2 className="text-lg lg:text-xl font-bold text-blue-900">ยังไม่เจอคำตอบที่ต้องการ?</h2>
            <p className="text-base text-neutral-500">เภสัชกร ANIN พร้อมให้คำแนะนำและดูแลคุณผ่าน LINE</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 shrink-0">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#05a847] text-white font-semibold text-base px-5 py-3 rounded-lg transition-colors shadow-sm"
            >
              <LineIcon />
              ปรึกษาเภสัชกร ผ่าน LINE
            </a>
            <a
              href="tel:0820311590"
              className="inline-flex items-center gap-2 border border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold text-base px-5 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              โทรหาเรา
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold text-base px-5 py-3 rounded-lg transition-colors"
            >
              <Store className="w-4 h-4" />
              เลือกสาขาใกล้คุณ
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
