
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlatformShowcase from "@/components/PlatformShowcase";
import HospitalFeatures from "@/components/HospitalFeatures";
import DoctorFeatures from "@/components/DoctorFeatures";
import PatientFeatures from "@/components/PatientFeatures";
import InnovativeFeatures from "@/components/InnovativeFeatures";
import AppMockups from "@/components/AppMockups";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import LanguageSelector from "@/components/LanguageSelector";
import Chatbot from "@/components/Chatbot";
import AmbulanceDashboardSection from "@/components/AmbulanceDashboardSection";
import PharmacyDashboardSection from "@/components/PharmacyDashboardSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PlatformShowcase />
        <HospitalFeatures />
        <DoctorFeatures />
        <PatientFeatures />
        <AmbulanceDashboardSection />
        <PharmacyDashboardSection />
        <InnovativeFeatures />
        <AppMockups />
        <CallToAction />
      </main>
      <Footer />
      <LanguageSelector />
      <Chatbot />
    </div>
  );
};

export default Index;
