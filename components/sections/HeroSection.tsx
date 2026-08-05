import { LINE_URL } from "@/lib/navigation"

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #EEF4FF 0%, #F5F9FF 60%, #ffffff 100%)" }}
    >
      <div className="container-anin">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] items-center gap-0">

          {/* Left: Text */}
          <div className="flex flex-col gap-5 py-16 lg:py-20 pr-0 lg:pr-12">
            <h1 className="text-[2.6rem] lg:text-[3rem] font-bold text-blue-900 leading-[1.2]">
              ยาและผลิตภัณฑ์สุขภาพ
              <br />
              ที่เหมาะกับแต่ละท่าน
              <br />
              <span className="text-blue-900">อาจไม่เหมือนกัน</span>
            </h1>

            <p className="text-[0.95rem] text-neutral-500 leading-relaxed max-w-md">
              เภสัชกร ANIN พร้อมช่วยประเมินความเหมาะสม
              และให้คำแนะนำ เพื่อช่วยให้ท่านได้รับยา
              และผลิตภัณฑ์สุขภาพที่เหมาะสม ใช้อย่างถูกต้อง
              และปลอดภัย
            </p>

            <div className="pt-1">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors shadow-sm"
              >
                <LineIcon />
                ปรึกษาเภสัชกรผ่าน LINE
              </a>
            </div>
          </div>

          {/* Right: Image — ไม่มี card wrapper, รูปลอยอยู่ชิดขอบขวา */}
          <div className="relative hidden lg:flex items-end justify-end h-full min-h-[520px]">
            {/* Placeholder รอรูปจริง */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-blue-200">
              <ImagePlaceholderIcon />
              <span className="text-sm text-blue-300">รูปเภสัชกร ANIN + ผู้รับบริการ</span>
              <span className="text-xs text-blue-200">แนะนำ: PNG พื้นหลังโปร่งใส หรือรูปชิดขอบ</span>
            </div>
            {/*
              เมื่อได้รูปจริงให้แทนด้วย:
              <Image
                src="/images/sections/hero-pharmacist.png"
                alt="เภสัชกร ANIN ให้คำปรึกษาผู้รับบริการ"
                fill
                className="object-contain object-bottom"
                priority
              />
            */}
          </div>

        </div>
      </div>
    </section>
  )
}

function LineIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M12 2C6.48 2 2 6.08 2 11.1c0 3.05 1.6 5.76 4.1 7.5-.18.63-.65 2.28-.74 2.63-.12.43.16.43.34.31.14-.09 1.82-1.23 2.56-1.73.54.08 1.12.12 1.74.12 5.52 0 10-4.08 10-9.1S17.52 2 12 2z" />
    </svg>
  )
}

function ImagePlaceholderIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  )
}