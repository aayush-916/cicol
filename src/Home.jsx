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
import LazyVideo from './componets/LazyVideo'
function Home() {
  return (
    <>
      <Hero/>
      <HighlightsSection/>
      <AboutSection/>
      <ProductsSection/>

      <LazyVideo
  videos={[
    {
      src: "/videos/cico-liv.mp4",
      title: "Cico-Liv – Liver Care Explained",
      description:
        "Learn how Cico-Liv supports liver detox, digestion, and overall wellness.",
    },
    {
      src: "/videos/cico-artho.mp4",
      title: "Cico-Artho – Joint & Bone Care Support",
      description:
        "Learn how Cico-Artho helps relieve joint pain, reduce stiffness, and support long-term bone and muscle health with doctor-recommended ingredients.",
    },
    {
      src: "/videos/cico-vit.mp4",
      title: "Cico-Vit – Daily Multivitamin",
      description:
        "Doctor-recommended multivitamin for energy, immunity, and strength.",
    },
    
    
  ]}
/>

     
      
      <CertificationsSection/>
      <OurSpecialtySection/>
      <WhyChooseUsSection/>
      <PartnerWithUsSection/>
      <InquiryFormSection/>
      
    </>
  )
}

export default Home
