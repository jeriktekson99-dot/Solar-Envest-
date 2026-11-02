import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import SolareignLogo from './SolareignLogo';

interface NavbarProps {
  activePage?: string;
  onNavigate?: (page: string) => void;
  onConsultationClick?: () => void;
}

export default function Navbar({ 
  activePage = 'about', 
  onNavigate, 
  onConsultationClick 
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home', isLocked: false },
    { label: 'About', id: 'about', isLocked: true },
    { label: 'Services', id: 'services', isLocked: true },
    { label: 'Portfolio', id: 'portfolio', isLocked: true },
  ];

  const handleLinkClick = (e: MouseEvent, id: string) => {
    e.preventDefault();
    if (id !== 'home' && id !== 'quotation') {
      // Locked: all other pages and sections outside Home and Get a Quotation trigger no action
      return;
    }
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    }
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-white/85 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: SolarEnVest Logo */}
          <div className="flex-1 flex items-center justify-start">
            <button
              onClick={(e) => handleLinkClick(e, 'home')}
              id="brand-logo-link"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A86C6] rounded-lg text-left cursor-pointer"
            >
              <SolareignLogo />
            </button>
          </div>

          {/* Middle: Navigation links (Only Home & Quotation active; other links locked) */}
          <nav
            id="desktop-nav-menu"
            aria-label="Main Navigation"
            className="hidden md:flex items-center justify-center gap-8 lg:gap-10 shrink-0"
          >
            {navLinks.map((link) => {
              const isActive = 
                activePage.toLowerCase() === link.id || 
                (link.id === 'portfolio' && activePage.toLowerCase() === 'portfolio-details');
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  aria-disabled={link.isLocked}
                  className={`text-sm tracking-tight transition-all duration-200 relative py-2 font-bold whitespace-nowrap ${
                    link.isLocked ? 'cursor-default' : 'cursor-pointer'
                  } ${
                    isActive
                      ? 'text-[#4A86C6]'
                      : 'text-slate-600 hover:text-[#4A86C6]'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Active indicator state */}
                  {isActive ? (
                    <span 
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4A86C6] rounded-full" 
                    />
                  ) : !link.isLocked ? (
                    <span 
                      aria-hidden="true"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#4A86C6] rounded-full transition-all duration-200 hover:w-full" 
                    />
                  ) : null}
                </button>
              );
            })}
          </nav>

          {/* Right: Get A Quotation button (Secondary Growth Green #0A8A4B CTA) & Mobile menu toggle */}
          <div className="flex-1 flex items-center justify-end gap-3">
            <button
              type="button"
              id="nav-get-quotation-btn"
              onClick={(e) => handleLinkClick(e, 'quotation')}
              className={`hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-black transition-colors duration-150 cursor-pointer select-none text-white ${
                activePage.toLowerCase() === 'quotation'
                  ? 'bg-[#0A8A4B] ring-2 ring-[#4A86C6]/40 shadow-md'
                  : 'bg-[#0A8A4B] hover:bg-[#08733e] active:bg-[#065e32] shadow-xs'
              }`}
            >
              Get A Quotation
            </button>

            {/* Mobile menu toggle */}
            <div className="md:hidden flex items-center">
              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-[#4A86C6] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#4A86C6]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-panel"
            className="md:hidden pt-4 pb-3 border-t border-slate-100 mt-3 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {navLinks.map((link) => {
              const isActive = 
                activePage.toLowerCase() === link.id || 
                (link.id === 'portfolio' && activePage.toLowerCase() === 'portfolio-details');
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  aria-disabled={link.isLocked}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold text-left transition-all ${
                    link.isLocked ? 'cursor-default' : 'cursor-pointer'
                  } ${
                    isActive
                      ? 'border-2 border-[#4A86C6] bg-[#4A86C6]/10 text-[#4A86C6] shadow-xs'
                      : 'border-2 border-transparent text-slate-700 hover:text-[#4A86C6] hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
            <div className="pt-2 px-1">
              <button
                type="button"
                id="mobile-nav-get-quotation-btn"
                onClick={(e) => handleLinkClick(e, 'quotation')}
                className={`w-full py-3 px-4 rounded-xl text-center text-sm font-black transition-colors duration-150 cursor-pointer text-white ${
                  activePage.toLowerCase() === 'quotation'
                    ? 'bg-[#0A8A4B] ring-2 ring-[#4A86C6]/40 shadow-md'
                    : 'bg-[#0A8A4B] hover:bg-[#08733e] active:bg-[#065e32] shadow-xs'
                }`}
              >
                Get A Quotation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
