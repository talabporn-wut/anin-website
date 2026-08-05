"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import {
  MessageCirclePlus,
  PackagePlus,
  ClipboardList,
  FileSearch,
  PillBottle,
  Truck,
  Wind,
  Flame,
  Brain,
  CircleAlert,
  Sparkles,
  Droplets,
  Bandage,
  Thermometer,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import { howItWorks, symptoms, featuredProducts } from "@/content/products"
import { LINE_URL } from "@/lib/navigation"
import GlobalCTA from "@/components/shared/GlobalCTA"

const stepIcons: Record<string, LucideIcon> = {
  consult: MessageCirclePlus,
  select: PackagePlus,
  prescription: ClipboardList,
  review: FileSearch,
  guide: PillBottle,
  delivery: Truck,
}

const symptomIcons: Record<string, LucideIcon> = {
  cough: Wind,
  soreThroat: Flame,
  headache: Brain,
  stomachAche: CircleAlert,
  allergy: Sparkles,
  diarrhea: Droplets,
  rash: Bandage,
  fever: Thermometer,
}

function LineIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.08 2 11.1c0 3.05 1.6 5.76 4.1 7.5-.18.63-.65 2.28-.74 2.63-.12.43.16.43.34.31.14-.09 1.82-1.23 2.56-1.73.54.08 1.12.12 1.74.12 5.52 0 10-4.08 10-9.1S17.52 2 12 2z" />
    </svg>
  )
}

function ImagePlaceholderIcon({ className }: { className?: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  )
}

export default function ProductsPage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <SymptomsSection />
      <RecommendedProductsSection />
      <GlobalCTA />
    </>
  )
}

/* ── Section 1: Hero ── */
function HeroSection() {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="container-anin">
        <div className="gradient-hero rounded-3xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 p-8 lg:p-14">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl lg:text-3xl font-bold text-white leading-snug">
                ร้านขายยาและผลิตภัณฑ์สุขภาพ
                <br />
                โดยเภสัชกรวิชาชีพ
              </h1>
              <p className="text-2xl lg:text-4xl font-bold text-white">
                &ldquo;ยาใช่ ใช้ถูก ปลอดภัย&rdquo;
              </p>
              <div className="w-12 h-0.5 bg-gold-500" />
              <p className="text-blue-100 text-sm leading-relaxed max-w-lg">
                จำหน่ายยาสามัญประจำบ้าน ยาโรคเรื้อรัง อาหารเสริม วิตามิน
                สมุนไพร อาหารทางการแพทย์ เวชสำอาง สกินแคร์
                อุปกรณ์การแพทย์ อุปกรณ์ทำแผล ชุดตรวจต่างๆ
                ผลิตภัณฑ์สุขภาพสำหรับผู้สูงอายุ ตั้งครรภ์ แม่และเด็ก
                รับจัดหายาและผลิตภัณฑ์สุขภาพหายาก
              </p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#05a847] text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors shadow-sm mt-2"
              >
                <LineIcon />
                ปรึกษาเภสัชกร ANIN
              </a>
            </div>

            {/* Right: pharmacist photo placeholder */}
            <div className="hidden lg:flex items-center justify-center relative h-full min-h-[320px]">
              <div className="absolute w-72 h-72 rounded-full border-2 border-gold-500/40" />
              <div className="relative w-64 h-64 rounded-2xl bg-blue-800/60 flex flex-col items-center justify-center gap-2 text-blue-300 overflow-hidden">
                <ImagePlaceholderIcon />
                <span className="text-sm">รูปเภสัชกร ANIN</span>
              </div>
            </div>
            {/*
              เมื่อมีรูปจริง:
              <Image src="/images/sections/products-pharmacist.png" alt="เภสัชกร ANIN" fill className="object-contain" />
            */}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Section 2: How it works ── */
function HowItWorksSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-anin">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {howItWorks.map((step) => {
            const Icon = stepIcons[step.icon]
            return (
              <div key={step.num} className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-blue-700" />
                </div>
                <div className="w-6 h-6 rounded-full border border-blue-700 text-blue-700 text-xs font-bold flex items-center justify-center">
                  {step.num}
                </div>
                <p className="text-sm font-bold text-blue-900 leading-snug">{step.title}</p>
                <p className="text-xs text-neutral-500 leading-relaxed">{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── Section 3: Symptoms ── */
function SymptomsSection() {
  return (
    <section className="bg-white pb-16 lg:pb-20">
      <div className="container-anin">
        <div className="mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-blue-900">ดูกลุ่มอาการที่พบบ่อย</h2>
          <p className="text-sm text-neutral-500 mt-1">
            เมื่อกดที่อาการ จะเข้าสู่หน้าให้ความรู้และคำแนะนำโดยละเอียด
          </p>
        </div>

        <div className="flex items-center gap-6 overflow-x-auto pb-2 lg:justify-between lg:overflow-visible">
          {symptoms.map((s) => {
            const Icon = symptomIcons[s.icon]
            return (
              <Link key={s.label} href="/articles" className="flex flex-col items-center gap-2 shrink-0 group">
                <div className="w-14 h-14 rounded-full bg-surface-alt group-hover:bg-blue-50 flex items-center justify-center text-blue-700 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs text-neutral-600">{s.label}</span>
              </Link>
            )
          })}

          <Link href="/articles" className="flex flex-col items-center gap-2 shrink-0">
            <div className="w-14 h-14 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center text-white transition-colors">
              <ArrowRight className="w-5 h-5" />
            </div>
            <span className="text-xs text-blue-700 font-medium">ดูทั้งหมด</span>
          </Link>
        </div>

        <div className="border-b border-border mt-6" />
      </div>
    </section>
  )
}

/* ── Section 4: Recommended products ── */
function RecommendedProductsSection() {
  const [current, setCurrent] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollTo = (index: number) => {
    if (!sliderRef.current) return
    const cards = sliderRef.current.children
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
    }
    setCurrent(index)
  }

  const prev = () => scrollTo(Math.max(0, current - 1))
  const next = () => scrollTo(Math.min(featuredProducts.length - 1, current + 1))

  return (
    <section className="bg-white pb-16 lg:pb-20">
      <div className="container-anin">
        <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6">ยาและผลิตภัณฑ์ที่แนะนำ</h2>

        <div className="relative flex items-center gap-3">
          <button
            onClick={prev}
            disabled={current === 0}
            className="hidden sm:flex shrink-0 w-9 h-9 rounded-full border border-border items-center justify-center hover:bg-blue-50 disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div
            ref={sliderRef}
            className="flex-1 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-1"
          >
            {featuredProducts.map((p, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-[45%] sm:w-[30%] lg:w-[calc((100%-5*16px)/6)]"
              >
                <div className="flex flex-col gap-3 border border-border rounded-xl p-4 h-full hover:shadow-md transition-all">
                  <div className="aspect-square rounded-lg bg-blue-50 flex items-center justify-center text-blue-200">
                    <ImagePlaceholderIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-blue-900">{p.name}</p>
                    <p className="text-xs text-neutral-500 leading-relaxed mt-0.5">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === featuredProducts.length - 1}
            className="hidden sm:flex shrink-0 w-9 h-9 rounded-full border border-border items-center justify-center hover:bg-blue-50 disabled:opacity-30 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex justify-center gap-1.5 mt-4">
          {featuredProducts.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`ไปยังสินค้าลำดับที่ ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                current === i ? "w-5 bg-blue-700" : "w-1.5 bg-blue-100"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

