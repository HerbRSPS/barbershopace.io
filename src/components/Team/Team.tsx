import React from 'react';
import { Icon } from '../Icon';
import './Team.css';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  experience: string;
  specialties: string[];
}

interface TeamCategory {
  rank: 'ace' | 'king' | 'jack';
  title: string;
  description: string;
  members: TeamMember[];
}

export function Team() {
  const [activeSlides, setActiveSlides] = React.useState<Record<string, number>>({});
  const sliderRefs = React.useRef<Record<string, HTMLDivElement | null>>({});
  
  const getRankIcon = (rank: 'ace' | 'king' | 'jack') => {
    switch (rank) {
      case 'ace':
        return "fi-rr-spade";
      case 'king':
        return "fi-rr-diamond";
      case 'jack':
        return "fi-rr-club";
      default:
        return "fi-rr-spade";
    }
  };

  const categories: TeamCategory[] = [
    {
      rank: 'ace',
      title: 'Ace',
      description: 'De meester-barbier en oprichter, met jarenlange ervaring en een passie voor perfectie.',
      members: [
        {
          name: 'Ace',
          title: 'Master Barber & Eigenaar',
          image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070',
          experience: '10+ jaar ervaring',
          specialties: [
            'Signature Haircuts',
            'Premium Beard Styling',
            'Hot Towel Shaves',
            'Hair Design Consultancy'
          ]
        }
      ]
    },
    {
      rank: 'king',
      title: 'Kings',
      description: 'Ervaren barbiers die excelleren in hun vak en de hoogste standaarden handhaven.',
      members: [
        {
          name: 'Michael',
          title: 'Senior Barber',
          image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2074',
          experience: '5+ jaar ervaring',
          specialties: [
            'Classic Fades',
            'Beard Grooming',
            'Traditional Cuts',
            'Facial Treatments'
          ]
        },
        {
          name: 'David',
          title: 'Senior Barber',
          image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=2076',
          experience: '4+ jaar ervaring',
          specialties: [
            'Modern Styles',
            'Precision Fades',
            'Beard Sculpting',
            'Hair Coloring'
          ]
        }
      ]
    },
    {
      rank: 'jack',
      title: 'Jacks',
      description: 'Opkomende talenten die zich ontwikkelen onder begeleiding van onze ervaren barbiers.',
      members: [
        {
          name: 'Thomas',
          title: 'Junior Barber',
          image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=2077',
          experience: '2+ jaar ervaring',
          specialties: [
            'Basic Cuts',
            'Beard Trimming',
            'Hair Washing',
            'Basic Styling'
          ]
        },
        {
          name: 'Lucas',
          title: 'Junior Barber',
          image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2074',
          experience: '1+ jaar ervaring',
          specialties: [
            'Classic Cuts',
            'Basic Fades',
            'Neck Shaving',
            'Hair Care'
          ]
        }
      ]
    }
  ];

  const getIcon = (index: number) => {
    const icons = ["fi-rr-star", "fi-rr-scissors", "fi-rr-trophy"];
    return icons[index % icons.length];
  };
  
  const observerCallback = React.useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Number(entry.target.getAttribute('data-index'));
        setActiveSlides(prev => ({ ...prev, [entry.target.getAttribute('data-category') || '']: index }));
      }
    });
  }, []);

  const setupObservers = React.useCallback(() => {
    categories.forEach(category => {
      if (category.members.length <= 1) return;
      
      const slider = sliderRefs.current[category.rank];
      if (!slider) return;

      const observer = new IntersectionObserver(
        observerCallback,
        {
          root: slider,
          threshold: 0.5,
          rootMargin: '0px'
        }
      );

      const cards = slider.querySelectorAll('.member-card');
      cards.forEach((card) => observer.observe(card));

      return () => observer.disconnect();
    });
  }, [categories, observerCallback]);

  React.useEffect(() => setupObservers(), [setupObservers]);

  return (
    <section className="team-section" id="team">
      <div className="team-container">
        <p className="team-header">Ons Team</p>
        <h2 className="team-title">De Beste Barbiers</h2>
        
        <div className="team-grid">
          {categories.map((category) => (
            <div key={category.rank} className="team-category">
              <div className="category-header">
                <Icon name={getRankIcon(category.rank)} className="card-logo" />
                <h3 className="category-title">{category.title}</h3>
                <Icon name={getRankIcon(category.rank)} className="card-logo" />
              </div>
              <p className="category-description">{category.description}</p>
              
              <div 
                className="member-cards"
                ref={el => sliderRefs.current[category.rank] = el}
              >
                <div className="member-slider">
                {category.members.map((member, memberIndex) => (
                  <div 
                    key={memberIndex} 
                    className={`member-card ${category.rank}`}
                    data-index={memberIndex}
                  >
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.title}`} 
                      className="member-image"
                    />
                    <div className="member-info">
                      <h4 className="member-name">{member.name}</h4>
                      <p className="member-title">{member.title}</p>
                      <div className="member-specialties">
                        {member.specialties.map((specialty, index) => (
                          <div key={index} className="specialty">
                            <Icon name={getIcon(index)} className="specialty-icon" />
                            <span>{specialty}</span>
                          </div>
                        ))}
                      </div>
                      <div className="experience-badge">
                        {member.experience}
                      </div>
                    </div>
                  </div>
                ))}
                </div>
                {category.members.length > 1 && (
                  <div className="slider-dots">
                    {category.members.map((_, index) => (
                      <div
                        key={index}
                        className={`slider-dot ${index === activeSlides[category.rank] ? 'active' : ''}`}
                        onClick={() => {
                          const slider = sliderRefs.current[category.rank];
                          if (slider) {
                            const cards = slider.querySelectorAll('.member-card');
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}