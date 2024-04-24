import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const sectionRef = useRef(null);
  const greenRef = useRef(null);
  const redRef = useRef(null);
  const blueRef = useRef(null);

  useEffect(() => {
    let trigger = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".big-img-section",
          start: "top-=500 top",
          end: "bottom bottom",
          scrub: 2,
          // markers: true,
        },
      })
      .fromTo(
        ".photo-slider-anim",
        { y: "100vh" },
        { y: 0, stagger: 0.05, duration: 1 },
        "key1"
      )
      .fromTo(
        ".big-img-item",
        { y: "100vh" },
        { y: 0, delay: 0.2, stagger: 0.2, duration: 0.8 },
        "key1"
      )
      .to(".photo-slider-anim", { x: "0", duration: 1 }, "key2")
      .to(".big-img-item._2", { x: "110%", duration: 1 }, "key2")
      .to(".big-img-item._3", { x: "40%", duration: 1 }, "key2")
      .fromTo(
        ".big-img-anim._1",
        { y: "110%" },
        { y: "0", duration: 1, delay: 0.2 },
        "key2"
      )
      .fromTo(
        ".big-img-anim._2",
        { y: "110%" },
        { y: "0", duration: 1, delay: 0.4 },
        "key2"
      )
      .to(
        ".scroll-anim-wrapper",
        { backgroundColor: "#e6e4de", duration: 0.3 },
        "key2"
      )
      .fromTo(
        ".transition-trigger",
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.6 },
        "key2"
      )
      .fromTo(
        ".experiment-right-wrapper",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 0.6,
        },
        "key2"
      )
      .fromTo(
        ".tag-anim",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 0.6,
        },
        "key2"
      )

      .fromTo("#big-photo-2", { y: "0" }, { y: "-100vh", duration: 1 }, "key3")
      .to("#big-photo-1 img", { scale: 1.2, duration: 1 }, "key3")
      .to(".counter-item-wrapper", { y: "-15px", duration: 1 }, "key3")
      .to(".modernist-wrapper", { opacity: 0.4 }, "key3")
      .to(".modernist-wrapper.anim-2", { opacity: 1, duration: 1 }, "key3")

      .fromTo("#big-photo-3", { y: "0" }, { y: "-100vh", duration: 1 }, "key4")
      .to("#big-photo-2 img", { scale: 1.2, duration: 1 }, "key4")
      .to(".modernist-wrapper", { opacity: 0.4 }, "key4")
      .to(".counter-item-wrapper", { y: "-31px", duration: 1 }, "key4")
      .to(".modernist-wrapper.anim-3", { opacity: 1, duration: 1 }, "key4")

      .fromTo("#big-photo-4", { y: "0" }, { y: "-100vh", duration: 1 }, "key5")
      .to("#big-photo-3 img", { scale: 1.2, duration: 1 }, "key5")
      .to(".counter-item-wrapper", { y: "-46px", duration: 1 }, "key5")
      .to(".modernist-wrapper", { opacity: 0.4 }, "key5")
      .to(".modernist-wrapper.anim-4", { opacity: 1, duration: 1 }, "key5")

      .fromTo("#big-photo-5", { y: "0" }, { y: "-100vh", duration: 1 }, "key6")
      .to("#big-photo-4 img", { scale: 1.2, duration: 1 }, "key6")
      .to(".counter-item-wrapper", { y: "-62px", duration: 1 }, "key6")
      .to(".modernist-wrapper", { opacity: 0.4 }, "key6")
      .to(".modernist-wrapper.anim-5", { opacity: 1, duration: 1 }, "key6")

      .fromTo("#big-photo-6", { y: "0" }, { y: "-100vh", duration: 1 }, "key7")
      .to("#big-photo-5 img", { scale: 1.2, duration: 1 }, "key7")
      .to(".counter-item-wrapper", { y: "-77px", duration: 1 }, "key7")
      .to(".modernist-wrapper", { opacity: 0.4 }, "key7")
      .to(".modernist-wrapper.anim-6", { opacity: 1, duration: 1 }, "key7");

    return () => {
      if (trigger) trigger.kill();
      //   if (tl) tl.kill();
    };
  }, []);
  return (
    <div className="big-img-section">
      <div className="scroll-anim-wrapper">
        <div className="experiment-content-wrapper text">
          <div className="experiment-wrapper pointer-events-off">
            <div className="big-img-item _2">
              {/* <div className="green big-img"></div> */}
              <img
                src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f0ecedb66e792ccc46f93_home-slider-7-p-800.webp"
                alt=""
                className="big-img"
              />
            </div>
            <div className="big-img-item _3">
              {/* <div className="yellow big-img"></div> */}
              <img
                src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f62564099bffe03063b85_Kosarev-art-1-10.webp"
                alt=""
                className="big-img"
              />
            </div>
          </div>
          <div className="experiment-sticky-wrapper">
            <div className="experiment-left-wrapper home">
              <div className="experiment-top-wrapper">
                <div className="experiment-h2-block-wrapper">
                  <div className="name-anim-wrapper">
                    <p className="big-heading big-img-anim _1">Explore</p>
                  </div>
                  <div className="name-anim-wrapper">
                    <p className="big-heading big-img-anim _2">Experiment</p>
                  </div>
                </div>
                <a
                  href="/experiment"
                  className="big-btn-wrapper anim-lines transition-trigger w-inline-block"
                  style={{ opacity: 0 }}
                >
                  <div className="big-btn-content">
                    <div className="content-wrapper btn">
                      <h3>Learn More</h3>
                    </div>
                    <div className="link-arrow-wrapper big-btn">
                      <svg
                        width="100%"
                        height="auto"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.6055 5L6.55588 0L4.78156 0L9.15438 4.37282L0 4.37282L0 5.62718L9.15438 5.62718L4.78156 10L6.55588 9.99933L11.6055 5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="anim-line-wrapper big-btn"></div>
                </a>
              </div>
              <div className="mobile-hide-wrapper home tag-anim">
                <h3>Kharkiv Modernism × Obys × AI</h3>
              </div>
            </div>
            <div className="experiment-right-wrapper" style={{ opacity: 0 }}>
              <div className="mobile-hide-wrapper counter">
                <div className="counter-anim-scroll-wrapper">
                  <div className="counter-item-wrapper _1">
                    <h3>1</h3>
                  </div>
                  <div className="counter-item-wrapper _2">
                    <h3>2</h3>
                  </div>
                  <div className="counter-item-wrapper _3">
                    <h3>3</h3>
                  </div>
                  <div className="counter-item-wrapper _4">
                    <h3>4</h3>
                  </div>
                  <div className="counter-item-wrapper _5">
                    <h3>5</h3>
                  </div>
                  <div className="counter-item-wrapper _6">
                    <h3>6</h3>
                  </div>
                </div>

                <div className="counter-item-wrapper-no-scroll">
                  <h3>-</h3>
                </div>
                <div className="counter-item-wrapper-no-scroll">
                  <h3>6</h3>
                </div>
              </div>

              <div class="modernists-list">
                <div class="modernists-list-wrapper">
                  <div class="list-name-wrapper experiment">
                    <div class="content-wrapper">
                      <h3>[06] Featured:</h3>
                    </div>
                  </div>
                  <div class="content-wrapper">
                    <div class="modernist-wrapper-name">
                      <h3>Name:</h3>
                    </div>
                    <div href="#big-photo-1" class="modernist-wrapper anim-1">
                      <h3>Suprematista</h3>
                    </div>
                    <div
                      href="#big-photo-2"
                      class="modernist-wrapper anim-2"
                      style={{ opacity: 0.4 }}
                    >
                      <h3>Buntesglas</h3>
                    </div>
                    <div
                      href="#big-photo-3"
                      class="modernist-wrapper anim-3"
                      style={{ opacity: 0.4 }}
                    >
                      <h3>Vierensee</h3>
                    </div>
                    <div
                      href="#big-photo-4"
                      class="modernist-wrapper anim-4"
                      style={{ opacity: 0.4 }}
                    >
                      <h3>Formen</h3>
                    </div>
                    <div
                      href="#big-photo-5"
                      class="modernist-wrapper anim-5"
                      style={{ opacity: 0.4 }}
                    >
                      <h3>Sesselbaa</h3>
                    </div>
                    <div
                      href="#big-photo-6"
                      class="modernist-wrapper anim-6"
                      style={{ opacity: 0.4 }}
                    >
                      <h3>Salzfeld</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="mobile-hide-wrapper home"
                //
                style={{ opacity: 1 }}
              >
                <h3>©2023</h3>
              </div>
            </div>
          </div>
          <div className="photo-slider-anim">
            <div id="big-photo-1" className="img-slider-item _1">
              {/* <div className="big-scroll-img purple"></div> */}
              <img
                src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f0d0dbbc3bde0877784da_home-slider-1-p-800.webp"
                alt=""
                className="big-scroll-img"
              />
              <div className="img-bg-color _1"></div>
            </div>
            <div id="big-photo-2" className="img-slider-item next _2">
              {/* <div className="big-scroll-img red"></div> */}
              <img
                src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f0d0ee783579004b21b74_home-slider-2-p-800.webp"
                alt=""
                className="big-scroll-img"
              />
              <div className="img-bg-color _2"></div>
            </div>
            <div id="big-photo-3" className="img-slider-item next _3">
              {/* <div className="big-scroll-img blue"></div> */}
              <img
                src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f0d635f68c6d63d3a5f74_home-slider-3-p-800.webp"
                alt=""
                className="big-scroll-img"
              />
              <div className="img-bg-color _3"></div>
            </div>
            <div id="big-photo-4" className="img-slider-item next _4">
              {/* <div className="big-scroll-img pink"></div> */}
              <img
                src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f0d0d3961e504250c5556_home-slider-4-p-800.webp"
                alt=""
                className="big-scroll-img"
              />
              <div className="img-bg-color _4"></div>
            </div>
            <div id="big-photo-5" className="img-slider-item next _5">
              {/* <div className="big-scroll-img aqua"></div> */}
              <img
                src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f0d0e5f68c6d63d3a2864_home-slider-5-p-800.webp"
                alt=""
                className="big-scroll-img"
              />
              <div className="img-bg-color _5"></div>
            </div>
            <div id="big-photo-6" className="img-slider-item next _6">
              {/* <div className="big-scroll-img orange"></div> */}
              <img
                src="https://assets-global.website-files.com/6543bb275c1f9a259661c7c8/655f0d0e99dafb75c1177ba4_home-slider-5-1-p-800.webp"
                alt=""
                className="big-scroll-img"
              />
              <div className="img-bg-color _6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
