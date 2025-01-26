import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        <div className="about-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="lar la-user"></i> About
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Every great developer begins with <br />
              an even <span>better story</span>
            </h1>
          </div>
          <p className="scroll-animation about-about" data-aos="fade-up">
            {/* With almost 3+ years of experience as a software engineer, I am
            dedicated to crafting outstanding projects and instigating
            meaningful transformations. My reputation is built on a meticulous
            coding approach, with expertise in{' '}
            <span>JavaScript, Node, MongoDB, React,</span> and more. In addition
            to my current role as an instructor at Perscholas, where I guide
            cohorts in <span>MERN stack</span> development for successful
            graduations, I have also ventured into Freelance work. I have{' '}
            <span>developed</span> and <span>deployed</span> an app, showcasing
            my versatility and proficiency in the field. Past experiences at
            Seventh Ave. involved elevating the user experience for{' '}
            <span>22,000+</span> users and devising innovative solutions.
            Furthermore, I actively contribute to General Assembly by creating a
            supportive remote learning environment. <br />
            <span>
              I excel in problem-solving, collaboration, and delivering
              top-notch full-stack development and API solutions.
            </span> */}
            As a Full Stack Software Engineer with over{' '}
            <span>5 years of experience</span>, I specialize in building
            impactful applications and driving innovation through meticulous
            coding and problem-solving. Proficient in{' '}
            <span>
              JavaScript, React, Node.js, MongoDB, and Microservices
              Architecture
            </span>
            , I thrive in developing scalable solutions that enhance user
            experiences. In my role as a Lead Instructor at Per Scholas, I’ve
            successfully led <span>10+ cohorts (300+ students)</span> in MERN
            stack development, achieving an <span>85% graduation rate</span> by
            fostering an engaging and supportive learning environment. My
            freelance experience includes designing and deploying apps like the
            FOMO mobile app, which{' '}
            <span>
              reduced user search time by 30% and improved engagement by 50%
            </span>{' '}
            through user-centric design. At Seventh Ave., I{' '}
            <span>enhanced the experience for 22,000+ users</span>, developed
            tools to streamline operations, and{' '}
            <span>improved system efficiency by 25%</span> through optimized
            microservices architecture. My contributions also{' '}
            <span>helped secure $3.5M in funding</span> for a high-impact
            startup. I am committed to collaboration, innovation, and delivering
            high-quality full-stack applications and APIs that create meaningful
            transformations.
          </p>
        </div>
      </div>
    </section>
  );
}
