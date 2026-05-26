
import Hero from '../components/Home/Hero';
import QuoteBlock from '../components/Home/QuoteBlock';
import AboutPreview from '../components/Home/AboutPreview';
import ServicesGrid from '../components/Home/ServicesGrid';
import NavigationShowcase from '../components/Home/NavigationShowcase';
import AutomationSystems from '../components/Home/AutomationSystems';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import IndustriesWeSupport from '../components/Home/IndustriesWeSupport';
import BrandsScroll from '../components/Home/BrandsScroll';
import GlobalSupportCTA from '../components/Home/GlobalSupportCTA';
import StatsHighlights from '../components/Home/StatsHighlights';

const Home = () => {
  return (
    <div>
      <Hero />
      
      <AboutPreview />
      <StatsHighlights />
      
      <ServicesGrid />
      <NavigationShowcase />
      <QuoteBlock />
      <BrandsScroll />
      <AutomationSystems />
      <WhyChooseUs />
      <IndustriesWeSupport />
      
      <GlobalSupportCTA />
    </div>
  );
};

export default Home;
