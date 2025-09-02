import CTASection from "../sections/CTASection"
import EventTypeSection from "../sections/EventTypeSection"
import HeroSection from "../sections/HeroSection"
import ServiceSection from "../sections/ServiceSection"


const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <EventTypeSection />
      <CTASection />
    </div>
  )
}

export default Home