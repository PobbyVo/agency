import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#heroAbout",
          start: "top-=800 top",
          end: "bottom bottom",
        },
      })
      .fromTo(
        ".content-part-1 .big-text-block",
        { y: "100%" },
        { y: "0", duration: 1, stagger: 0.05 },
        "key1"
      );

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#heroAbout",
          start: "top+=200 top",
          end: "bottom bottom",
        },
      })
      .fromTo(
        ".content-part-2 .big-text-block",
        { y: "100%" },
        { y: "0", duration: 1, stagger: 0.05 },
        "key1"
      );
  }, []);

  return (
    <div>
      <div id="heroAbout">
        <div className="about-section">
          <div className="content-part-1">
            <div className="about-wrapper">
              <div className="big-text-block">
                This AI experiment delves into a
              </div>
            </div>
            <div className="about-wrapper">
              <div className="big-text-block">
                contemporary reimagining of the Kharkiv
              </div>
            </div>
            <div className="about-wrapper">
              <div className="big-text-block">
                Modernism[*] movement from 1910 to
              </div>
            </div>
            <div className="about-wrapper">
              <div className="big-text-block">
                garde artists and intellectuals of that era,
              </div>
            </div>
            <div className="about-wrapper">
              <div className="big-text-block">
                we employ cutting-edge artificial
                <span className="txt-span">[**]</span>
              </div>
            </div>
            <div className="about-wrapper">
              <div className="big-text-block">
                intelligence techniques to reinterpret and
              </div>
            </div>
            <div className="about-wrapper">
              <div className="big-text-block">
                garde artists and intellectuals of that era,
              </div>
            </div>
            <div className="about-wrapper">
              <div className="big-text-block">
                revive their visionary ideas.
              </div>
            </div>
          </div>
          <div className="content-part-2">
            <div className="about-wrapper">
              <div className="big-text-block">
                By leveraging modern technology, we
              </div>
            </div>
            <div className="about-wrapper">
              <div className="big-text-block">
                aim to uncover new perspectives on the
              </div>
            </div>
            <div className="about-wrapper">
              <div className="big-text-block">
                artistic, architectural, and cultural legacy
              </div>
            </div>
            <div className="about-wrapper">
              <div className="big-text-block">of Kharkiv Modernism.</div>
            </div>
          </div>
          <div className="note-wrapper">
            <div className="note note-01">
              <h3>[*] — Collective name 1910-30 Kharkiv’s artists</h3>
            </div>
            <div className="note note-02">
              <h3>[**] — Main visual AI tool is Midjourney</h3>
            </div>
            <div className="note note-03">
              <h3>[***] — Experiment produced by Obys</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="anim-section"></div>
    </div>
  );
};

export default About;
