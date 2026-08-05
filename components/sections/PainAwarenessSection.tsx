const painCards = [
  {
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="#1C5FD4" strokeWidth="1.5" />
        <circle cx="18" cy="20" r="3" stroke="#1C5FD4" strokeWidth="1.5" />
        <path d="M14 32c0-4 2-6 4-6h4c1 0 2 .5 3 1" stroke="#1C5FD4" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="30" cy="20" r="3" stroke="#DBA94A" strokeWidth="1.5" />
        <line x1="28" y1="28" x2="32" y2="32" stroke="#DBA94A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="30" cy="28" r="4" stroke="#DBA94A" strokeWidth="1.5" />
      </svg>
    ),
    text: "เลือกไม่เหมาะกับอาการหรือความต้องการ",
  },
  {
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="#1C5FD4" strokeWidth="1.5" />
        <rect x="17" y="14" width="8" height="12" rx="4" stroke="#1C5FD4" strokeWidth="1.5" />
        <circle cx="30" cy="22" r="5" stroke="#DBA94A" strokeWidth="1.5" />
        <line x1="28" y1="30" x2="34" y2="36" stroke="#DBA94A" strokeWidth="2" strokeLinecap="round" />
        <line x1="28" y1="20" x2="32" y2="24" stroke="#DBA94A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="32" y1="20" x2="28" y2="24" stroke="#DBA94A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text: "ยา วิตามิน หรืออาหารเสริมอาจใช้ร่วมกันไม่ได้",
  },
  {
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="#1C5FD4" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="8" stroke="#1C5FD4" strokeWidth="1.5" />
        <line x1="24" y1="24" x2="24" y2="18" stroke="#1C5FD4" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="24" x2="28" y2="26" stroke="#DBA94A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text: "ใช้ผิดวิธีหรือผิดเวลา",
  },
  {
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="#1C5FD4" strokeWidth="1.5" />
        <circle cx="20" cy="18" r="3" stroke="#1C5FD4" strokeWidth="1.5" />
        <path d="M16 30c0-3 2-5 4-5h3" stroke="#1C5FD4" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="30" cy="20" r="4" stroke="#1C5FD4" strokeWidth="1.5" />
        <path d="M28 30c0-2 1-4 2-4" stroke="#1C5FD4" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="34" cy="30" r="3" stroke="#DBA94A" strokeWidth="1.5" />
      </svg>
    ),
    text: "ไม่เหมาะกับโรคประจำตัว ช่วงวัย หรือการตั้งครรภ์",
  },
  {
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="#1C5FD4" strokeWidth="1.5" />
        <path d="M16 32 L20 20 L24 28 L28 22 L32 32" stroke="#1C5FD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="32" x2="32" y2="32" stroke="#DBA94A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 14 L24 16" stroke="#DBA94A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text: "คุณภาพลดลงจากการเก็บรักษาที่ไม่เหมาะสม",
  },
]

export default function PainAwarenessSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-anin">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-[1.75rem] font-bold text-blue-900">
            การเลือกและการใช้ที่ไม่เหมาะสม
          </h2>
          <p className="mt-2 text-base text-neutral-500">
            อาจส่งผลต่อประสิทธิภาพและความปลอดภัยมากกว่าที่คิด
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {painCards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-4 p-5 rounded-xl border border-border hover:shadow-md hover:border-blue-100 transition-all bg-white"
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                {card.svg}
              </div>
              <p className="text-[0.8rem] text-neutral-500 leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}