import React from 'react';
import { Play } from 'lucide-react';
import './Gallery.css';
import { Button } from '../Button';

export function Gallery() {
  const videos = [
    {
      id: '1',
      url: 'https://cdn.coverr.co/videos/coverr-barber-cutting-hair-2399/preview/coverr-barber-cutting-hair-2399-preview.mp4',
      title: 'Classic Fade Haircut'
    },
    {
      id: '2',
      url: 'https://cdn.coverr.co/videos/coverr-barber-trimming-beard-2401/preview/coverr-barber-trimming-beard-2401-preview.mp4',
      title: 'Beard Trimming'
    },
    {
      id: '3',
      url: 'https://cdn.coverr.co/videos/coverr-barber-shop-2398/preview/coverr-barber-shop-2398-preview.mp4',
      title: 'Hot Towel Shave'
    },
  ];

  const handleVideoClick = React.useCallback((videoElement: HTMLVideoElement) => {
    if (videoElement.paused) {
      videoElement.play().catch(error => {
        console.error('Error playing video:', error);
      });
    } else {
      videoElement.pause();
    }
  }, []);

  return (
    <section className="gallery-section" id="galerij">
      <div className="gallery-container">
        <p className="gallery-header">Galerij</p>
        <h2 className="gallery-title">Onze Beste Werk</h2>
        
        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-item">
              <video
                preload="metadata"
                src={video.url}
                title={video.title}
                loop
                muted
                poster={`https://source.unsplash.com/800x450/?barbershop,haircut-${video.id}`}
                playsInline
                onClick={(e) => handleVideoClick(e.currentTarget)}
              >
                <source src={video.url} type="video/mp4" />
                <img 
                  src={`https://source.unsplash.com/800x450/?barbershop,haircut-${video.id}`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </video>
              <div 
                className="video-overlay"
                onClick={(e) => {
                  const video = e.currentTarget.previousElementSibling as HTMLVideoElement;
                  handleVideoClick(video);
                }}
              >
                <Play className="play-button" />
              </div>
            </div>
          ))}
        </div>
        <div className="see-more-container">
          <Button variant="primary">Bekijk Meer Videos</Button>
        </div>
      </div>
    </section>
  );
}