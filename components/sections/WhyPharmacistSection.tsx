import { ClipboardList, Heart, Pill, Leaf, HeartHandshake, Users, Wallet } from "lucide-react"

const factors = [
  { icon: ClipboardList, label: "อาการและความต้องการ" },
  { icon: Heart, label: "โรคประจำตัว" },
  { icon: Pill, label: "ยาที่ใช้อยู่" },
  { icon: Leaf, label: "วิตามินหรืออาหารเสริมที่รับประทาน" },
  { icon: HeartHandshake, label: "การตั้งครรภ์หรือให้นมบุตร" },
  { icon: Users, label: "ช่วงวัย" },
  { icon: Wallet, label: "งบประมาณ" },
]

export default function WhyPharmacistSection() {
  return (
    <section className="bg-surface-alt py-16 lg:py-20">
      <div className="container-anin">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-[1.75rem] font-bold text-blue-900">
            เภสัชกร ANIN ประเมินข้อมูลสุขภาพก่อนแนะนำ
          </h2>
          <p className="mt-2 text-base text-neutral-500">
            จึงช่วยลดความเสี่ยง พร้อมเพิ่มประสิทธิภาพของการรักษาให้ดียิ่งขึ้นได้
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {factors.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full bg-white border border-border shadow-xs flex items-center justify-center">
                <f.icon className="w-6 h-6 text-blue-700" />
              </div>
              <p className="text-[0.75rem] text-neutral-500 leading-tight">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}