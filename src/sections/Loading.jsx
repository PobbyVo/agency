import gsap, { TweenMax } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Loading = () => {
  const svgOne = useRef(null);
  const svgTwo = useRef(null);
  const svgThree = useRef(null);
  const svgFour = useRef(null);
  const svgFive = useRef(null);
  const svgSix = useRef(null);
  const svgSeven = useRef(null);

  const pathOne = useRef(null);
  const pathTwo = useRef(null);
  const pathThree = useRef(null);
  const pathFour = useRef(null);
  const pathFive = useRef(null);
  const pathSix = useRef(null);
  const pathSeven = useRef(null);

  useEffect(() => {
    // gsap.to(window, { scrollTo: { y: 0 } });
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".loading-anim-wrapper",
          start: "top-=100 top",
          end: "bottom bottom",
        },
      })
      .to("body", { overflow: "hidden" }, "key0")
      .to(
        [svgOne.current, svgTwo.current, svgThree.current],
        {
          scaleY: 0.45,
          transformOrigin: "bottom bottom",
          duration: 0.8,
        },
        "key1"
      )
      .to(
        [svgFour.current, svgFive.current],
        {
          scaleY: 0.45,
          transformOrigin: "bottom bottom",
          duration: 0.8,
          delay: 0.2,
        },
        "key1"
      )
      .to(
        [svgSix.current, svgSeven.current],
        {
          scaleY: 0.45,
          transformOrigin: "bottom bottom",
          duration: 0.8,
          delay: 0.4,
        },
        "key1"
      )
      .to(
        ".loading-bg-color",
        {
          translateY: "-100%",
          display: "none",
        },
        "key2"
      )
      .to(
        [svgOne.current, svgTwo.current, svgThree.current],
        {
          transformOrigin: "right center",
          translateY: 486.8,
          scaleY: 1,
          scaleX: 1,
          duration: 0.8,
        },
        "key2"
      )
      .to(
        [svgFour.current, svgFive.current, svgSix.current, svgSeven.current],
        {
          translateY: 486.8,
          transformOrigin: "center center",
          scaleY: 1,
          scaleX: 1,
          duration: 0.8,
        },
        "key2"
      )
      .to(
        [
          pathOne.current,
          pathTwo.current,
          pathThree.current,
          pathFour.current,
          pathFive.current,
          pathSix.current,
          pathSeven.current,
        ],
        {
          fill: "rgb(20,20,20)",
          duration: 1,
        },
        "key2"
      )
      .to(
        svgOne.current,
        {
          translateX: 730,
          duration: 0.8,
        },
        "key3"
      )
      .to(
        svgTwo.current,
        {
          translateX: 730,
          duration: 0.8,
        },
        "key3"
      )
      .to(
        svgThree.current,
        {
          translateX: 927,
          duration: 0.8,
        },
        "key3"
      )
      .to(
        svgFour.current,
        {
          translateX: 1060,
          duration: 0.8,
        },
        "key3"
      )
      .to(
        svgFive.current,
        {
          translateX: 1060,
          duration: 0.8,
        },
        "key3"
      )
      .to(
        svgSix.current,
        {
          translateX: 1257,
          duration: 0.8,
        },
        "key3"
      )
      .to(
        svgSeven.current,
        {
          translateX: 1257,
          duration: 0.8,
        },
        "key3"
      )
      .to(
        svgOne.current,
        {
          delay: 0.1,
          rotation: 57,
          scale: 0.999998,
          //   transform: "translate(500px, 562px)",
          transform: "translate(725px, 486px)",
          transformOrigin: "top left",
          duration: 0.8,
        },
        "key4"
      )
      .to(
        svgTwo.current,
        {
          delay: 0.1,

          scale: 0.999998,
          transform: "translate(726px, 485.5px)",
          duration: 0.8,
        },
        "key4"
      )
      .to(
        svgThree.current,
        {
          delay: 0.1,

          scale: 0.999998,
          transform: "translate(922.8px, 485.5px)",
          duration: 0.8,
        },
        "key4"
      )
      .to(
        svgFour.current,
        {
          delay: 0.1,

          scale: 0.999998,
          transform: "translate(1055.8px, 485.5px)",
          duration: 0.8,
        },
        "key4"
      )
      .to(
        svgFive.current,
        {
          delay: 0.1,
          //   scale: 0.98,
          //   scale: 0.999998,
          rotation: -56.8,
          transform: "translate(1055px, 485px)",
          duration: 0.8,
          transformOrigin: "top right",
        },
        "key4"
      )
      .to(
        svgSix.current,
        {
          delay: 0.1,
          rotation: 56.8,
          transform: "translate(1608px, 485px)",
          duration: 1,
          transformOrigin: "top left",
        },
        "key4"
      )
      .to(
        svgSeven.current,
        {
          delay: 0.1,
          scale: 0.999998,
          transform: "translate(1605px, 485.5px)",
          duration: 1,
        },
        "key4"
      )
      .to(".loading-anim-wrapper", {
        ease: "power1.out",
        display: "none",
      })
      .to("body", { overflow: "" });

    t1.eventCallback("onStart", () => {
      window.scroll(0, 0);
    });

    return () => {
      t1.kill();
    };
  }, []);

  return (
    <div className="loading-anim-wrapper">
      <div className="logo-anim-wrapper">
        <div className="lottie-anim loading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 860"
            // width="1440"
            // height="860"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: "100%",
              height: "100%",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            <defs>
              <clipPath id="__lottie_element_5">
                <rect width="1440" height="860" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_5)">
              <g
                // transform="matrix(0.3,0,0,0.45,795.35009765625,240.11407470703125)"
                transform={`matrix(0.3, 0, 0, 0, 750, 431.114)`}
                opacity="1"
                ref={svgOne}
                style={{ display: "block" }}
              >
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,-207.8520050048828,-56.112998962402344)"
                >
                  <path
                    fill="#e6e4de"
                    ref={pathOne}
                    fillOpacity="1"
                    d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                  ></path>
                </g>
              </g>
              <g
                // transform="matrix(0.3,0,0,0.45,795.35009765625,240.11407470703125)"
                transform={` matrix(0.3, 0, 0, 0, 750, 431.114)`}
                opacity="1"
                ref={svgTwo}
                style={{ display: "block" }}
              >
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,-207.8520050048828,-56.112998962402344)"
                >
                  <path
                    ref={pathTwo}
                    fill="#e6e4de"
                    fillOpacity="1"
                    d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                  ></path>
                </g>
              </g>
              <g
                // transform="matrix(0.3,0,0,0.45,795.35009765625,240.11407470703125)"
                transform={`matrix(0.3, 0, 0, 0, 750, 431.114)`}
                opacity="1"
                ref={svgThree}
                style={{ display: "block" }}
              >
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,-207.8520050048828,-56.112998962402344)"
                >
                  <path
                    ref={pathThree}
                    fill="#e6e4de"
                    fillOpacity="1"
                    d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                  ></path>
                </g>
              </g>
              <g
                // transform="matrix(0.3,0,0,0.45,992.35009765625,240.1124725341797)"
                transform={`matrix(0.3, 0, 0, 0, 804, 431.114)`}
                opacity="1"
                ref={svgFour}
                style={{ display: "block" }}
              >
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,-207.8520050048828,-56.112998962402344)"
                >
                  <path
                    ref={pathFour}
                    fill="#e6e4de"
                    fillOpacity="1"
                    d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                  ></path>
                </g>
              </g>
              <g
                // transform="matrix(0.3,0,0,0.45,992.35009765625,240.1124725341797)"
                transform={`matrix(0.3, 0, 0, 0, 804, 431.114)`}
                opacity="1"
                ref={svgFive}
                style={{ display: "block" }}
              >
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,-207.8520050048828,-56.112998962402344)"
                >
                  <path
                    ref={pathFive}
                    fill="#e6e4de"
                    // fill="red"
                    fillOpacity="1"
                    d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                  ></path>
                </g>
              </g>
              <g
                // transform="matrix(0.3,0,0,0.45,1189.35009765625,240.1124725341797)"
                transform={`matrix(0.3, 0, 0, 0, 858, 431)`}
                opacity="1"
                ref={svgSix}
                style={{ display: "block" }}
              >
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,-207.8520050048828,-56.112998962402344)"
                >
                  <path
                    ref={pathSix}
                    fill="#e6e4de"
                    // fill="red"
                    fillOpacity="1"
                    d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                  ></path>
                </g>
              </g>
              <g
                // transform="matrix(0.3,0,0,0.45,1189.35009765625,240.1124725341797)"
                transform={`matrix(0.3, 0, 0, 0, 858, 431)`}
                opacity="1"
                ref={svgSeven}
                style={{ display: "block" }}
              >
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,-207.8520050048828,-56.112998962402344)"
                >
                  <path
                    ref={pathSeven}
                    fill="#e6e4de"
                    fillOpacity="1"
                    d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="loading-bg-color"></div>
    </div>
  );
};

export default Loading;
