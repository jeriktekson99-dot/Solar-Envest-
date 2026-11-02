import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import PortfolioDetailsPage from './components/PortfolioDetailsPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfUsePage from './components/TermsOfUsePage';
import SafetyCompliancePage from './components/SafetyCompliancePage';
import AdminLoginPage from './components/AdminLoginPage';
import GetQuotationPage from './components/GetQuotationPage';
import Hero from './components/Hero';
import PartnerLogoMarquee from './components/PartnerLogoMarquee';
import ProblemSolution from './components/ProblemSolution';
import AboutCompany from './components/AboutCompany';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';
import { DataProvider, useOptionalSolareignData } from './context/DataContext';

function AppContent() {
  // Default to 'home' page so the updated hero section is immediately visible

  const [activePage, setActivePage] = useState<string>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('proj-1');
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHomeMultiform = () => {
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const formContainer = document.getElementById('hero-quote-container') || document.getElementById('home');
        if (formContainer) {
          formContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        const nameInput = document.getElementById('quote-fullname-input') as HTMLInputElement | null;
        if (nameInput) {
          nameInput.focus();
        }
      }, 100);
    } else {
      const formContainer = document.getElementById('hero-quote-container') || document.getElementById('home');
      if (formContainer) {
        formContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      const nameInput = document.getElementById('quote-fullname-input') as HTMLInputElement | null;
      if (nameInput) {
        nameInput.focus();
      }
    }
  };

  const handleNavigate = (pageId: string) => {
    if (pageId === 'quotation') {
      setActivePage('quotation');
    } else if (pageId === 'home') {
      setActivePage('home');
    }
  };

  // Dedicated Admin Portal Screen - locked as it is outside Home and Quotation
  if (activePage === 'admin') {
    return (
      <div 
        className="pointer-events-none select-none relative"
        onClickCapture={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <AdminLoginPage 
          onBackToHome={() => handleNavigate('home')} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#4A86C6]/30 selection:text-[#061424]">
      {/* Sticky Header & Navigation Bar with Active Indicator State & Free Consultation CTA */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onConsultationClick={scrollToHomeMultiform}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activePage === 'quotation' ? (
          <GetQuotationPage
            onBackToHome={() => handleNavigate('home')}
          />
        ) : activePage === 'privacy' ? (
          <div className="pointer-events-none select-none relative" onClickCapture={(e) => { e.preventDefault(); e.stopPropagation(); }}>
            <PrivacyPolicyPage
              onBackToHome={() => handleNavigate('home')}
              onConsultationClick={scrollToContact}
            />
          </div>
        ) : activePage === 'terms' ? (
          <div className="pointer-events-none select-none relative" onClickCapture={(e) => { e.preventDefault(); e.stopPropagation(); }}>
            <TermsOfUsePage
              onBackToHome={() => handleNavigate('home')}
              onConsultationClick={scrollToContact}
            />
          </div>
        ) : activePage === 'safety' ? (
          <div className="pointer-events-none select-none relative" onClickCapture={(e) => { e.preventDefault(); e.stopPropagation(); }}>
            <SafetyCompliancePage
              onBackToHome={() => handleNavigate('home')}
              onConsultationClick={scrollToContact}
            />
          </div>
        ) : activePage === 'portfolio-details' ? (
          <div className="pointer-events-none select-none relative" onClickCapture={(e) => { e.preventDefault(); e.stopPropagation(); }}>
            {/* The Dedicated Solareign "Portfolio Details" Case Study Page */}
            <PortfolioDetailsPage
              projectId={selectedProjectId}
              onBackToPortfolio={() => {}}
              onConsultationClick={() => {}}
            />

            {/* Lead Generation / Consultation Form */}
            <ContactCTA
              selectedServicePreset={selectedServicePreset}
              onGetStarted={() => {}}
            />
          </div>
        ) : activePage === 'portfolio' ? (
          <div className="pointer-events-none select-none relative" onClickCapture={(e) => { e.preventDefault(); e.stopPropagation(); }}>
            {/* The Dedicated Solareign "Portfolio" Page */}
            <PortfolioPage
              onConsultationClick={() => {}}
              onSelectProject={() => {}}
            />

            {/* Lead Generation / Consultation Form */}
            <ContactCTA
              selectedServicePreset={selectedServicePreset}
              onGetStarted={() => {}}
            />
          </div>
        ) : activePage === 'services' ? (
          <div className="pointer-events-none select-none relative" onClickCapture={(e) => { e.preventDefault(); e.stopPropagation(); }}>
            {/* The Dedicated Solareign "Services" Page */}
            <ServicesPage
              onConsultationClick={() => {}}
            />

            {/* Lead Generation / Consultation Form */}
            <ContactCTA
              selectedServicePreset={selectedServicePreset}
              onGetStarted={() => {}}
            />
          </div>
        ) : activePage === 'about' ? (
          <div className="pointer-events-none select-none relative" onClickCapture={(e) => { e.preventDefault(); e.stopPropagation(); }}>
            {/* The Dedicated Solareign "About Us" Page */}
            <AboutPage
              onConsultationClick={() => {}}
              onNavigateServices={() => {}}
            />

            {/* Lead Generation / Consultation Form */}
            <ContactCTA
              selectedServicePreset={selectedServicePreset}
              onExploreServices={() => {}}
              onGetStarted={() => {}}
            />
          </div>
        ) : (
          <>
            {/* Home Landing Page */}
            <Hero
              onContactClick={scrollToContact}
              onExploreClick={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            {/* Dedicated Light-Gray Authorized Tier-1 Technology Integration Partners Logo Marquee */}
            <PartnerLogoMarquee />
            <ProblemSolution />
            <AboutCompany onLearnMoreClick={() => {}} />
            <Services
              onSelectService={() => {}}
              onExploreMore={() => {}}
            />
            <Portfolio
              onSelectProject={() => {}}
            />
            <WhyChooseUs onConsultClick={scrollToContact} />
            <Testimonials />
            <ContactCTA
              selectedServicePreset={selectedServicePreset}
              onExploreServices={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onGetStarted={scrollToHomeMultiform}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onGetQuotation={scrollToHomeMultiform} />

      {/* Floating Chatbot Widget */}
      <ChatbotWidget
        onOpenQuotation={scrollToContact}
        onNavigateServices={() => {}}
      />
    </div>
  );
}

export default function App() {
  const existingContext = useOptionalSolareignData();
  if (!existingContext) {
    return (
      <DataProvider>
        <AppContent />
      </DataProvider>
    );
  }
  return <AppContent />;
}

