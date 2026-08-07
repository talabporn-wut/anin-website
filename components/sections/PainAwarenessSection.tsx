import {
  ClipboardX,
  Pill,
  TriangleAlert,
  AlarmClockOff,
  HeartPulse,
  Baby,
  Thermometer,
  TrendingDown,
  type LucideIcon,
} from "lucide-react"

const painCards: {
  icon: LucideIcon
  badgeIcon?: LucideIcon
  text: string
}[] = [
  {
    icon: ClipboardX,
    text: "เลือกไม่เหมาะกับอาการหรือความต้องการ",
  },
  {
    icon: Pill,
    badgeIcon: TriangleAlert,
    text: "ยา วิตามิน หรืออาหารเสริมอาจใช้ร่วมกันไม่ได้",
  },
  {
    icon: AlarmClockOff,
    text: "ใช้ผิดวิธีหรือผิดเวลา",
  },
  {
    icon: HeartPulse,
    badgeIcon: Baby,
    text: "ไม่เหมาะกับโรคประจำตัว ช่วงวัย หรือการตั้งครรภ์",
  },
  {
    icon: Thermometer,
    badgeIcon: TrendingDown,
    text: "คุณภาพลดลงจากการเก็บรักษาที่ไม่เหมาะสม",
  },
]

export default function PainAwarenessSection() {
  return (
    <section className="bg-white py-12 lg:py-16">
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
              <div className="relative w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <card.icon className="w-7 h-7 text-blue-700" strokeWidth={1.5} />
                {card.badgeIcon && (
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gold-500 text-white flex items-center justify-center shadow-sm">
                    <card.badgeIcon className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                )}
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
