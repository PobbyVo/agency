import gsap from "gsap";
import React, { useEffect } from "react";

const Aims = () => {
  useEffect(() => {
    gsap.fromTo(
      ".anim-line--top",
      { width: 0 },
      { width: "100%", delay: 3.5, duration: 1 }
    );
    gsap.fromTo(
      ".anim-line--right",
      { height: 0 },
      { height: "100%", delay: 3.5, duration: 1 }
    );
    gsap.fromTo(
      ".content-wrapper-title",
      { translateY: "100%" },
      { translateY: 0, delay: 3.5, duration: 1, stagger: 0.05 }
    );
    gsap.fromTo(
      ".modernists-list-wrapper",
      { opacity: 0 },
      { opacity: 1, delay: 3.5, duration: 1 }
    );
  }, []);
  return (
    <div id="aimSection" className="aim-wrapper">
      <div className="left-area">
        <div className="modernists-list">
          <div className="modernists-list-wrapper">
            <div className="list-name-wrapper">
              <div className="content-wrapper">
                <h3>Modernists:</h3>
              </div>
            </div>
            <div className="list-chapter">
              <ul className="chapter-option-detail">
                <li className="chapter-content">
                  <h3>E01: Anatol Petrytskiy</h3>
                </li>
                <li className="chapter-content">
                  <h3>E02: Vasyl Ermilov</h3>
                </li>
                <li className="chapter-content">
                  <h3>E03: Oleksandr Khvostenko-Khvostov</h3>
                </li>
                <li className="chapter-content">
                  <h3>E04: Borys Kosarev</h3>
                </li>
                <li className="chapter-content">
                  <h3>E05: Vadym Meller</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="anim-line--right"></div>
      </div>
      <div className="right-area">
        <div className="hero-header-wrapper">
          <div className="content-wrapper">
            <h2 className="content-wrapper-title">AIM—</h2>
          </div>

          <div className="content-wrapper">
            <h2 className="content-wrapper-title">AI Modernism</h2>
          </div>

          <div className="content-wrapper">
            <h2 className="content-wrapper-title">Of Kharkiv</h2>
          </div>
        </div>
        <a href="#" className="link-to-explore">
          <div className="explore-txt">Scroll to Explore</div>
          <div className="icon-down">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.875 11.6055L10.875 6.55588L10.875 4.78156L6.50218 9.15438L6.50218 -1.91142e-07L5.24782 -2.45972e-07L5.24782 9.15438L0.875 4.78156L0.87567 6.55588L5.875 11.6055Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </a>
      </div>

      <div className="anim-line--bottom black"></div>
      <div className="anim-line--top black"></div>
    </div>
  );
};

export default Aims;
