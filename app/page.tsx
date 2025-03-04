import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TrialLessonSection from "@/components/trial-lesson-section"
import WhyLearnEnglishSection from "@/components/why-learn-section"
import ClassOptionsSection from "@/components/class-options-section"
import AboutMeSection from "@/components/about-me-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-blue-50">
      <Header />
      <div className="flex flex-col lg:flex-row">
        <div className="flex-grow">
          <HeroSection />
          <TrialLessonSection />
          <WhyLearnEnglishSection />
          <ClassOptionsSection />
          <AboutMeSection />
          <WhyChooseUsSection />
        </div>
        <Navbar />
      </div>
    </main>
  )
}

