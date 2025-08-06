import React, {useRef} from 'react';
import {navLinks} from "../constants";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {

  const navRef = useRef(null)

  useGSAP(()=>{
    const navTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: navRef.current,
        start: "bottom top",
      }
    })
      .fromTo(navRef.current, {
        backgroundColor: "transparent"
      }, {
        backgroundColor: "#00000070",
        duration: 1,
        ease: "power2.inOut",
        backdropFilter: 'blur(10px)'
      })

  })

  return (
    <nav ref={navRef} >
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo"/>
          <p>Velvet Pour</p>
        </a>
        <ul>
          {
            navLinks.map((link,i) => (
              <li key={i}>
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))
          }
        </ul>

      </div>

    </nav>
  );
};

export default Navbar;