"use client"

import { useState, useRef } from "react"
import { reviews, googleRating } from "@/content/reviews"

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function GoogleMapsAppIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48">
      <path d="M17 21 Q24 44 31 21 Z" fill="#34A853" />
      <path d="M24 18 L24 9 A9 9 0 0 1 33 18 Z" fill="#EA4335" />
      <path d="M24 18 L33 18 A9 9 0 0 1 24 27 Z" fill="#FBBC04" />
      <path d="M24 18 L24 27 A9 9 0 0 1 15 18 Z" fill="#34A853" />
      <path d="M24 18 L15 18 A9 9 0 0 1 24 9 Z" fill="#4285F4" />
      <circle cx="24" cy="18" r="3.6" fill="white" />
    </svg>
  )
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="bg-white border border-border rounded-xl p-4 flex flex-col gap-3 shadow-xs h-full">
      <div className="flex gap-0.5">
        {Array(review.rating).fill(0).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className="text-sm text-neutral-500 leading-relaxed line-clamp-4 flex-1">
        "{review.text}"
      </p>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-sm shrink-0">
            {review.avatar}
          </div>
          <div>
            <p className="text-xs font-semibold text-blue-900">{review.name}</p>
            <p className="text-xs text-neutral-400">{review.time}</p>
          </div>
        </div>
        <span className="text-xs text-neutral-300 shrink-0">{review.branch}</span>
      </div>
    </div>
  )
}

export default function SocialProofSection() {
  const [current, setCurrent] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const maxIndex = reviews.length - 3

  const scrollTo = (index: number) => {
    if (!sliderRef.current) return
    const cards = sliderRef.current.children
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
    }
    setCurrent(index)
  }

  const prev = () => scrollTo(Math.max(0, current - 1))
  const next = () => scrollTo(Math.min(maxIndex, current + 1))

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-anin flex flex-col gap-10">

        {/* Reviews Row */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch border border-border rounded-2xl p-6 lg:p-8 shadow-sm">

          {/* Google Rating */}
          <div className="flex flex-col items-center gap-1 shrink-0 lg:border-r lg:border-border lg:pr-8 lg:mr-2">
            <p className="text-sm font-semibold text-blue-600">รีวิวจาก Google Maps</p>
            <p className="text-xs text-neutral-400">คะแนนเฉลี่ยทุกสาขา</p>
            <div className="my-2">
              <GoogleMapsAppIcon />
            </div>
            <p className="text-4xl font-bold text-blue-900">
              {googleRating.score.toFixed(1)}
              <span className="text-xl text-neutral-400">/5</span>
            </p>
            <div className="flex gap-0.5">
              {Array(5).fill(0).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-xs text-neutral-400 mt-1">จาก {googleRating.total} รีวิว</p>
          </div>

          {/* Review Cards */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">

            {/* Desktop: scroll-based slider */}
            <div
              ref={sliderRef}
              className="hidden lg:flex gap-4 overflow-hidden"
            >
              {reviews.map((r, i) => (
                <div key={i} className="shrink-0 w-[calc((100%-32px)/3)]">
                  <ReviewCard review={r} />
                </div>
              ))}
            </div>

            {/* Desktop prev/next */}
            <div className="hidden lg:flex gap-2 justify-end">
              <button
                onClick={prev}
                disabled={current === 0}
                className="p-2 rounded-full border border-border hover:bg-blue-50 disabled:opacity-30 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={next}
                disabled={current >= maxIndex}
                className="p-2 rounded-full border border-border hover:bg-blue-50 disabled:opacity-30 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Mobile: snap scroll */}
            <div className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-1">
              {reviews.map((r, i) => (
                <div key={i} className="snap-start shrink-0 w-[80%] sm:w-[45%]">
                  <ReviewCard review={r} />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Shop Images Grid */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
          {Array(6).fill(0).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg overflow-hidden bg-blue-50 flex items-center justify-center"
            >
              {/*
                เมื่อมีรูปจริง:
                <Image src={`/images/sections/shop-${i+1}.jpg`} alt="บรรยากาศร้าน ANIN" fill className="object-cover" />
              */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
