import Link from "next/link"

export default function WhyANINSection() {
  return (
    <section className="bg-blue-900 py-16 lg:py-20">
      <div className="container-anin">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: Text */}
          <div className="flex flex-col gap-5">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider">
              Our Philosophy
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-snug">
              เพราะเราเชื่อว่า{" "}
              <span className="text-gold-400">"ยาใช่ ใช้ถูก ปลอดภัย"</span>
              <br />
              ต้องมีระบบคุณภาพ
              <br />
              โดยเภสัชกรวิชาชีพกำกับทุกขั้นตอน
            </h2>
            <Link
              href="/standard"
              className="self-start inline-flex items-center gap-2 border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-blue-900 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors mt-2"
            >
              ดูมาตรฐาน ANIN
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-blue-800">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-blue-500">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span className="text-sm">รูปบรรยากาศร้าน / เภสัชกร</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}