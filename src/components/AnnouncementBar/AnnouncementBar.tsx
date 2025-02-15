import React from 'react';
import './AnnouncementBar.css';

const announcements = [
  '30% korting op behandeling bij het meebrengen van een nieuwe klant!',
  'Boek nu online en ontvang gratis een professionele haarverzorgingsproduct!',
  'Speciale studentenkorting: 15% op vertoon van je studentenpas!',
  'Vader & zoon combo: 20% korting op beide behandelingen!',
];

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % announcements.length);
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="announcement-bar">
      <div className="announcement-container">
        <div className="announcement-content">
          {announcements.map((message, index) => (
            <div
              key={index}
              className={`announcement-message ${
                index === currentIndex ? 'active' : 'inactive'
              }`}
              aria-hidden={index !== currentIndex}
            >
              {message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}