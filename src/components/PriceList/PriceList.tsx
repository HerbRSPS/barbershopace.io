import React from 'react';
import { SocialModal } from '../SocialModal';
import './PriceList.css';

interface Service {
  name: string;
  description?: string;
  price: number;
}

interface Category {
  title: string;
  services: Service[];
}

export function PriceList() {
  const [showSocialModal, setShowSocialModal] = React.useState(false);
  const [modalPosition, setModalPosition] = React.useState<{ x: number; y: number } | undefined>();
  const bookButtonRef = React.useRef<HTMLButtonElement>(null);

  const categories: Category[] = [
    {
      title: 'Basis Diensten',
      services: [
        { name: 'Haar', description: 'Professionele knipbeurt inclusief styling', price: 27 },
        { name: 'Baard', description: 'Baard trimmen en vormgeven', price: 27 },
        { name: 'Haar & Baard (Combi)', description: 'Complete verzorging voor haar en baard', price: 44 },
        { name: 'Kinderen van 6 tot 12', description: 'Speciale knipbeurt voor kinderen', price: 29 },
      ]
    },
    {
      title: 'Speciale Behandelingen',
      services: [
        { name: 'Italian Hot Towel Shave', description: 'Luxe scheerbehandeling met warme handdoek', price: 30 },
        { name: 'Facial Treatment Quick Glow', description: 'Snelle gezichtsbehandeling voor een frisse uitstraling', price: 30 },
        { name: 'Waxen', description: 'Precisie waxbehandeling', price: 10 },
      ]
    },
    {
      title: 'Combinatie Pakketten',
      services: [
        { name: 'Haar & Facial Treatment Quick Glow', description: 'Complete behandeling voor haar en gezicht', price: 52 },
        { name: 'Baard & Facial Treatment Quick Glow', description: 'Luxe baard- en gezichtsverzorging', price: 52 },
        { name: 'Haar & Baard & Facial Treatment Quick Glow', description: 'Complete verzorging van top tot teen', price: 64 },
        { name: 'All In V.I.P Exclusive Treatment', description: 'De ultieme verzorgingservaring', price: 70 },
      ]
    },
    {
      title: 'Contouren',
      services: [
        { name: 'Contouren Haar', description: 'Precisie contourbehandeling voor het haar', price: 17 },
        { name: 'Contouren Baard', description: 'Precisie contourbehandeling voor de baard', price: 17 },
        { name: 'Contouren Haar & Baard (Combi)', description: 'Complete contourbehandeling', price: 25 },
      ]
    }
  ];

  return (
    <section className="price-section" id="prijzen">
      <div className="price-container">
        <p className="price-header">Prijslijst</p>
        <h2 className="price-title">Onze Diensten</h2>
        
        <div className="price-grid">
          {categories.map((category, index) => (
            <div key={index} className="price-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="price-list">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="price-item">
                    <div className="service-info">
                      <div className="service-name">{service.name}</div>
                      {service.description && (
                        <div className="service-description">{service.description}</div>
                      )}
                    </div>
                    <div className="service-price">€{service.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="book-container">
          <p className="book-text">
            Klaar om je afspraak te maken? Boek nu online of neem contact met ons op.
          </p>
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
        <SocialModal
          isOpen={showSocialModal}
          onClose={() => setShowSocialModal(false)}
          triggerRef={bookButtonRef}
          anchorPosition={modalPosition}
        />
      </div>
    </section>
  );
}