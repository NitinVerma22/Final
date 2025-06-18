import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import ContactUs from "./components/ContacUs";
import Gallery from "./components/Gallery";
import MobileServices from "./components/MobileServices";
import PortfolioPage from "./portfolio/page";
import Head from 'next/head';
import SEO from "./components/SEO";
export default function Home() {
  return (
    <>
        <Head>
  <title>NQ Designs | Interior, Architecture & Renovation in Lucknow</title>
  <meta name="description" content="Transform your home or office with NQ Designs—Lucknow’s trusted interior and architecture experts." />
  <meta name="keywords" content="Interior design Lucknow, home renovation, architecture firm, furniture design, turnkey projects" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph for Facebook/LinkedIn */}
  <meta property="og:title" content="NQ Designs – Interior & Architecture Experts in Lucknow" />
  <meta property="og:description" content="We design and renovate modern homes, offices, and retail spaces with custom furniture solutions." />
  <meta property="og:url" content="https://nqdesigns.co" />
  <meta property="og:image" content="https://nqdesigns.co/banner.jpg" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="NQ Designs | Interior & Architecture in Lucknow" />
  <meta name="twitter:description" content="Stylish interiors and smart renovations for homes and businesses in Lucknow." />
  <meta name="twitter:image" content="https://nqdesigns.co/banner.jpg" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://nqdesigns.co/" />
</Head>
      <SEO
        title="Top Interior Designer in Lucknow | NQ Designs"
        description="NQ Designs is the best interior design and architecture company in Lucknow. We provide modern home interiors, custom furniture, and turnkey renovation services."
        keywords="interior design Lucknow, interior designer in Lucknow, architecture firm, home renovation, best interior company, modern house design, kitchen interior, furniture design, Lucknow architecture firm"
      />


   <HeroSection/>
    <div className="hidden md:block">
    <Services />
  </div>
  <div className="block md:hidden">
    <MobileServices />
  </div>  
   
   <Gallery/>
   <div id="portfolio">
    <PortfolioPage></PortfolioPage>
   </div>
   <div id="contact">
       <ContactUs></ContactUs>
   </div>
   </>
  );
}
