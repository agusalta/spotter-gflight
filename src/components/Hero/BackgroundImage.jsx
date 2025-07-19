import React from "react";
import "./Hero.css";

const BackgroundImage = ({ imageUrl }) => (
  <div className="hero-background">
    <img
      src={imageUrl}
      alt="Hero background"
      className="hero-background-img"
      draggable={false}
    />
  </div>
);

export default BackgroundImage; 