import type { Metadata } from "next"
import KeystaticApp from "./keystatic"

export const metadata: Metadata = {
  title: "จัดการบทความ",
  robots: { index: false, follow: false },
}

// The root layout renders the site Header/Footer around every route.
// This fixed full-screen wrapper keeps the admin UI on top of them,
// so the root layout does not need to change.
export default function KeystaticLayout() {
  return (
    <div className="fixed inset-0 z-[100] overflow-auto bg-white">
      <KeystaticApp />
    </div>
  )
}
