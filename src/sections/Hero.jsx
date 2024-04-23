import React, { useEffect } from "react";
import Model from "./Model";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-bold-line--inner",
      { translateY: "-100%" },
      { translateY: 0, delay: 3.5, duration: 0.8 }
    );
    gsap.fromTo(
      ".link-tab",
      { opacity: 0 },
      { opacity: 1, delay: 4, duration: 0.8 }
    );
  }, []);

  return (
    <div id="heroStart" className="hero-top">
      <div className="anim-fixed-wrapper">
        <div className="mobile-hide-wrapper">
          <div className="wrapper-svg">
            <Model />
          </div>
        </div>
      </div>
      <div className="hero-top-wrapper">
        <div className="hero-bold-line-wrapper-2">
          <div className="bold-section-line white small"></div>
        </div>
        <div className="hero-bold-line-wrapper">
          <div className="hero-bold-line--inner"></div>
        </div>
      </div>
      <div className="link-tab">
        <ul className="list-link">
          <li className="content-wrapper">
            <p>AI Modernism of Kharkiv [Ukraine]</p>
          </li>
          <li className="content-wrapper">
            <div className="nav-links-wrapper">
              <a href="#">Index</a>
              <div>/</div>
              <a href="#">Experiment</a>
              <div>/</div>
              <a href="#">About</a>
            </div>
          </li>
          <li className="content-wrapper">
            <a href="#">[Gallery]</a>
          </li>
          <li className="content-wrapper">
            <p>Obys Agency ©2023</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
