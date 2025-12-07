import order from "../../homePage.json";

import HeroSection from "../../components/HeroSection/HeroSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import WhySection from "../../components/WhySection/WhySection";
import WorkSection from "../../components/WorkSection/WorkSection";
import ContactSection from "../../components/ContactSection/ContactSection";

const map = {
  hero: <HeroSection />,
  services: <ServicesSection />,
  why: <WhySection />,
  work: <WorkSection />,
  contact: <ContactSection />,
};

export default function Home() {
  return <div className="hero">{order.map((key) => map[key])}</div>;
}
