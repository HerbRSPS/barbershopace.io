import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Hero } from '../../components/Hero';
import { About } from '../../components/About';
import { Gallery } from '../../components/Gallery';
import { PriceList } from '../../components/PriceList';
import { Testimonials } from '../../components/Testimonials';
import { Team } from '../../components/Team';
import { Location } from '../../components/Location';
import { Background } from '../../components/Background';
import { AnnouncementBar } from '../../components/AnnouncementBar';
import { FloatingButtons } from '../../components/FloatingButtons';
import { Footer } from '../../components/Footer';
import './Home.css';

export function Home() {
  return (
    <>
      <Background />
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <PriceList />
      <Testimonials />
      <Team />
      <Location />
      <FloatingButtons />
      <Footer />
    </>
  );
}