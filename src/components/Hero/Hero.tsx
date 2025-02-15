import React from 'react';
import { Button } from '../Button';
import { SocialModal } from '../SocialModal';
import './Hero.css';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const navbarHeight = 72;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export function Hero() {
  const [showSocialModal, setShowSocialModal] = React.useState(false);
  const [modalPosition, setModalPosition] = React.useState<{ x: number; y: number } | undefined>();
  const bookButtonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <img 
            src="https://i.imgur.com/6YN7BQ4.png" 
            alt="Barbershop Ace Logo" 
            className="hero-logo"
          />
          <h1 className="hero-title">
            Premium Verzorging<br />
            <span className="hero-subtitle">Voor De Moderne Heer</span>
          </h1>
          <p className="hero-description">
            Ervaar de beste kappersdiensten in Harderwijk. Traditionele technieken ontmoeten moderne stijl.
          </p>
          <div className="hero-buttons">
            <Button 
              variant="primary"
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
              }}
              ref={bookButtonRef}
            >
              Boek een Afspraak
            </Button>
            <Button 
              variant="secondary"
              onClick={() => scrollToSection('prijzen')}
            >
              Bekijk Diensten
            </Button>
          </div>
        </div>
      </div>
      <SocialModal
        isOpen={showSocialModal}
        onClose={() => setShowSocialModal(false)}
        triggerRef={bookButtonRef}
        anchorPosition={modalPosition}
      />
    </section>
  );
}