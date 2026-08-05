import type { Metadata } from "next"
import Link from "next/link"
import { UserCheck, Calendar, Thermometer, MessageCircle, Star, type LucideIcon } from "lucide-react"
import GlobalCTA from "@/components/shared/GlobalCTA"
import { qualitySteps, qualityStandards, pharmacists } from "@/content/standard"
import { LINE_URL } from "@/lib/navigation"

const qualityStandardIcons: Record<string, LucideIcon> = {
  pharmacist: UserCheck,
  calendar: Calendar,
  thermometer: Thermometer,
  chat: MessageCircle,
  star: Star,
}

export const metadata: Metadata = {
  title: "มาตรฐาน ANIN | ความปลอดภัยที่พิสูจน์ได้",
  description:
    "ทุกขั้นตอนของ ANIN ถูกออกแบบภายใต้ระบบคุณภาพโดยเภสัชกรวิชาชีพ เพื่อช่วยให้ท่านได้รับยาและผลิตภัณฑ์สุขภาพที่เหมาะสม",
}

export default function StandardPage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <QualitySystemSection />
      <QualityStandardsSection />
      <PharmacistTeamSection />
      <GlobalCTA />
    </>
  )
}

/* ── Section 1: Hero ── */
function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #EEF4FF 0%, #F5F9FF 60%, #ffffff 100%)" }}
    >
      <div className="container-anin">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px] items-center gap-0">
          <div className="flex flex-col gap-5 py-16 lg:py-20 pr-0 lg:pr-12">
            <h1 className="text-[2.8rem] lg:text-[3.2rem] font-bold text-blue-900 leading-[1.15]">
              ความปลอดภัย
              <br />
              ที่พิสูจน์ได้
            </h1>
            <p className="text-[0.95rem] text-neutral-500 leading-relaxed max-w-md">
              ทุกขั้นตอนของ ANIN ถูกออกแบบภายใต้ระบบคุณภาพ
              โดยเภสัชกรวิชาชีพ เพื่อช่วยให้ท่านได้รับยา
              และผลิตภัณฑ์สุขภาพที่เหมาะสม ใช้อย่างถูกต้อง และปลอดภัย
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
              >
                ดูบริการของ ANIN
              </Link>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#1C5FD4">
                  <path d="M12 2C6.48 2 2 6.08 2 11.1c0 3.05 1.6 5.76 4.1 7.5-.18.63-.65 2.28-.74 2.63-.12.43.16.43.34.31.14-.09 1.82-1.23 2.56-1.73.54.08 1.12.12 1.74.12 5.52 0 10-4.08 10-9.1S17.52 2 12 2z" />
                </svg>
                ปรึกษาเภสัชกรผ่าน LINE
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-end justify-end h-full min-h-[480px] relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-blue-200">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span className="text-sm text-blue-300">รูปเภสัชกร ANIN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Section 2: Philosophy ── */
function PhilosophySection() {
  return (
    <section className="bg-blue-900 py-10 lg:py-12">
      <div className="container-anin">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="shrink-0 flex flex-col items-center gap-2">
            <div className="w-20 h-20 flex items-center justify-center">
              <svg viewBox="0 0 80 80" className="w-20 h-20">
                <polygon
                  points="40,4 74,22 74,58 40,76 6,58 6,22"
                  fill="none"
                  stroke="#DBA94A"
                  strokeWidth="2"
                />
                <circle cx="40" cy="40" r="16" fill="none" stroke="#DBA94A" strokeWidth="1.5" />
                <path d="M32 40 L40 32 L48 40 L40 48 Z" fill="#DBA94A" opacity="0.3" />
                <circle cx="40" cy="40" r="4" fill="#DBA94A" />
              </svg>
            </div>
            <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
              Our Philosophy
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl lg:text-2xl font-bold text-white leading-snug">
              เพราะ{" "}
              <span className="text-gold-400">"ยาใช่ ใช้ถูก ปลอดภัย"</span>
            </h2>
            <p className="text-blue-200 leading-relaxed text-sm lg:text-base max-w-2xl">
              ต้องมีระบบคุณภาพโดยเภสัชกรวิชาชีพ ทุกขั้นตอนจึงถูกออกแบบ
              เพื่อช่วยให้ท่านได้รับยาและผลิตภัณฑ์สุขภาพที่เหมาะสม
              ใช้อย่างถูกต้อง และปลอดภัย
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Section 3: Quality System (10 steps) ── */
function QualitySystemSection() {
  const row1 = qualitySteps.slice(0, 5)
  const row2 = qualitySteps.slice(5, 10)

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-anin flex flex-col gap-10">
        <div className="text-center">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
            Pharmacist-Controlled Quality System
          </p>
          <h2 className="text-xl lg:text-2xl font-bold text-blue-900">
            ความปลอดภัยไม่ได้เริ่มที่การจ่ายยา แต่เริ่มตั้งแต่การคัดเลือก
          </h2>
          <p className="mt-2 text-sm text-neutral-500">
            การจัดซื้อ การตรวจรับ การจัดเก็บ การควบคุมคุณภาพ และการประเมินโดยเภสัชกรก่อนแนะนำ
          </p>
        </div>

        {[row1, row2].map((row, ri) => (
          <div key={ri} className="grid grid-cols-5 gap-2 lg:gap-4">
            {row.map((step, i) => (
              <div key={step.num} className="flex flex-col items-center gap-3 relative">
                {i < row.length - 1 && (
                  <div className="absolute top-5 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px border-t-2 border-dashed border-blue-200 z-0" />
                )}
                <div className="relative z-10 w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  {step.num}
                </div>
                <p className="text-[0.7rem] lg:text-xs text-neutral-500 text-center leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Section 4: Quality Standards ── */
function QualityStandardsSection() {
  return (
    <section className="bg-surface-alt py-16 lg:py-20">
      <div className="container-anin">
        <h2 className="text-xl lg:text-2xl font-bold text-blue-900 text-center mb-8">
          มาตรฐานที่ดี ต้องตรวจสอบและมองเห็นได้
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {qualityStandards.map((s, i) => {
            const Icon = qualityStandardIcons[s.icon]
            return (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-3 bg-white rounded-xl border border-border p-5 shadow-xs hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                <Icon className="w-6 h-6 text-blue-700" />
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed whitespace-pre-line">
                {s.label}
              </p>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── Section 4b: Pharmacist Team ── */
function PharmacistTeamSection() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container-anin">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {pharmacists.map((p, i) => (
            <div key={i} className="bg-white rounded-xl border border-border overflow-hidden shadow-xs">
              <div className="aspect-[3/4] bg-blue-50 flex flex-col items-center justify-center gap-2 text-blue-200">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <span className="text-xs">รูปเภสัชกร</span>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <p className="font-semibold text-blue-900 text-sm">{p.name}</p>
                <p className="text-xs text-neutral-400">{p.license}</p>
                <p className="text-xs text-neutral-400">{p.branch}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
