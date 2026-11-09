import Link from "next/link";
import Image from "next/image";
import { LINE_URL } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container-anin py-8">
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {/* Col 1: Brand */}
          <div className="flex flex-col items-center gap-3 flex-1 px-6 py-2">
            <Image
              src="/images/logo/ANINWhite.png"
              alt="ANIN Pharmacy"
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
            />
            <p className="text-sm text-blue-200 leading-snug text-center">
              ยาใช่ ใช้ถูก ปลอดภัย
              <br />
              Professional & Personalized Pharmacy
            </p>
            <div className="flex gap-3 mt-auto pt-4">
              {[
                {
                  label: "LINE",
                  href: LINE_URL,
                  svg: (
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                      <path d="M12 2C6.48 2 2 6.08 2 11.1c0 3.05 1.6 5.76 4.1 7.5-.18.63-.65 2.28-.74 2.63-.12.43.16.43.34.31.14-.09 1.82-1.23 2.56-1.73.54.08 1.12.12 1.74.12 5.52 0 10-4.08 10-9.1S17.52 2 12 2z" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "#",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "#",
                  svg: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      className="w-4 h-4"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
                    </svg>
                  ),
                },
                {
                  label: "TikTok",
                  href: "#",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
                    </svg>
                  ),
                },
              ].map((s) =>
                s.href === "#" ? (
                <span
                  key={s.label}
                  aria-label={s.label}
                  title="เร็วๆ นี้"
                  className="w-9 h-9 rounded-full bg-blue-800 flex items-center justify-center opacity-50 cursor-default"
                >
                  {s.svg}
                </span>
                ) : (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors"
                >
                  {s.svg}
                </a>
                )
              )}
            </div>
          </div>

          {/* Col 2: บริการ */}
          <div className="flex flex-col gap-3 flex-1 px-6 py-2">
            <h6 className="text-sm font-semibold text-gold-400">บริการ</h6>
            <ul className="flex flex-col gap-3">
              {[
                { label: "สินค้าและบริการ", href: "/products" },
                { label: "คลังสุขภาพ", href: "/articles" },
                { label: "สาขาและติดต่อ", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: ช่วยเหลือ */}
          {/* Col 3: ช่วยเหลือ */}
<div className="flex flex-col gap-3 flex-1 basis-0 px-4 py-2">
  <h6 className="text-sm font-semibold text-gold-400">ช่วยเหลือ</h6>
  <ul className="flex flex-col gap-3">
    {[
      { label: "คำถามที่พบบ่อย",    href: "/faq" },      // เปลี่ยนจาก "#"
      { label: "มาตรฐาน ANIN",      href: "/standard" },
      { label: "เสนอแนะ ร้องเรียน", href: "/contact" },  // เปลี่ยนจาก "#"
    ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: ติดต่อ */}
          <div className="flex flex-col gap-3 flex-1 px-6 py-2">
            <h6 className="text-sm font-semibold text-gold-400">ติดต่อ</h6>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:0820311590"
                  className="inline-flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.03 1.2 2 2 0 012 .02h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  082-031-1590
                </a>
              </li>
              <li>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  LINE OA ID: @anin
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal */}
          <div className="flex flex-col gap-3 flex-1 px-6 py-2">
            <h6 className="text-sm font-semibold text-white opacity-0 select-none">
              -
            </h6>
            <ul className="flex flex-col gap-3">
              {[
                { label: "ข้อกำหนดการใช้งาน", href: "/terms" },
                { label: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
                { label: "ข้อจำกัดความรับผิดด้านสุขภาพ", href: "/medical-disclaimer" },
                { label: "นโยบายคุกกี้", href: "/cookie-policy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <p className="text-xs text-blue-300 mt-auto pt-4 whitespace-nowrap">
                © 2026 ANIN Pharma.CO.,LTD. All Rights Reserved.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
