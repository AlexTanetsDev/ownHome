import Header from './components/Header/Header';
import AboutUsSection from './components/Sections/AboutUsSection';
import BenefitsSection from './components/Sections/BenefitsSection';
import HeroSection from './components/Sections/HeroSection';
import ServiceSection from './components/Sections/ServiceSection';
import TeamSection from './components/Sections/TeamSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F2F2F2]">
      <Header />
      <HeroSection />
      {/* <ServiceSection /> */}
      {/* <AboutUsSection /> */}
      {/* <BenefitsSection /> */}
      <TeamSection />
    </main>
  );
}
