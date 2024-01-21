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
            With nearly 3 years of experience as a software engineer, I am
            committed to creating exceptional projects and driving meaningful
            change. Renowned for my meticulous coding approach, I specialize in
            JavaScript, Node, MongoDB, React, and more. Currently teaching at
            Perscholas, I lead cohorts in MERN stack development, ensuring
            successful graduation. Previously, at Seventh Ave., I enhanced user
            experience for 7000+ users and contributed innovative solutions. I
            actively contribute to General Assembly by establishing a nurturing
            remote learning environment. <br />
            <span>
              I excel in problem-solving, collaboration, and delivering
              top-notch full-stack development and API solutions.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
