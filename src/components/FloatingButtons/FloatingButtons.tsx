import React from 'react';
import { Icon } from '../Icon';
import './FloatingButtons.css';

export function FloatingButtons() {
  const [showContactPopup, setShowContactPopup] = React.useState(false);
  const [showButtons, setShowButtons] = React.useState(false);
  const popupRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > 200);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current && 
        !popupRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowContactPopup(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const socialLinks = [
    { 
      icon: "fi-brands-instagram", 
      label: 'Instagram', 
      href: 'https://instagram.com/barbershopace' 
    },
    { 
      icon: "fi-brands-snapchat", 
      label: 'Snapchat', 
      href: 'https://snapchat.com/add/barbershopace' 
    },
    { 
      icon: "fi-brands-whatsapp", 
      label: 'WhatsApp', 
      href: 'https://wa.me/31612345678' 
    },
    { 
      icon: "fi-brands-tik-tok", 
      label: 'TikTok', 
      href: 'https://tiktok.com/@barbershopace' 
    },
  ];

  return (
    <>
      <div className={`floating-buttons ${showButtons ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button
          className="floating-button"
          ref={buttonRef}
          onClick={() => setShowContactPopup(!showContactPopup)}
          aria-label="Contact opties"
        >
          <Icon name="fi-rr-messages" className="w-5 h-5" />
        </button>
        
        <button
          className="floating-button"
          onClick={scrollToTop}
          aria-label="Terug naar boven"
        >
          <Icon name="fi-rr-arrow-up" className="w-5 h-5" />
        </button>
      </div>

      <div 
        ref={popupRef}
        className={`contact-popup ${showContactPopup ? 'show' : ''}`}
           style={{ transform: showButtons ? 'translateY(0)' : 'translateY(20px)' }}
      >
        <h3 className="popup-header">Contact Opties</h3>
        <div className="popup-socials">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <Icon name={social.icon} className="social-icon" />
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}