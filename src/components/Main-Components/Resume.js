import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-briefcase"></i> Resume
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Education & <span>Experience</span>
            </h1>
          </div>

          <div className="resume-timeline">
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2020 - Present</span>
              <h2>Framer Desinger & Developer</h2>
              <p>Brunodee Agency</p>
              <h2>Front-End WordPress Developer</h2>
              <p>Envato Market</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2021 - 2022</span>
              <h2> Junior MicroServices Engineer</h2>
              <p>Designflow Studio</p>
              <h2>Web Designer</h2>
              <p>Freelance</p>
              <h2>Leader Team of Marketing</h2>
              <p>Seventh Ave Inc.</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2020 - 2021</span>
              <h2>Software Engineering Immersive Bootcamp</h2>
              {/* <h3>Full Stack Software Engineering Fellow</h3> */}
              <p>General Assembly Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
