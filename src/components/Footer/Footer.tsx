import React from 'react';
import { Icon } from '../Icon';
import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <img 
            src="https://i.imgur.com/6YN7BQ4.png" 
            alt="Barbershop Ace Logo" 
            className="footer-logo"
          />
          
          <p className="footer-motto">
            Premium Verzorging Voor De Moderne Heer
          </p>
          
          <div className="footer-socials">
            <a 
              href="https://instagram.com/barbershopace"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Volg ons op Instagram"
            >
              <Icon name="fi-brands-instagram" className="social-icon" />
            </a>
            
            <a 
              href="https://snapchat.com/add/barbershopace"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Volg ons op Snapchat"
            >
              <Icon name="fi-brands-snapchat" className="social-icon" />
            </a>
            
            <a 
              href="https://wa.me/31612345678"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Stuur ons een bericht op WhatsApp"
            >
              <Icon name="fi-brands-whatsapp" className="social-icon" />
            </a>
            
            <a 
              href="https://tiktok.com/@barbershopace"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Volg ons op TikTok"
            >
              <Icon name="fi-brands-tik-tok" className="social-icon" />
            </a>
          </div>
          
          <p className="footer-copyright">
            © {currentYear} Barbershop Ace. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}