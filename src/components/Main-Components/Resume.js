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
              <span>Experience</span>
            </h1>
          </div>

          <div className="resume-timeline">
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date"> 2023 - Present</span>
              <h2>Lead Software Engineering Instructor</h2>
              <p>Per Scholas</p>
              <span
                style={{ fontSize: '.85rem', marginTop: '-1%' }}
                className="date"
              >
                Current
              </span>
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date"> 2022 - 2023</span>
              <h2> Junior MicroServices Engineer</h2>
              <p>Seventh Ave Inc.</p>
              <h2>Junior Software Engineering Instructor</h2>
              <p>Per Scholas</p>
              <h2>Instructor Assistant</h2>

              <p>Per Scholas</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">Dec 2021 - Jun 2021</span>

              <h2>Full Stack Engineer</h2>
              <p>Olympus Code</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2021 - 2022</span>

              <h2>Paid Software Engineer Intern</h2>
              <p>Seventh Ave Inc.</p>
              <p></p>
              <h2>Teaching Assistant</h2>
              <p>General Assembly Inc.</p>
              <span
                style={{ fontSize: '.85rem', marginTop: '-1%' }}
                className="date"
              >
                Current
              </span>
            </div>
            <br />
            <h1 className="scroll-animation" data-aos="fade-up">
              Education
            </h1>
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
