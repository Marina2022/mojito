import React, {useEffect, useRef, useState} from 'react';
import {sliderLists} from "../constants/index.js";
import gsap from 'gsap'
import {useGSAP} from "@gsap/react";

const Menu = () => {

  const imgRef = useRef()
  const contentRef = useRef()

  const [currentIndex, setCurrentIndex] = useState(0)


  useEffect(() => {
    if (!imgRef.current) return;

    gsap.fromTo(imgRef.current, {
      xPercent: -100,
    }, {
      xPercent: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, [currentIndex]);


  const goToSlide = (index) => {
    const newIndex = (index + sliderLists.length) % sliderLists.length
    setCurrentIndex(newIndex)




    //
    // gsap.fromTo(imgRef.current, {
    //   xPercent: -100,
    //   duration: 1,
    // }, {
    //   xPercent: 0
    // })

    gsap.fromTo("#title", {
      opacity: 0,
      duration: 1
    }, {
      opacity: 1
    })

    gsap.fromTo(".details", {
        opacity: 0,
        yPercent: 100
      },
      {
        opacity: 1,
        yPercent: 100
      }
    )
  }

  const getCocktailAt = (indexOffset) => {
    return sliderLists[(indexOffset + currentIndex + sliderLists.length) % sliderLists.length]
  }


  const currentCocktail = getCocktailAt(0)
  const prevCocktail = getCocktailAt(-1)
  const nextCocktail = getCocktailAt(1)

  return (
    <section id="menu">
      <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf"/>

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs">
        {
          sliderLists.map((cocktail, index) => {
            const isActive = index === currentIndex

            return (
              <button key={index}
                      className={isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}
                      onClick={() => goToSlide(index)}
              >
                {cocktail.name}
              </button>
            )
          })
        }
      </nav>

      <div className="content">

        <div className="arrows">
          <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
            <span>{prevCocktail.name}</span>
            <img src="/images/right-arrow.png" alt="right-arrow"/>
          </button>

          <button className="text-right" onClick={() => goToSlide(currentIndex + 1)}>
            <span>{nextCocktail.name}</span>
            <img src="/images/left-arrow.png" alt="left-arrow"/>
          </button>
        </div>

        <div className="cocktail">
          <img ref={imgRef} src={currentCocktail.image} alt="cicktail" className="object-contain "/>
        </div>

        <div className="recipe">
          <div ref={contentRef} className='info'>
            <p>Recipe for:</p>
            <p id='title'>
              {currentCocktail.name}
            </p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Menu;