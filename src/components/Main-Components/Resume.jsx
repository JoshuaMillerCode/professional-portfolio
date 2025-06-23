import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Dropdown state for each job
  const [showSnorkelDetails, setShowSnorkelDetails] = useState(false);
  const [showFreelanceDetails, setShowFreelanceDetails] = useState(false);
  const [showLeadInstructorDetails, setShowLeadInstructorDetails] =
    useState(false);
  const [showSeniorInstructionalDetails, setShowSeniorInstructionalDetails] =
    useState(false);
  const [showJuniorMicroDetails, setShowJuniorMicroDetails] = useState(false);
  const [showInternDetails, setShowInternDetails] = useState(false);
  const [showFullStackDetails, setShowFullStackDetails] = useState(false);

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
              <span className="date">Jun 2025 - Present</span>
              <h2>Expert AI Coding Contributor (Task-Based Contract)</h2>
              <p>Snorkel AI · Contract</p>
              <p>California, United States · Remote</p>
              <button
                onClick={() => setShowSnorkelDetails((prev) => !prev)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#10c5fc',
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: '1rem',
                  textDecoration: 'underline',
                  marginBottom: '0.75rem',
                }}
                aria-expanded={showSnorkelDetails}
                aria-controls="snorkel-details"
              >
                {showSnorkelDetails ? (
                  <span>Hide Details</span>
                ) : (
                  <span>Show Details</span>
                )}
              </button>
              {showSnorkelDetails && (
                <ul
                  id="snorkel-details"
                  style={{
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem',
                    paddingLeft: '1.2rem',
                  }}
                >
                  <li>
                    Advanced AI's depth of knowledge and ability to reason,
                    validate its own solutions, and produce rigorous
                    justifications and academically acceptable solutions,
                    directly improving interpretability and correctness in
                    LLM-based problem solving.
                  </li>
                  <li>
                    Uncovered failure modes in deductive logic, computation, and
                    mathematical reasoning.
                  </li>
                  <li>
                    Contributed to the evolution of AI's mathematical cognition,
                    influencing model fine-tuning strategies and shaping the
                    next generation of AI reasoning benchmarks.
                  </li>
                </ul>
              )}
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">Feb 2025 - Present</span>
              <h2>Freelance Web Developer</h2>
              <p>A&amp;M Equipment · Freelance</p>
              <p>Houston, TX · Remote</p>
              <button
                onClick={() => setShowFreelanceDetails((prev) => !prev)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#10c5fc',
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: '1rem',
                  textDecoration: 'underline',
                  marginBottom: '0.75rem',
                }}
                aria-expanded={showFreelanceDetails}
                aria-controls="freelance-details"
              >
                {showFreelanceDetails ? (
                  <span>Hide Details</span>
                ) : (
                  <span>Show Details</span>
                )}
              </button>
              {showFreelanceDetails && (
                <ul
                  id="freelance-details"
                  style={{
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem',
                    paddingLeft: '1.2rem',
                  }}
                >
                  <li>
                    Led the full development process from planning to deployment
                    as the sole engineer on the project
                  </li>
                  <li>
                    Improved site speed by over 60 percent through optimized
                    image handling, static generation, and code splitting
                  </li>
                  <li>
                    Increased organic traffic by 40 percent in the first month
                    by implementing SEO best practices and structured data
                  </li>
                  <li>
                    Designed and built a fully responsive layout that works
                    across all major device types
                  </li>
                  <li>
                    Managed hosting setup, version control with Git, and
                    continuous deployment workflows for smooth launches and
                    updates
                  </li>
                </ul>
              )}
            </div>
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date"> Mar 2022 - Jan 2025</span>
              <h2>Lead Software Engineering Instructor</h2>
              <p>Per Scholas</p>
              <button
                onClick={() => setShowLeadInstructorDetails((prev) => !prev)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#10c5fc',
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: '1rem',
                  textDecoration: 'underline',
                  marginBottom: '0.75rem',
                }}
                aria-expanded={showLeadInstructorDetails}
                aria-controls="lead-instructor-details"
              >
                {showLeadInstructorDetails ? (
                  <span>Hide Details</span>
                ) : (
                  <span>Show Details</span>
                )}
              </button>
              {showLeadInstructorDetails && (
                <ul
                  id="lead-instructor-details"
                  style={{
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem',
                    paddingLeft: '1.2rem',
                  }}
                >
                  <li>
                    Maintained a graduation rate of 85% by fostering a
                    supportive and engaging learning environment.
                  </li>
                  <li>
                    Focusing on MongoDB, Express, React, and Node.js
                    technologies
                  </li>
                  <li>
                    Successfully led and graduated 10+ cohorts, each consisting
                    of 30+ students, totaling over 300 learners.
                  </li>
                  <li>
                    Managed Salesforce database, handling data of 200+ users,
                    ensuring seamless data retrieval and updates with 99.9%
                    uptime.
                  </li>
                </ul>
              )}
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date"> Jun 2021 - Jan 2025</span>
              <h2>Senior Instructional Associate</h2>
              <p>General Assembly Inc.</p>
              <button
                onClick={() =>
                  setShowSeniorInstructionalDetails((prev) => !prev)
                }
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#10c5fc',
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: '1rem',
                  textDecoration: 'underline',
                  marginBottom: '0.75rem',
                }}
                aria-expanded={showSeniorInstructionalDetails}
                aria-controls="senior-instructional-details"
              >
                {showSeniorInstructionalDetails ? (
                  <span>Hide Details</span>
                ) : (
                  <span>Show Details</span>
                )}
              </button>
              {showSeniorInstructionalDetails && (
                <ul
                  id="senior-instructional-details"
                  style={{
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem',
                    paddingLeft: '1.2rem',
                  }}
                >
                  <li>
                    Partnered with a multidisciplinary instructional team to
                    create a supportive, engaging, and productive remote
                    learning environment tailored to open-ended educational
                    settings.
                  </li>
                  <li>
                    Increased learner engagement by 25% through the
                    implementation of interactive teaching methods, real-time
                    feedback, and personalized support strategies.
                  </li>
                </ul>
              )}
            </div>
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date"> Dec 2021 - Dec 2022</span>
              <h2> Junior MicroServices Backend Engineer</h2>
              <p>Seventh Ave Inc.</p>
              <button
                onClick={() => setShowJuniorMicroDetails((prev) => !prev)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#10c5fc',
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: '1rem',
                  textDecoration: 'underline',
                  marginBottom: '0.75rem',
                }}
                aria-expanded={showJuniorMicroDetails}
                aria-controls="junior-micro-details"
              >
                {showJuniorMicroDetails ? (
                  <span>Hide Details</span>
                ) : (
                  <span>Show Details</span>
                )}
              </button>
              {showJuniorMicroDetails && (
                <ul
                  id="junior-micro-details"
                  style={{
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem',
                    paddingLeft: '1.2rem',
                  }}
                >
                  <li>
                    Contributed significantly to securing a second bridge round,
                    raising $3.5 million for the Venture Capital backed
                    start-up.
                  </li>
                  <li>
                    Developed code to deliver and enhance a positive user
                    experience for over 22,000+ users.
                  </li>
                  <li>
                    Led the development efforts in seamlessly integrating a
                    cutting-edge Event Bus model, known as Event Vans, to
                    enhance system communication efficiency.
                  </li>
                  <li>
                    Made significant contributions to backend development for a
                    high-profile "Pullupon.me" Seventh Ave. application, akin to
                    Linktree, showcasing strong technical prowess and innovative
                    problem-solving skills.
                  </li>
                </ul>
              )}
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">Dec 2021 - Jun 2021</span>
              <h2>Paid Software Engineering Intern</h2>
              <p>Seventh Ave Inc.</p>
              <button
                onClick={() => setShowInternDetails((prev) => !prev)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#10c5fc',
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: '1rem',
                  textDecoration: 'underline',
                  marginBottom: '0.75rem',
                }}
                aria-expanded={showInternDetails}
                aria-controls="intern-details"
              >
                {showInternDetails ? (
                  <span>Hide Details</span>
                ) : (
                  <span>Show Details</span>
                )}
              </button>
              {showInternDetails && (
                <ul
                  id="intern-details"
                  style={{
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem',
                    paddingLeft: '1.2rem',
                  }}
                >
                  <li>
                    Heavily contributed to the development of critical features
                    including the main feed and a Q&amp;A segment.
                  </li>
                  <li>
                    Recognized for outstanding performance as an intern, swiftly
                    transitioned to the role of Junior MicroServices Engineer.
                  </li>
                </ul>
              )}
            </div>
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2021 - 2022</span>
              <h2>Full Stack Engineer</h2>
              <p>Olympus Code</p>
              <button
                onClick={() => setShowFullStackDetails((prev) => !prev)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#10c5fc',
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: '1rem',
                  textDecoration: 'underline',
                  marginBottom: '0.75rem',
                }}
                aria-expanded={showFullStackDetails}
                aria-controls="fullstack-details"
              >
                {showFullStackDetails ? (
                  <span>Hide Details</span>
                ) : (
                  <span>Show Details</span>
                )}
              </button>
              {showFullStackDetails && (
                <ul
                  id="fullstack-details"
                  style={{
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem',
                    paddingLeft: '1.2rem',
                  }}
                >
                  <li>Contributed to a dynamic team at Olympus Code</li>
                  <li>
                    Played a key role in developing FOMO, an event finder app
                  </li>
                  <li>Showcased innovative problem-solving skills</li>
                  <li>Significantly improved user experience</li>
                </ul>
              )}
            </div>
            <br />
            <h1 className="scroll-animation" data-aos="fade-up">
              Education
            </h1>
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2020 - 2021</span>
              <h2>Software Engineering Immersive Bootcamp</h2>
              <p>General Assembly Inc.</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2018 - 2020</span>
              <h2>Some College</h2>
              <p>Lone Star College</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
