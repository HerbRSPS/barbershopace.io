import React from 'react';
import { Icon } from '../Icon';
import { SocialModal } from '../SocialModal';
import './Navbar.css';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const navbarHeight = 72; // Height of the fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);
  const [showSocialModal, setShowSocialModal] = React.useState(false);
  const [modalPosition, setModalPosition] = React.useState<{ x: number; y: number } | undefined>();
  const bookButtonRef = React.useRef<HTMLButtonElement>(null);
  const lastScrollY = React.useRef(0);

  const SCROLL_THRESHOLD = 100;
  const SHOW_AT_TOP_THRESHOLD = 10;

  const isMobile = React.useCallback(() => window.innerWidth < 768, []);

  const handleScroll = React.useCallback(() => {
    const currentScrollY = window.scrollY;

    if (isMobile()) {
      if (currentScrollY > lastScrollY.current && currentScrollY > SCROLL_THRESHOLD) {
        // Scrolling down - hide navbar
        setIsHidden(true);
      } else if (currentScrollY < SHOW_AT_TOP_THRESHOLD) {
        // Only show navbar when actually at the top
        setIsHidden(false);
      }
    } else {
      // On desktop, always show navbar
      setIsHidden(false);
    }
    lastScrollY.current = currentScrollY;
  }, [isMobile]);

  const handleResize = React.useCallback(() => {
    if (isMobile()) {
      // Only reset position on mobile
      setIsHidden(true);
      setTimeout(() => setIsHidden(false), 50);
    } else {
      setIsHidden(false);
    }
  }, [isMobile]);

  React.useEffect(() => {
    let scrollTicking = false;
    let resizeTicking = false;

    const throttledScroll = () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    };

    const throttledResize = () => {
      if (!resizeTicking) {
        window.requestAnimationFrame(() => {
          handleResize();
          resizeTicking = false;
        });
        resizeTicking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', throttledResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', throttledResize);
    };
  }, [handleScroll, handleResize]);

  const socialLinks = [
    { 
      icon: "fi-brands-instagram", 
      href: 'https://instagram.com/barbershopace', 
      label: 'Instagram' 
    },
    { 
      icon: "fi-brands-snapchat", 
      href: 'https://snapchat.com/add/barbershopace', 
      label: 'Snapchat' 
    },
    { 
      icon: "fi-brands-whatsapp", 
      href: 'https://wa.me/31612345678', 
      label: 'WhatsApp' 
    },
    { 
      icon: "fi-brands-tiktok", 
      href: 'https://tiktok.com/@barbershopace', 
      label: 'TikTok' 
    }
  ];

  return (
    <nav className={`navbar ${isHidden ? 'hidden' : ''}`}>
      <div className="navbar-container">
        <div className="nav-socials">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={social.label}
            >
              <Icon name={social.icon} className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 
            <Icon name="fi-rr-cross" className="w-6 h-6" /> : 
            <Icon name="fi-rr-menu-burger" className="w-6 h-6" />
          }
        </button>

        {/* Navigation links */}
        <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          <button 
            onClick={() => {
              scrollToSection('over-ons');
              setIsOpen(false);
            }} 
            className="nav-link"
          >
            Over Ons
          </button>
          <button 
            onClick={() => {
              scrollToSection('galerij');
              setIsOpen(false);
            }} 
            className="nav-link"
          >
            Galerij
          </button>
          <button 
            onClick={() => {
              scrollToSection('prijzen');
              setIsOpen(false);
            }} 
            className="nav-link"
          >
            Prijzen
          </button>
          <button 
            onClick={() => {
              scrollToSection('team');
              setIsOpen(false);
            }} 
            className="nav-link"
          >
            Team
          </button>
          <button 
            onClick={() => {
              scrollToSection('contact');
              setIsOpen(false);
            }} 
            className="nav-link"
          >
            Contact
          </button>
          
          <button
            ref={bookButtonRef}
            className="nav-link book-now"
            onClick={(e) => {
              const button = bookButtonRef.current;
              if (button) {
                const rect = button.getBoundingClientRect();
                setModalPosition({
                  x: rect.left + rect.width / 2,
                  y: rect.bottom
                });
                setShowSocialModal(true);
              }
              setIsOpen(false);
            }}
          >
            Boek een Afspraak
          </button>
          
          {/* Mobile social links */}
          <div className="mobile-socials md:hidden">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
              >
                <Icon icon={social.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <SocialModal
        isOpen={showSocialModal}
        onClose={() => setShowSocialModal(false)}
        triggerRef={bookButtonRef}
        anchorPosition={modalPosition}
      />
    </nav>
  );
}