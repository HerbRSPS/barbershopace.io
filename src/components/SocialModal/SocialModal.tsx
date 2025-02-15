import React from 'react';
import { Icon } from '../Icon';
import './SocialModal.css';

interface SocialModalProps {
  isOpen: boolean;
  onClose: () => void;
  anchorPosition?: { x: number; y: number } | null;
  triggerRef?: React.RefObject<HTMLElement>;
}

export function SocialModal({ isOpen, onClose, anchorPosition, triggerRef }: SocialModalProps) {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState(anchorPosition);
  
  // Close modal on scroll
  React.useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => {
      onClose();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, onClose]);

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

  React.useEffect(() => {
    if (!isOpen || !triggerRef?.current) return;

    const updatePosition = () => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        setPosition({
          x: rect.left + rect.width / 2,
          y: rect.bottom
        });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen, triggerRef]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const style: React.CSSProperties = position
    ? window.innerWidth >= 768 ? {
        position: 'fixed',
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: 'translate(-50%, 12px)',
      } : {}
    : {};

  return (
    <div 
      ref={modalRef}
      className={`social-modal ${isOpen ? 'show' : ''}`}
      style={style}
    >
      <h3 className="modal-header">Contact Opties</h3>
      <div className="modal-socials">
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
  );
}