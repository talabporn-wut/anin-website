"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Search,
  Mic,
  Clock,
  Thermometer,
  Wind,
  Flame,
  Droplets,
  Brain,
  CircleAlert,
  Droplet,
  Activity,
  Bandage,
  Sparkles,
  Dumbbell,
  BedDouble,
  Smile,
  Eye,
  Ear,
  Pill,
  LayoutGrid,
  Baby,
  PersonStanding,
  Venus,
  Mars,
  UserRound,
  HeartHandshake,
  ChevronRight,
  ChevronDown,
  Info,
  Utensils,
  Bone,
  HeartPulse,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"
import {
  popularSearches,
  recentSearches,
  symptomTopics,
  careCategories,
  browseCategories,
} from "@/content/articles"
import GlobalCTA from "@/components/shared/GlobalCTA"

const symptomIcons: Record<string, LucideIcon> = {
  fever: Thermometer,
  cough: Wind,
  soreThroat: Flame,
  runnyNose: Droplets,
  headache: Brain,
  stomachAche: CircleAlert,
  diarrhea: Droplet,
  dizziness: Activity,
  rash: Bandage,
  allergy: Sparkles,
  musclePain: Dumbbell,
  insomnia: BedDouble,
  toothache: Smile,
  redEye: Eye,
  earache: Ear,
  sideEffect: Pill,
}

const careIcons: Record<string, LucideIcon> = {
  child: Baby,
  pregnant: PersonStanding,
  woman: Venus,
  man: Mars,
  elderly: UserRound,
  caregiver: HeartHandshake,
}

const careColorMap: Record<string, { bg: string; iconBg: string; iconText: string }> = {
  blue: { bg: "bg-blue-50", iconBg: "bg-blue-100", iconText: "text-blue-700" },
  rose: { bg: "bg-rose-50", iconBg: "bg-rose-100", iconText: "text-rose-600" },
  purple: { bg: "bg-purple-50", iconBg: "bg-purple-100", iconText: "text-purple-600" },
  sky: { bg: "bg-sky-50", iconBg: "bg-sky-100", iconText: "text-sky-700" },
  gold: { bg: "bg-gold-100", iconBg: "bg-gold-200", iconText: "text-gold-700" },
  green: { bg: "bg-green-50", iconBg: "bg-green-100", iconText: "text-green-700" },
}

const browseIcons: Record<string, LucideIcon> = {
  respiratory: Wind,
  digestive: Utensils,
  skin: Sparkles,
  bone: Bone,
  senses: Eye,
  woman: Venus,
  man: Mars,
  chronic: HeartPulse,
  prevention: ShieldCheck,
  safety: Pill,
}

export default function ArticlesPage() {
  return (
    <>
      <HeroSearchSection />
      <SymptomGridSection />
      <CarePersonaSection />
      <BrowseAllSection />
      <GlobalCTA />
    </>
  )
}

