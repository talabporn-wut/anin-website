import type { Metadata } from "next"
import { Prompt } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "ANIN Pharmacy | ร้านยามาตรฐาน ศรีราชา",
    template: "%s | ANIN Pharmacy",
  },
  description:
    "ร้านยามาตรฐานที่มีเภสัชกรวิชาชีพประจำทุกสาขา ในอำเภอศรีราชา จังหวัดชลบุรี ยาใช่ ใช้ถูก ปลอดภัย",
  metadataBase: new URL("https://anin.co.th"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={`${prompt.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}