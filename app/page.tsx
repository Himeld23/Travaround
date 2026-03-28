import HeroSlider from "./components/homehero";
import { Aboutsection } from "./components/aboutsection";
import { PopularDestinations } from "./components/populardestinations";
import { PackagesSection } from "./components/packagesection";
import { WhyChooseUs } from "./components/whychooseus";
import { ThailandTomorrowland } from "./components/thailandtomorrowland";
import { Testimonials } from "./components/testimonials";
import { ContactSection } from "./components/contactsection";
import { TomorrowlandBanner } from "./components/tomorrowlandbanner";

export default function Home() {
  return (
    <div>
      <TomorrowlandBanner />
      <HeroSlider />
      <Aboutsection />
      <PopularDestinations />
      <PackagesSection />
      <WhyChooseUs />
      <ThailandTomorrowland />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
