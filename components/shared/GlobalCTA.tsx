import { LINE_URL } from "@/lib/navigation"

export default function GlobalCTA() {
  return (
    <section className="bg-surface-blue py-12 lg:py-16">
      <div className="container-anin">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left: Text + Button */}
          <div className="flex flex-col gap-4 max-w-xl">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 leading-snug">
              มีข้อสงสัยเกี่ยวกับยาและผลิตภัณฑ์สุขภาพ?
              <br />
              ปรึกษาเภสัชกร ANIN{" "}
              <span className="text-blue-600">(ไม่มีค่าใช้จ่าย)</span>
            </h2>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#05a847] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.08 2 11.1c0 3.05 1.6 5.76 4.1 7.5-.18.63-.65 2.28-.74 2.63-.12.43.16.43.34.31.14-.09 1.82-1.23 2.56-1.73.54.08 1.12.12 1.74.12 5.52 0 10-4.08 10-9.1S17.52 2 12 2z" />
              </svg>
              ปรึกษาเภสัชกรผ่าน LINE
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <p className="text-xs text-neutral-400">
              "สั่งซื้อล่วงหน้า รับที่ร้าน หรือจัดส่งตามพื้นที่และเงื่อนไขการให้บริการของ ANIN"
            </p>
          </div>

          {/* Right: Pharmacist image */}
          <div className="relative w-48 h-48 lg:w-56 lg:h-56 shrink-0">
            <div className="w-full h-full rounded-full bg-blue-100 flex flex-col items-center justify-center gap-1 text-blue-300">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <span className="text-xs">รูปเภสัชกร</span>
            </div>
            {/*
              เมื่อมีรูปจริง:
              <Image src="/images/sections/cta-pharmacist.png" alt="เภสัชกร ANIN" fill className="object-contain" />
            */}
          </div>

        </div>
      </div>
    </section>
  )
}