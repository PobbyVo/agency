import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Model = () => {
  const svgOne = useRef(null);
  const svgTwo = useRef(null);
  const svgThree = useRef(null);
  const svgFour = useRef(null);
  const svgFive = useRef(null);
  const svgSix = useRef(null);
  const svgSeven = useRef(null);
  const total = useRef(null);

  useEffect(() => {
    gsap.fromTo(total.current, { opacity: 0 }, { opacity: 1, delay: 4.5 });
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#heroStart",
          start: "top top",
          endTrigger: "#spaceSection",
          end: "bottom+=2000 bottom",
          scrub: 2,
          // toggleActions: "play none none reset",
          // markers: true,
        },
      })
      .to(
        svgOne.current,
        {
          scale: 0.5,
          rotation: -90,
          transform: `translate(622.5px, 826px)`,
          // ease: "power2.inOut",
          visibility: "visible",
          // transform: `matrix(0.00117894, -0.500761, 0.500761, 0.00117894, 436.811, 449.558)`,
        },
        "key1"
      )
      .to(
        svgTwo.current,
        {
          scale: 0.5,
          rotation: -0.0409,
          transform: `translate(882.7px, 656px)`,
          // ease: "power2.inOut",
          visibility: "visible",
          // transform: `matrix(0.500369, 0.000355121, -0.000355121, 0.500369, 731.961, 542.887)`,
        },
        "key1"
      )
      .to(
        svgThree.current,
        {
          scale: 0.5,
          rotation: 0,
          transform: `translate(791.7px, 656px)`,
          // ease: "power2.inOut",
          visibility: "visible",
          // transform: `matrix(0.500295, 0, 0, 0.500295, 641.864, 542.849)`,
        },
        "key1"
      )
      .to(
        svgFour.current,
        {
          scale: 0.5,
          rotation: 179.99,
          transform: `translate(1247.7px, 825.7px)`,
          // ease: "power2.inOut",
          visibility: "visible",
          // transform: `matrix(-0.500368, -0.00112144, 0.00112144, -0.500368, 797.687, 486.404)`,
        },
        "key1"
      )
      .to(
        svgFive.current,
        {
          scale: 0.5,
          rotation: 90,
          transform: `translate(1416px, 734px)`,
          // ease: "power2.inOut",
          visibility: "visible",
          // transform: `matrix(1.98954e-05, 0.500018, -0.500018, 1.98954e-05, 1002.94, 658.171)`,
        },
        "key1"
      )
      .to(
        svgSix.current,
        {
          scale: 0.5,
          rotation: 180,
          transform: `translate(1065px, 658px)`,
          // ease: "power2.inOut",
          visibility: "visible",
          // transform: `matrix(-0.500324, -0.000672607, 0.000672607, -0.500324, 616.1, 316.482)`,
        },
        "key1"
      )
      .to(
        svgSeven.current,
        {
          scale: 0.5,
          rotation: 180,
          transform: `translate(1157px, 825.7px)`,
          // ease: "power2.inOut",
          visibility: "visible",
          // transform: `matrix(-0.500324, 0.000672607, -0.000672607, -0.500324, 706.865, 486.626)`,
        },
        "key1"
      )
      .to(
        total.current,
        {
          transform: `translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          // ease: "power2.inOut",
        },
        "key2"
      )
      .to(
        svgOne.current,
        {
          scale: 0.5,
          rotation: 0,
          transform: `translate(792px, 656px)`,
          visibility: "visible",
          // ease: "power2.inOut",
        },
        "key2"
      )
      .to(
        svgTwo.current,
        {
          scale: 0.5,
          rotation: 0,
          transform: `translate(791.8px, 656px)`,
          visibility: "visible",
          // ease: "power2.inOut",
        },
        "key2"
      )
      .to(
        svgFour.current,
        {
          // display: "none",
        },
        "key2"
      )
      .to(
        svgFive.current,
        {
          scale: 0.5,
          rotation: -0.067,
          transform: `translate(1156px, 655px)`,
          visibility: "visible",
          // ease: "power2.inOut",
        },
        "key2"
      )
      .to(
        svgSix.current,
        {
          scale: 0.5,
          rotation: 180,
          transform: `translate(1065px, 825px)`,
          // transformOrigin: "center center",

          // ease: "power2.inOut",
        },
        "key2"
      )
      .to(
        svgSeven.current,
        {
          scale: 0.5,
          rotation: 180,
          transform: `translate(1247px, 825.5px)`,
          visibility: "visible",
          // ease: "power2.inOut",
        },
        "key2"
      )
      .to(
        svgSeven.current,
        {
          // scale: 0.5,
          // rotation: 0,
          // transform: `translate(792px, 656px)`,
          // visibility: "hidden",
          opacity: 0,
          duration: 0.01,
        },
        "key3"
      )
      .to(
        svgOne.current,
        {
          // scale: 0.5,
          // rotation: 0,
          // transform: `translate(791.8px, 656px)`,
          visibility: "hidden",
        },
        "key4"
      )
      .to(
        svgTwo.current,
        {
          // scale: 0.5,
          // rotation: -0.067,
          // transform: `translate(1156px, 655px)`,
          visibility: "hidden",
        },
        "key4"
      )
      .to(
        svgFive.current,
        {
          // scale: 0.5,
          // rotation: 180,
          // transform: `translate(1247px, 825.5px)`,
          visibility: "hidden",
          // opacity: 0,
        },
        "key4"
      )
      .to(
        total.current,
        {
          transform: `translate3d(0, -150%, 0) scale3d(4, 4, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,

          // ease: "power2.inOut",
        },
        "key4"
      )

      .to(
        svgThree.current,
        {
          scale: 12.98,
          rotation: 0,
          transform: `translate(-2500px, 656px)`,
          transformOrigin: "left center",
          duration: 1,
        },
        "key4"
      )
      .to(
        svgFour.current,
        {
          scale: 12.98,
          rotation: 179.99,
          transform: `translate(2250px, 825.7px)`,
          transformOrigin: "right center",
          duration: 1,
        },
        "key4"
      )

      .to(
        svgSix.current,
        {
          scale: 12.98,
          rotation: 180,
          transform: `translate(1065px, 825px)`,
          transformOrigin: "center center",
          duration: 1,
        },
        "key4"
      );

    return () => {
      if (t1) t1.kill();
      // if (t2) t2.kill();
    };
  }, []);

  return (
    <div className=".box" ref={total} style={{ opacity: 1 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 860"
        // width="1440"
        height="860"
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: "99.9%",
          height: "100%",
          transform: "translate3d(0px, 0px, 0px)",
          contentVisibility: "visible",
        }}
      >
        <defs>
          <clipPath id="__lottie_element_5">
            <rect width="1440" height="860" x="0" y="0"></rect>
          </clipPath>
        </defs>
        <g clipPath="url(#__lottie_element_5)">
          <g
            transform="matrix(0.999998, 0, 0, 0.999998, 598.352, 240.113)"
            opacity="1"
            ref={svgOne}
            style={{ display: "block" }}
          >
            <g
              opacity="1"
              transform="matrix(1,0,0,1,-207.8520050048828,-56.112998962402344)"
            >
              <path
                fill="rgb(20,20,20)"
                fillOpacity="1"
                d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
              ></path>
            </g>
          </g>
          <g
            transform="matrix(0.5446339249610901,0.8386627435684204,-0.8386627435684204,0.5446339249610901,272.4046936035156,388.20416259765625)"
            opacity="1"
            ref={svgTwo}
            style={{ display: "block" }}
          >
            <g
              opacity="1"
              transform="matrix(1,0,0,1,-207.8520050048828,-56.112998962402344)"
            >
              <path
                fill="rgb(20,20,20)"
                // fill="red"
                fillOpacity="1"
                d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
              ></path>
            </g>
          </g>
          <g
            transform="matrix(0.9999906420707703,0,0,0.9999906420707703,795.35009765625,240.11407470703125)"
            opacity="1"
            // style="display: block;"
            ref={svgThree}
            style={{ display: "block" }}
          >
            <g
              opacity="1"
              transform="matrix(1,0,0,1,-207.8520050048828,-56.112998962402344)"
            >
              <path
                fill="rgb(20,20,20)"
                // fill="red"
                fillOpacity="1"
                d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
              ></path>
            </g>
          </g>
          <g
            transform="matrix(0.9999906420707703,0,0,0.9999906420707703,1542.35009765625,240.1124725341797)"
            opacity="1"
            ref={svgFour}
            style={{ display: "block" }}
          >
            <g
              opacity="1"
              transform="matrix(1,0,0,1,-207.8520050048828,-56.112998962402344)"
            >
              <path
                fill="rgb(20,20,20)"
                fillOpacity="1"
                d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
              ></path>
            </g>
          </g>
          <g
            transform="matrix(0.9999906420707703,0,0,0.9999906420707703,992.35009765625,240.1124725341797)"
            opacity="1"
            ref={svgFive}
            style={{ display: "block" }}
          >
            <g
              opacity="1"
              transform="matrix(1,0,0,1,-207.8520050048828,-56.112998962402344)"
            >
              <path
                fill="rgb(20,20,20)"
                // fill="red"
                fillOpacity="1"
                d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
              ></path>
            </g>
          </g>
          <g
            transform="matrix(0.5475581288337708,-0.8367564678192139,0.8367564678192139,0.5475581288337708,1128.9110107421875,40.45172119140625)"
            opacity="1"
            // style="display: block;"
            ref={svgSix}
            style={{ display: "block" }}
          >
            <g
              opacity="1"
              transform="matrix(1,0,0,1,-207.8520050048828,-56.112998962402344)"
            >
              <path
                fill="rgb(20,20,20)"
                fillOpacity="1"
                d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -90.73899841308594,170.24899291992188 -90.73899841308594,170.24899291992188 C-90.73899841308594,170.24899291992188 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
              ></path>
            </g>
          </g>
          <g
            transform="matrix(0.5475581288337708,0.8367564678192139,-0.8367564678192139,0.5475581288337708,1217.7110595703125,388.2947082519531)"
            opacity="1"
            ref={svgSeven}
            style={{ display: "block" }}
          >
            <g
              opacity="1"
              transform="matrix(1,0,0,1,-207.8520050048828,-56.112998962402344)"
            >
              <path
                fill="rgb(20,20,20)"
                fillOpacity="1"
                d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 92.20500183105469,167.3249969482422 92.20500183105469,167.3249969482422 C92.20500183105469,167.3249969482422 91.5,-170 91.5,-170z"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Model;
