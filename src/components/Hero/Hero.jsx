import React from "react";
import "./Hero.css";
import { useDarkMode } from '../../context/DarkModeContext';
import BackgroundImage from "./BackgroundImage";
import HeroTitle from "./HeroTitle";
import FlightSearchBar from "./FlightSearchBar";

const Hero = () => {
  const { resolvedMode } = useDarkMode();
  const imageToShow = resolvedMode === 'dark'
    ? 'https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_dark_theme_4.svg'
    : 'https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg';

  return (
    <section className="hero-section">
      <BackgroundImage imageUrl={imageToShow} />
      <HeroTitle text="Flights" />
      <FlightSearchBar/>
    </section>
  );
};

export default Hero; 