import AdvantagesSection from "./components/AdvantagesSection";
import Section1 from "./components/Herosection";
import MarketSection from "./components/MarketSection";
import ProductSection from "./components/ProductSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

const Page = () =>{
  return (
    <>
    <Section1 />
    <ProductSection />
    <AdvantagesSection />
    <MarketSection />
    <AboutSection />
    <ContactSection />
    </>
  )
}

export default Page;