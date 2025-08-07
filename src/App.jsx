import {ScrollTrigger, SplitText} from 'gsap/all';
import gsap from 'gsap';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Lenis from "@studio-freight/lenis";
import {useEffect, useRef} from "react";
import Cocktails from "./components/Cocktails.jsx";


gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

const App = () => {
  const lenisRef = useRef();

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,        // скорость скролла
      easing: (t) => t,     // функция easing, можно кастомизировать
      smooth: true,
      // другие опции - https://studio-freight.github.io/lenis/
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // очистка при размонтировании компонента
      lenisRef.current.destroy();
    };
  }, []);

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails />


    </main>
  );
};

export default App;