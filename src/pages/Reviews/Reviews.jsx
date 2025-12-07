import order from "../../reviewsPage.json";

import ReviewsSection from '../../components/ReviewsSection/ReviewsSection';
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import ContactSection from "../../components/ContactSection/ContactSection";

export default function Reviews() {

const map = {
  reviews: <ReviewsSection />,
  services: <ServicesSection />,
  contact: <ContactSection />,
};

  return (
    // <div className='testimonials'><ReviewsSection /></div>
  <div className="testimonials">{order.map((key) => map[key])}</div>
  )
}
