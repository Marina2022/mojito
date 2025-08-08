import React from 'react';
import {openingHours, socials} from "../constants/index.js";
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";

const Contact = () => {

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: "top 20%",
      }
    })
      .from('#f-left-leaf', {
        x: -50,
        duration: 2
      })
      .from('#f-right-leaf', {
        x: 50,
        duration: 2,
      }, "<")
  })

  return (
    <footer id="contact">
      <img src="/images/footer-right-leaf.png" alt="leaf" id="f-right-leaf"/>
      <img src="/images/footer-left-leaf.png" alt="leaf" id="f-left-leaf"/>

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>358, Raq Blvd. #202, Los Angeles, CA 90212</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(555) 782-5424</p>
          <p>mail@cocktail.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {
            openingHours.map((time, i) => (
              <p key={i}>{time.day} : {time.time}</p>
            ))
          }
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label={social.name}
                title={social.name}
                style={{backgroundImage: `url(${social.icon})`}}
              >
                <img src={social.icon} alt="icon"/>

              </a>

            ))}

          </div>

        </div>

      </div>

    </footer>


  );
};

export default Contact;