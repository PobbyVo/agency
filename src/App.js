import { useEffect, useRef } from "react";
import "./App.css";
import About from "./sections/About";
import Aims from "./sections/Aims";
import Explore from "./sections/Explore";
import Hero from "./sections/Hero";
import Icon from "./sections/Icon";
import Loading from "./sections/Loading";
import Space from "./sections/Space";
import SpaceFooter from "./sections/SpaceFooter";
import gsap from "gsap";

function App() {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <Loading />
      <div ref={sectionRef}>
        <Hero />
        <Aims />
        <About />
        <Space />
        <Explore />
        <SpaceFooter />
        <Icon />
      </div>
    </div>
  );
}

export default App;
