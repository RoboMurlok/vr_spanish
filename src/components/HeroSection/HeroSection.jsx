import React from "react";
import "./HeroSection.css";
import { getUniqueImages } from "../../db/images";
import { seed } from "../../../seed";

export default function HeroSection() {
  const image = getUniqueImages(seed, 5);

  return (
    <section id="hero" className="hero section container">
      <div className="hero-text">
        <h1 className="hero-title">
          Consultoría financiera para un futuro estable
        </h1>
        <p className="section-sub">
          Ayudamos a organizar las finanzas, optimizar gastos y aumentar la
          estabilidad financiera.
        </p>
        <div className="hero-actions">
          <a href="#services" className="hero-btn hero-btn-primary">
            Nuestros servicios
          </a>
          <a href="#contact" className="hero-btn hero-btn-secondary">
            Consulta
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-img-placeholder">
          <img src={image} alt="hero" />
        </div>
      </div>
    </section>
  );
}
