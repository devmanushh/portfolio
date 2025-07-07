// Hero section with Particle background
import React from "react";
import ParticleBg from "./ParticleBg.jsx";
import "./Hero.css";
import profile from "../assets/profile.jpg"; // Place your image in src/assets/profile.jpg

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <ParticleBg />
      <div className="hero-content">
        <img src={profile} alt="Profile" className="hero-profile" />
        <h1>Hi, I'm Soumyaranjan Das</h1>
        <p>A Futuristic Full Stack Developer</p>
        <a href="#projects" className="hero-btn">View My Work</a>
      </div>
    </section>
  );
}