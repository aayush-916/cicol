import './App.css'
import AboutSection from './componets/AboutSection'
import CertificationsSection from './componets/CertificationsSection'
import Hero from './componets/Hero'
import HighlightsSection from './componets/HighlightsSection'
import InquiryFormSection from './componets/InquiryFormSection'
import OurSpecialtySection from './componets/OurSpecialtySection'
import PartnerWithUsSection from './componets/PartnerWithUsSection'
import ProductsSection from './componets/ProductsSection'
import WhyChooseUsSection from './componets/WhyChooseUsSection'
function Home() {
  return (
    <>
      <Hero/>
      <HighlightsSection/>
      <AboutSection/>
      <ProductsSection/>
      
      <CertificationsSection/>
      <OurSpecialtySection/>
      <WhyChooseUsSection/>
      <PartnerWithUsSection/>
      <InquiryFormSection/>
      
    </>
  )
}

export default Home
