import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import PhilosophySection from './components/PhilosophySection'
import EcosystemSection from './components/EcosystemSection'
import RutaSection from './components/RutaSection'
import IncludesSection from './components/IncludesSection'
import FounderSection from './components/FounderSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-poppins text-brand-brown antialiased overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <PhilosophySection />
      <EcosystemSection />
      <RutaSection />
      <IncludesSection />
      <FounderSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  )
}