/* ── Section 1: Hero + Search ── */
function HeroSearchSection() {
  const [query, setQuery] = useState("")

  return (
    <section className="bg-white pt-8 pb-12 lg:pt-12 lg:pb-16">
      <div className="container-anin">
        <div className="bg-surface-alt rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1 flex flex-col gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-blue-900">คลังสุขภาพ</h1>
              <p className="text-base text-neutral-500 mt-1">ท่านกำลังสนใจปัญหาสุขภาพเรื่องใด</p>
            </div>

            <div className="flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-3 shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <Search className="w-4 h-4 text-neutral-400 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ค้นหาอาการ, โรค, ยา หรือผลิตภัณฑ์สุขภาพ..."
                className="flex-1 outline-none text-base text-neutral-700 placeholder:text-neutral-400 bg-transparent min-w-0"
              />
              <button type="button" className="text-neutral-400 hover:text-blue-700 transition-colors shrink-0">
                <Mic className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="shrink-0 bg-blue-700 hover:bg-blue-800 text-white text-base font-semibold px-5 py-2 rounded-lg transition-colors"
              >
                ค้นหา
              </button>
            </div>

            <div>
              <p className="text-sm font-semibold text-neutral-500 mb-2">ค้นหายอดนิยม</p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setQuery(s)}
                    className="text-sm px-3 py-1.5 rounded-full border border-border bg-white text-neutral-600 hover:border-blue-400 hover:text-blue-700 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block shrink-0 w-56">
            <p className="text-sm font-semibold text-neutral-500 mb-2">การค้นหาล่าสุด</p>
            <div className="flex flex-col gap-2.5">
              {recentSearches.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setQuery(s)}
                  className="flex items-center gap-2 text-base text-neutral-500 hover:text-blue-700 transition-colors text-left"
                >
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Section 2: Symptom grid ── */
function SymptomGridSection() {
  return (
    <section className="bg-white pb-16 lg:pb-20">
      <div className="container-anin">
        <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6">ฉันกำลังมีอาการ...</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {symptomTopics.map((s) => {
            const Icon = symptomIcons[s.icon]
            return (
              <Link
                key={s.label}
                href="/articles"
                className="flex flex-col items-center justify-center text-center gap-3 border border-border rounded-xl p-5 hover:shadow-md hover:border-blue-100 transition-all bg-white"
              >
                <Icon className="w-8 h-8 text-blue-700" strokeWidth={1.5} />
                <span className="text-sm text-neutral-600 leading-snug">{s.label}</span>
              </Link>
            )
          })}
          <Link
            href="/articles"
            className="flex flex-col items-center justify-center text-center gap-3 border border-border rounded-xl p-5 hover:shadow-md hover:border-blue-100 transition-all bg-surface-alt"
          >
            <LayoutGrid className="w-8 h-8 text-blue-700" strokeWidth={1.5} />
            <span className="text-sm text-blue-700 font-medium leading-snug">ดูทั้งหมด</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── Section 3: Care personas ── */
function CarePersonaSection() {
  return (
    <section className="bg-white pb-16 lg:pb-20">
      <div className="container-anin">
        <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6">ฉันกำลังดูแล...</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {careCategories.map((c) => {
            const Icon = careIcons[c.icon]
            const colors = careColorMap[c.color]
            return (
              <div key={c.title} className={`flex flex-col gap-4 rounded-2xl border border-border p-5 ${colors.bg}`}>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${colors.iconBg} ${colors.iconText}`}>
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-blue-900 mb-2">{c.title}</p>
                  <ul className="flex flex-col gap-1">
                    {c.items.map((item) => (
                      <li key={item} className="text-sm text-neutral-500">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/articles"
                  className="text-sm font-medium text-blue-700 hover:underline inline-flex items-center gap-1"
                >
                  ดูทั้งหมด <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            )
          })}
        </div>
        <p className="text-xs text-neutral-400 mt-4 flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5" /> กดที่การ์ดเพื่อดูอาการและหัวข้อที่เกี่ยวข้อง
        </p>
      </div>
    </section>
  )
}

/* ── Section 4: Browse all ── */
function BrowseAllSection() {
  const [openSet, setOpenSet] = useState<Set<string>>(new Set(browseCategories.map((c) => c.title)))

  const toggle = (title: string) => {
    setOpenSet((prev) => {
      const next = new Set(prev)
      if (next.has(title)) next.delete(title)
      else next.add(title)
      return next
    })
  }

  return (
    <section className="bg-white pb-16 lg:pb-20">
      <div className="container-anin">
        <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6">เรียกดูทั้งหมด</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-8">
          {browseCategories.map((cat) => {
            const Icon = browseIcons[cat.icon]
            const isOpen = openSet.has(cat.title)
            return (
              <div key={cat.title}>
                <button
                  onClick={() => toggle(cat.title)}
                  className="w-full flex items-center justify-between gap-2 text-left mb-3"
                >
                  <span className="flex items-center gap-2 text-base font-bold text-blue-900">
                    <Icon className="w-4 h-4 text-blue-700 shrink-0" />
                    {cat.title}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform ${isOpen ? "" : "-rotate-90"}`}
                  />
                </button>
                {isOpen && (
                  <ul className="flex flex-col gap-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="text-sm text-neutral-500">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
