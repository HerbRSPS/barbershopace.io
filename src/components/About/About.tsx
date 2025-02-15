import React from 'react';
import { SocialModal } from '../SocialModal';
import './About.css';

export function About() {
  const [showSocialModal, setShowSocialModal] = React.useState(false);
  const [modalPosition, setModalPosition] = React.useState<{ x: number; y: number } | undefined>();
  const bookButtonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <section className="about-section" id="over-ons">
      <div className="about-container">
        <div className="about-content">
          <div className="about-info">
            <p className="about-header">Over Ons</p>
            <h1 className="about-title">Barbershop Ace</h1>
            <p className="about-mission">
              Toen Ace de poorten van deze barbershop opende, had hij één missie:<br />
              'Ervoor zorgen dat elke klant een betere versie van zichzelf wordt.'
            </p>
            <div className="about-text">
              <p>
                U zult de aandacht voor detail bij Barbershop Ace Harderwijk waarderen.
                Van professionele kapsels van de hoogste kwaliteit en gedenkwaardige
                gesprekken- tot onze legitieme selectie van professionele haar & baard
                producten. We zetten altijd een stapje extra om de koninklijke
                behandeling te uitbreiden.
              </p>
              <p className="mt-4">
                Onze kapper is gespecialiseerd in de beste kapsels en scheerbeurten met
                speciale scheertechnieken.
              </p>
              <p className="mt-4">
                Naast knippen en stylen biedt onze barbier ook scheer- en
                trimbehandelingen aan. Ook kunt u bij onze kapperszaak terecht voor
                advies over uw kapsel. Barbershop Ace is gespecialiseerd in zowel
                haircuts als baarden.
              </p>
            </div>
            <div className="about-cta">
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const button = e.currentTarget;
                  const rect = button.getBoundingClientRect();
                  setModalPosition({
                    x: rect.left + rect.width / 2,
                    y: rect.bottom
                  });
                  setShowSocialModal(true);
                }}
                ref={bookButtonRef}
                className="book-button"
              >
                Boek Een Afspraak
              </a>
            </div>
          </div>
          
          <div className="about-image-section">
            <img 
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
              alt="Barbershop interieur" 
              className="about-image"
            />
            <div className="hours-overlay">
              <h3 className="hours-title">Openings Tijden Alleen<br />Op Afspraak</h3>
              <div className="hours-list">
                <div className="hours-row">
                  <span className="hours-day">Maandag</span>
                  <span className="hours-time">09.00 - 22.00</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Dinsdag</span>
                  <span className="hours-time">09.00 - 22.00</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Woensdag</span>
                  <span className="hours-time">09.00 - 22.30</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Donderdag</span>
                  <span className="hours-time">09.00 - 23.00</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Vrijdag</span>
                  <span className="hours-time">09.00 - 23.00</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Weekend</span>
                  <span className="hours-time">10.00 - 23.00</span>
                </div>
              </div>
            </div>
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