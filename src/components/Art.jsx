import React from 'react';
import {featureLists, goodLists} from "../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useMediaQuery} from "react-responsive";

const Art = () => {

  const isMobile = useMediaQuery({maxWidth: 676})

  useGSAP(() => {

    gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start: isMobile ? "top 20%" : "top top",
        end: "bottom center",
        scrub: 1.5,
        pin: true,
        markers: true,
      }

    })
      .to('.will-fade', {
        opacity:0, stagger: .5
      })
      .to('.masked-img', {
        maskSize: "500%",
        maskPosition: "center center",
        ease: "power1.inOut",
        duration:2,
        scale: 1.3

      })
      .to('.masked-container div', {
        opacity: 1,
      })
  })

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {
              goodLists.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <img src="/images/check.png" alt="check"/>
                  <p>{feature}</p>
                </li>
              ))
            }
          </ul>

          <div className="cocktail-img">
            <img src="/images/under-img.jpg"
                 alt="cocktail"
                 className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade">
            {
              featureLists.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 justify-start">
                  <img src="/images/check.png" alt="check"/>
                  <p className="md:w-fit w-60">{feature}</p>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>This isn't just a drink. It's a carefully crafted moment just for you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;