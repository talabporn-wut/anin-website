"use client"

import { useState } from "react"
import Image from "next/image"
import {
    UserCheck,
    BadgeCheck,
    Thermometer,
    ShieldCheck,
    Store,
    MapPin,
    Clock,
    Car,
    MessageCircle,
    Phone,
    ShoppingCart,
    Users,
    Building2,
    Megaphone,
    type LucideIcon,
} from "lucide-react"
import GlobalCTA from "@/components/shared/GlobalCTA"
import { branches, contactDepartments, faqs } from "@/content/branches"
import { LINE_URL } from "@/lib/navigation"

const departmentIcons: Record<string, LucideIcon> = {
    cart: ShoppingCart,
    users: Users,
    building: Building2,
    megaphone: Megaphone,
}

export default function ContactPage() {
    return (
        <>
            <HeroSection />
            <ImageCarouselSection />
            <BranchesSection />
            <FAQSection />
            <DepartmentContactSection />
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
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px] items-center gap-0">
                    <div className="flex flex-col gap-5 py-14 lg:py-20 pr-0 lg:pr-12">
                        <h1 className="text-[2.6rem] lg:text-[3rem] font-bold text-blue-900 leading-[1.2]">
                            ติดต่อสาขา
                            <br />
                            และส่วนงาน
                        </h1>
                        <p className="text-[0.95rem] text-neutral-500 leading-relaxed max-w-md">
                            ทุกสาขาดูแลโดยเภสัชกรวิชาชีพ ภายใต้
                            มาตรฐานเดียวกัน เพื่อส่งมอบ
                            "ยาใช่ ใช้ถูก ปลอดภัย" ที่อนิน
                        </p>
                        <div className="pt-1">
                            <a
                                href={LINE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#05a847] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors shadow-sm"
                            >
                                <LineIcon />
                                ปรึกษาเภสัชกรผ่าน LINE
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-end justify-end h-full min-h-[420px] relative">
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

            {/* Feature badges */}
            <div className="bg-white border-t border-border">
                <div className="container-anin py-5">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: UserCheck, label: "เภสัชกรวิชาชีพ", sub: "ให้คำแนะนำที่ดีที่สุด" },
                            { icon: BadgeCheck, label: "คัดเลือกผลิตภัณฑ์", sub: "ตามมาตรฐานเดียวกัน" },
                            { icon: Thermometer, label: "คลังควบคุมอุณหภูมิ", sub: "รักษาคุณภาพผลิตภัณฑ์" },
                            { icon: ShieldCheck, label: "มาตรฐานให้คำแนะนำ", sub: "ใช้ในความปลอดภัยของทุกท่าน" },
                        ].map((f, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <f.icon className="w-6 h-6 text-blue-700 shrink-0" />
                                <div>
                                    <p className="text-sm font-semibold text-blue-900">{f.label}</p>
                                    <p className="text-xs text-neutral-400">{f.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ── Image Carousel ── */
const shopImages = branches.flatMap((branch) => [
    { src: branch.image, alt: `หน้าร้าน ${branch.name}` },
    ...(branch.images ?? []).map((src, i) => ({
        src,
        alt: `ภายในร้าน ${branch.name} ${i + 1}`,
    })),
])

function ImageCarouselSection() {
    const [current, setCurrent] = useState(0)
    const visibleCount = 3 // แสดง 3 รูปพร้อมกันบน desktop

    const prev = () => setCurrent((c) => Math.max(0, c - 1))
    const next = () => setCurrent((c) => Math.min(shopImages.length - visibleCount, c + 1))

    return (
        <section className="bg-white py-6 border-b border-border">
            <div className="container-anin">
                <div className="relative flex items-center gap-3">
                    {/* Prev */}
                    <button
                        onClick={prev}
                        disabled={current === 0}
                        className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-blue-50 disabled:opacity-30 transition-colors"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    {/* Images */}
                    <div className="flex-1 overflow-hidden">
                        <div
                            className="flex gap-3 transition-transform duration-300"
                            style={{ transform: `translateX(calc(-${current} * (100% / ${visibleCount} + 4px)))` }}
                        >
                            {shopImages.map((img, i) => (
                                <div
                                    key={i}
                                    className="shrink-0 rounded-xl overflow-hidden bg-blue-50"
                                    style={{ width: `calc(100% / ${visibleCount} - 8px)` }}
                                >
                                    <div className="relative aspect-video">
                                        <Image src={img.src} alt={img.alt} fill className="object-cover" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next */}
                    <button
                        onClick={next}
                        disabled={current >= shopImages.length - visibleCount}
                        className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-blue-50 disabled:opacity-30 transition-colors"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

/* ── Section 2: Branches ── */
function BranchesSection() {
    return (
        <section className="bg-white py-16 lg:py-20">
            <div className="container-anin flex flex-col gap-6">
                <h2 className="text-xl lg:text-2xl font-bold text-blue-900 flex items-center gap-2">
                    <Store className="w-5 h-5" /> สาขาของเรา
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {branches.map((branch) => (
                        <div key={branch.id} className="flex flex-col rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all">
                            {/* Map */}
                            <div className="aspect-video w-full bg-blue-50">
                                <iframe
                                    src={branch.mapEmbed}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    title={`แผนที่ ${branch.name}`}
                                />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col gap-4 p-5">
                                <div>
                                    <p className="text-xs text-blue-600 font-semibold mb-1">{branch.nickname}</p>
                                    <h3 className="text-base font-bold text-blue-900">{branch.name}</h3>
                                </div>

                                <div className="flex flex-col gap-2 text-sm text-neutral-500">
                                    <div className="flex gap-2">
                                        <MapPin className="w-4 h-4 shrink-0" />
                                        <span>{branch.address}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <Clock className="w-4 h-4 shrink-0" />
                                        <span>เปิดทุกวัน {branch.hours}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <Car className="w-4 h-4 shrink-0" />
                                        <span>มีที่จอดรถหน้าร้าน</span>
                                    </div>
                                </div>

                                {/* Action buttons */}
                                <div className="flex flex-col gap-2 pt-1">
                                    <a
                                        href={branch.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                            <circle cx="12" cy="9" r="2.5" />
                                        </svg>
                                        นำทางด้วย Google Maps
                                    </a>
                                    <div className="grid grid-cols-2 gap-2">
                                        <a
                                            href={`tel:${branch.phone.replace(/-/g, "")}`}
                                            className="flex items-center justify-center gap-2 border border-blue-700 text-blue-700 hover:bg-blue-50 text-sm font-semibold py-2.5 rounded-lg transition-colors"
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.03 1.2 2 2 0 012 .02h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                            </svg>
                                            โทรศัพท์
                                        </a>
                                        <a
                                            href={LINE_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05a847] text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
                                        >
                                            <LineIcon />
                                            ปรึกษาผ่าน LINE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ── Section 3: FAQ ── */
function FAQSection() {
    const [open, setOpen] = useState<number | null>(null)

    return (
        <section className="bg-surface-alt py-16 lg:py-20">
            <div className="container-anin">
                <h2 className="text-xl lg:text-2xl font-bold text-blue-900 flex items-center gap-2 mb-8">
                    <MessageCircle className="w-5 h-5" /> คำถามที่พบบ่อย
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-xl border border-border overflow-hidden shadow-xs">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-blue-50 transition-colors"
                            >
                                <span className="text-sm font-medium text-blue-900">{faq.q}</span>
                                <svg
                                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C5FD4" strokeWidth="2"
                                    className={`shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                            {open === i && (
                                <div className="px-5 pb-5">
                                    <p className="text-sm text-neutral-500 leading-relaxed">{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-6 text-center">
                    <a href="#" className="text-sm text-blue-600 hover:underline font-medium">
                        ดูคำถามทั้งหมด →
                    </a>
                </div>
            </div>
        </section>
    )
}

/* ── Section 4: Department Contact ── */
function DepartmentContactSection() {
    return (
        <section className="bg-white py-16 lg:py-20">
            <div className="container-anin">
                <h2 className="text-xl lg:text-2xl font-bold text-blue-900 flex items-center gap-2 mb-8">
                    <Phone className="w-5 h-5" /> ติดต่อฝ่ายงานและแจ้งเรื่อง
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {contactDepartments.map((dept, i) => {
                        const DeptIcon = departmentIcons[dept.icon]
                        return (
                        <div key={i} className="flex flex-col gap-4 bg-white rounded-xl border border-border p-5 shadow-xs hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                <DeptIcon className="w-6 h-6 text-blue-700" />
                            </div>
                            <div className="flex flex-col gap-1 flex-1">
                                <p className="text-sm font-semibold text-blue-900 leading-snug">{dept.label}</p>
                                <p className="text-xs text-neutral-400 leading-relaxed">{dept.description}</p>
                            </div>

                            {dept.type === "email" && dept.email && (
                                <>
                                    <p
                                        className="text-xs text-blue-600 font-medium"
                                    /* obfuscate: แสดง email แต่ไม่ใส่ plain text ใน href โดยตรง */
                                    >
                                        {dept.email}
                                    </p>
                                    <a
                                        href={`mailto:${dept.email}`}
                                        className="flex items-center justify-center gap-1 border border-blue-700 text-blue-700 hover:bg-blue-50 text-xs font-semibold py-2 rounded-lg transition-colors"
                                    >
                                        ส่งอีเมล
                                    </a>
                                </>
                            )}

                            {dept.type === "form" && dept.formUrl && (
                                <a
                                    href={dept.formUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-1 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold py-2 rounded-lg transition-colors"
                                >
                                    แจ้งผ่าน Google Form
                                </a>
                            )}
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

function LineIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.08 2 11.1c0 3.05 1.6 5.76 4.1 7.5-.18.63-.65 2.28-.74 2.63-.12.43.16.43.34.31.14-.09 1.82-1.23 2.56-1.73.54.08 1.12.12 1.74.12 5.52 0 10-4.08 10-9.1S17.52 2 12 2z" />
        </svg>
    )
}
