import React, {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/SplitText";
import {useMediaQuery} from "react-responsive";

const Hero = () => {

  const videoRef = useRef()
  const mojitoRef = useRef(null)

  const isMobile = useMediaQuery({maxWidth: 676})

  useGSAP(() => {

    let splittedMojito, splittedSubtitle

    document.fonts.ready.then(() => {

      requestAnimationFrame(() => {
        setTimeout(() => {

          splittedMojito = SplitText.create(mojitoRef.current, {type: "chars"})
          splittedSubtitle = SplitText.create('.subtitle', {type: "lines"})

          splittedMojito.chars.forEach(char => {
            char.classList.add("text-gradient")
          })

          gsap.timeline()
            .from(splittedMojito.chars, {
              yPercent: 100,
              ease: "expo.out",
              stagger: 0.06,
              duration: 1.8,
            })
            .from(splittedSubtitle.lines, {
              yPercent: 100,
              ease: "expo.out",
              stagger: 0.06,
              duration: 1.8,
              opacity: 0
            }, "-=0.8")
        }, 350) // или 50-100мс для надёжности
      })


      gsap.timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      })
        .to('.left-leaf', {y: -200}, 0)
        .to('.right-leaf', {y: 200}, 0)
    })


    videoRef.current.onloadedmetadata = () => {
      gsap.to(videoRef.current, {
        scrollTrigger: {
          trigger: videoRef.current,
          start: isMobile ? "top 50%" : "center 60%",
          end: isMobile ? "120% top" : "bottom top",
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            // videoRef.current.currentTime = self.progress * videoRef.current.duration;

            const video = videoRef.current;
            if (!video) return;

            video.currentTime = self.progress * video.duration;
            // Попробуем запустить
            video.play().catch(() => {
              // В iOS может быть запрет, игнорируем ошибку
            });

          }
        }
      })
    }

  })

  return (

    <>
      <section className="noisy" id="hero">
        <h1 className="title overflow-hidden " ref={mojitoRef}>MOJITO</h1>
        <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf"/>
        <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf"/>

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br/> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktil on our menu is a blend of premium ingredients, cerative flair, and timeless recipes -
                designed to delight your senses.
              </p>
              <a href="#coctails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video ref={videoRef} src="/videos/output.mp4" muted playsInline preload='auto' ></video>
      </div>
    </>
  );
};

export default Hero;