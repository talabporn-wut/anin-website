import HeroSection          from "@/components/sections/HeroSection"
import PainAwarenessSection from "@/components/sections/PainAwarenessSection"
import WhyPharmacistSection from "@/components/sections/WhyPharmacistSection"
import WhyANINSection       from "@/components/sections/WhyANINSection"
import SocialProofSection   from "@/components/sections/SocialProofSection"
import GlobalCTA            from "@/components/shared/GlobalCTA"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PainAwarenessSection />
      <WhyPharmacistSection />
      <WhyANINSection />
      <SocialProofSection />
      <GlobalCTA />
    </>
  )
}