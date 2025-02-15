import React from 'react';
import { Icon } from '../Icon';
import './Location.css';

export function Location() {
  const address = encodeURIComponent('Johanniterlaan 4, 3841 DT Harderwijk');

  return (
    <section className="location-section" id="contact">
      <div className="location-container">
        <p className="location-header">Locatie</p>
        <h2 className="location-title">Vind Ons</h2>
        
        <div className="location-content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4874.754526152388!2d5.621677976939376!3d52.345442549138276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c633d00da4f88b%3A0x83347a1ee23e5716!2sJohanniterlaan%204%2C%203841%20DT%20Harderwijk!5e0!3m2!1sen!2snl!4v1739612851329!5m2!1sen!2snl"
            className="map-container"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          
          <div className="info-container">
            <div className="info-grid">
              <div className="contact-section">
                <div className="info-item full-width">
                  <Icon name="fi-rr-marker" className="info-icon" />
                  <div className="info-content">
                    <h3 className="info-label">Adres</h3>
                    <p className="info-text">
                      Johanniterlaan 4<br />
                      3841 DT Harderwijk
                    </p>
                  </div>
                </div>

                <div className="info-item full-width">
                  <Icon name="fi-rr-clock" className="info-icon" />
                  <div className="info-content">
                    <h3 className="info-label">Openingstijden</h3>
                    <p className="info-text">
                      Maandag - Vrijdag: 09:00 - 22:00<br />
                      Weekend: 10:00 - 23:00<br />
                      <span className="text-barber-gold/80 text-sm italic">
                        (Alleen op afspraak)
                      </span>
                    </p>
                  </div>
                </div>

                <div className="info-item full-width">
                  <Icon name="fi-rr-phone-call" className="info-icon" />
                  <div className="info-content">
                    <h3 className="info-label">Bel Direct</h3>
                    <p className="info-text">
                      <a 
                        href="tel:+31612345678" 
                        className="hover:text-barber-gold transition-colors flex items-center gap-2"
                      >
                        +31 6 12345678
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="socials-section">
                <a
                  href="https://instagram.com/barbershopace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-item"
                >
                  <Icon name="fi-brands-instagram" className="info-icon" />
                  <div className="info-content">
                    <h3 className="info-label">Instagram</h3>
                    <p className="info-text hover:text-barber-gold transition-colors flex items-center gap-2">
                      @barbershopace
                    </p>
                  </div>
                </a>

                <a
                  href="https://snapchat.com/add/barbershopace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-item"
                >
                  <Icon name="fi-brands-snapchat" className="info-icon" />
                  <div className="info-content">
                    <h3 className="info-label">Snapchat</h3>
                    <p className="info-text hover:text-barber-gold transition-colors flex items-center gap-2">
                      @barbershopace
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/31612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-item"
                >
                  <Icon name="fi-brands-whatsapp" className="info-icon" />
                  <div className="info-content">
                    <h3 className="info-label">WhatsApp</h3>
                    <p className="info-text hover:text-barber-gold transition-colors flex items-center gap-2">
                      Stuur een bericht
                    </p>
                  </div>
                </a>

                <a
                  href="https://tiktok.com/@barbershopace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-item"
                >
                  <Icon name="fi-brands-tik-tok" className="info-icon" />
                  <div className="info-content">
                    <h3 className="info-label">TikTok</h3>
                    <p className="info-text hover:text-barber-gold transition-colors flex items-center gap-2">
                      @barbershopace
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="directions-button"
            >
              <Icon name="fi-rr-navigation" className="w-5 h-5" />
              Route Plannen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}