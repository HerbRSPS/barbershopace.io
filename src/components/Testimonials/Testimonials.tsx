import React from 'react';
import './Testimonials.css';

interface Testimonial {
  quote: string;
  author: string;
  date: string;
}

export function Testimonials() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      quote: "Ace is een echte vakman. Hij neemt de tijd voor je en zorgt ervoor dat je kapsel perfect in orde is. De sfeer is ontspannen en je voelt je er meteen thuis.",
      author: "Mohammed K.",
      date: "Maart 2024"
    },
    {
      quote: "Eindelijk een barbier die precies begrijpt wat ik wil! De aandacht voor detail is ongeëvenaard. Mijn vaste kapper voor het leven gevonden.",
      author: "Thomas B.",
      date: "Februari 2024"
    },
    {
      quote: "De beste barbershop in Harderwijk! Ace is niet alleen een uitstekende kapper, maar ook een geweldige gastheer. Elke keer weer een top ervaring.",
      author: "Lars V.",
      date: "Januari 2024"
    },
    {
      quote: "Professioneel, vriendelijk en altijd up-to-date met de laatste trends. De hot towel shave is een absolute aanrader!",
      author: "Daan M.",
      date: "December 2023"
    },
    {
      quote: "Perfecte service en resultaat. De prijzen zijn meer dan redelijk voor de kwaliteit die je krijgt. Een echte aanwinst voor Harderwijk.",
      author: "Robin H.",
      date: "November 2023"
    }
  ];

  React.useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveSlide(index);
          }
        });
      },
      {
        root: slider,
        threshold: 0.5,
        rootMargin: '0px'
      }
    );

    const cards = slider.querySelectorAll('.testimonial-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials-section" id="reviews">
      <div className="testimonials-container">
        <p className="testimonials-header">Reviews</p>
        <h2 className="testimonials-title">Wat Onze Klanten Zeggen</h2>
        
        <div className="testimonials-slider" ref={sliderRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card" data-index={index}>
              <div className="testimonial-quote">
                <span className="quote-mark">"</span>
                {testimonial.quote}
              </div>
              <div className="testimonial-author">{testimonial.author}</div>
              <div className="testimonial-date">{testimonial.date}</div>
            </div>
          ))}
        </div>
        
        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`slider-dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => {
                const slider = sliderRef.current;
                if (slider) {
                  const cards = slider.querySelectorAll('.testimonial-card');
                  cards[index].scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest'
                  });
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}