import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Icon = () => {
  useEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".svg-wrapper",
        start: "top-=600 top",
        end: "bottom-=50 bottom",
        toggleActions: "restart none none none",
      },
    });

    t1.fromTo(
      ".icon",
      { y: 400 },
      { duration: 0.7, y: 14, stagger: 0.05 },
      "key1"
    )
      .to(
        ".icon-01",
        {
          // transform: `matrix(1, -9.78631e-05, 9.78631e-05, 1, 959.977, 13.2687)`,
          scaleY: 1.05,
          rotation: 60,
          transform: `translate(114px, 12px)`,
          duration: 1,
          transformOrigin: "center center",
        },
        "key2"
      )
      .to(
        ".icon-02",
        {
          transform: `matrix(1,0,0,1,313,14)`,
          duration: 1,
        },
        "key2"
      )
      .to(
        ".icon-03",
        {
          transform: `matrix(1,0,0,1,510,14)`,
          duration: 1,
        },
        "key2"
      )
      .to(
        ".icon-04",
        {
          transform: `matrix(1,0,0,1,706,14)`,
          duration: 1,
        },
        "key2"
      )
      .to(
        ".icon-05",
        {
          scaleY: 0.98,
          rotation: -55,
          transform: `translate(881.8px, 14.8px)`,
          duration: 1,
          transformOrigin: "center center",
        },
        "key2"
      )
      .to(
        ".icon-06",
        {
          // transform: `matrix(1, -9.78631e-05, 9.78631e-05, 1, 959.977, 13.2687)`,
          scaleY: 0.98,
          rotation: 55,
          transform: `translate(1051px, 15px)`,
          duration: 1,
          transformOrigin: "center center",
        },
        "key2"
      )
      .to(
        ".icon-07",
        {
          transform: `matrix(1,0,0,1,1227,14)`,
          duration: 1,
        },
        "key2"
      )
      .to(
        ".icon-08",
        {
          transform: `matrix(1,0,0,1,1500,14)`,
          duration: 1,
        },
        "key2"
      );

    return () => {
      if (t1) t1.kill();
    };
  }, []);
  return (
    <div
      style={{
        width: "100vw",
        marginLeft: "-14px",
        position: "relative",
        zIndex: 2,
        background: "#e6e4de",
        paddingLeft: "0.97em",
        paddingRight: "0.97em",
      }}
    >
      <div className="svg-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 368"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <clipPath id="__lottie_element_31">
              <rect width="1440" height="368" x="0" y="0"></rect>
            </clipPath>
          </defs>
          <g clipPath="url(#__lottie_element_31)">
            <g
              transform="matrix(1, 0, 0, 1, 0, 14)"
              opacity="1"
              style={{ display: "block" }}
              // ref={svgOne}
              className="icon icon-01"
            >
              <g opacity="1" transform="matrix(1,0,0,1,91.5,170)">
                <path
                  fill="rgb(20,20,20)"
                  fillOpacity="1"
                  d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(1,0,0,1,200,14)"
              opacity="1"
              style={{ display: "block" }}
              className="icon icon-02"
            >
              <g opacity="1" transform="matrix(1,0,0,1,91.5,170)">
                <path
                  fill="rgb(20,20,20)"
                  fillOpacity="1"
                  d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(1,0,0,1,400,14)"
              opacity="1"
              style={{ display: "block" }}
              className="icon icon-03"
            >
              <g opacity="1" transform="matrix(1,0,0,1,91.5,170)">
                <path
                  fill="rgb(20,20,20)"
                  fillOpacity="1"
                  d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(1,0,0,1,600,14)"
              opacity="1"
              style={{ display: "block" }}
              className="icon icon-04"
            >
              <g opacity="1" transform="matrix(1,0,0,1,91.5,170)">
                <path
                  fill="rgb(20,20,20)"
                  fillOpacity="1"
                  d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(1,0,0,1,800,14)"
              opacity="1"
              style={{ display: "block" }}
              className="icon icon-05"
            >
              <g opacity="1" transform="matrix(1,0,0,1,91.5,170)">
                <path
                  fill="rgb(20,20,20)"
                  fillOpacity="1"
                  d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(1, 0, 0, 1, 1000, 14)"
              opacity="1"
              style={{ display: "block" }}
              className="icon icon-06"
            >
              <g opacity="1" transform="matrix(1,0,0,1,91.5,170)">
                <path
                  fill="rgb(20,20,20)"
                  fillOpacity="1"
                  d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(1,0,0,1,1197.9093017578125,14)"
              opacity="1"
              style={{ display: "block" }}
              className="icon icon-07"
            >
              <g opacity="1" transform="matrix(1,0,0,1,91.5,170)">
                <path
                  fill="rgb(20,20,20)"
                  fillOpacity="1"
                  d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(1,0,0,1,1396,14)"
              opacity="1"
              style={{ display: "block" }}
              className="icon icon-08"
            >
              <g opacity="1" transform="matrix(1,0,0,1,91.5,170)">
                <path
                  fill="rgb(20,20,20)"
                  fillOpacity="1"
                  d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                ></path>
              </g>
            </g>

            <g
              transform="matrix(0.5446390509605408,-0.838670551776886,0.838670551776886,0.5446390509605408,-140.72535705566406,672.2084350585938)"
              opacity="1"
              // style="display: block;"
              style={{ display: "block" }}
            >
              <g
                opacity="1"
                transform="matrix(1,0,0,1,191.99000549316406,169.94500732421875)"
              >
                <path
                  fill="rgb(20,20,20)"
                  fillOpacity="1"
                  d=" M191.99000549316406,-15.57800006866455 C191.99000549316406,-15.57800006866455 92.31999969482422,-169.05499267578125 92.31999969482422,-169.05499267578125 C92.31999969482422,-169.05499267578125 -191.99000549316406,15.57800006866455 -191.99000549316406,15.57800006866455 C-191.99000549316406,15.57800006866455 -92.32099914550781,169.05499267578125 -92.32099914550781,169.05499267578125 C-92.32099914550781,169.05499267578125 191.99000549316406,-15.57800006866455 191.99000549316406,-15.57800006866455z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(1,0,0,1,211.5,433.97747802734375)"
              opacity="1"
              style={{ display: "none" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,91.5,170)">
                <path
                  fill="rgb(20,20,20)"
                  fillOpacity="1"
                  d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(1,0,0,1,408.5,433.97467041015625)"
              opacity="1"
              style={{ display: "none" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,91.5,170)">
                <path
                  fill="rgb(20,20,20)"
                  fillOpacity="1"
                  d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(1,0,0,1,605.125,433.97064208984375)"
              opacity="1"
              style={{ display: "none" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,91.5,170)">
                <path
                  fill="rgb(20,20,20)"
                  fillOpacity="1"
                  d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(0.5446390509605408,0.838670551776886,-0.838670551776886,0.5446390509605408,931.0619506835938,349.57037353515625)"
              opacity="1"
              style={{ display: "none" }}
            >
              <g
                opacity="1"
                transform="matrix(1,0,0,1,191.14999389648438,169.49000549316406)"
              >
                <path
                  fill="rgb(20,20,20)"
                  fillOpacity="1"
                  d=" M-191.14999389648438,-15.032999992370605 C-191.14999389648438,-15.032999992370605 -91.48200225830078,-168.50999450683594 -91.48200225830078,-168.50999450683594 C-91.48200225830078,-168.50999450683594 193.91000366210938,16.750999450683594 193.91000366210938,16.750999450683594 C193.91000366210938,16.750999450683594 94.24099731445312,170.22799682617188 94.24099731445312,170.22799682617188 C94.24099731445312,170.22799682617188 -191.14999389648438,-15.032999992370605 -191.14999389648438,-15.032999992370605z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(0.5446390509605408,-0.838670551776886,0.838670551776886,0.5446390509605408,843.46630859375,670.7767944335938)"
              opacity="1"
              style={{ display: "none" }}
            >
              <g
                opacity="1"
                transform="matrix(1,0,0,1,191.14999389648438,169.49000549316406)"
              >
                <path
                  fill="rgb(20,20,20)"
                  fillOpacity="1"
                  d=" M191.14999389648438,-15.032999992370605 C191.14999389648438,-15.032999992370605 91.48100280761719,-168.50999450683594 91.48100280761719,-168.50999450683594 C91.48100280761719,-168.50999450683594 -192.8459930419922,16.0939998626709 -192.8459930419922,16.0939998626709 C-192.8459930419922,16.0939998626709 -93.177001953125,169.5709991455078 -93.177001953125,169.5709991455078 C-93.177001953125,169.5709991455078 191.14999389648438,-15.032999992370605 191.14999389648438,-15.032999992370605z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(1,0,0,1,1196,433.9539794921875)"
              opacity="1"
              style={{ display: "none" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,91.5,170)">
                <path
                  fill="rgb(20,20,20)"
                  fillOpacity="1"
                  d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(1,0,0,1,1392,433.95965576171875)"
              opacity="1"
              style={{ display: "none" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,91.5,170)">
                <path
                  fill="rgb(20,20,20)"
                  fillOpacity="1"
                  d=" M91.5,-170 C91.5,-170 -91.5,-170 -91.5,-170 C-91.5,-170 -91.5,170 -91.5,170 C-91.5,170 91.5,170 91.5,170 C91.5,170 91.5,-170 91.5,-170z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Icon;
