import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Lightbox from 'lightbox2';
// import 'lightbox2/dist/css/lightbox.min.css';
// import 'lightbox2/dist/js/lightbox.js';

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    // Lightbox.option({
    //   resizeDuration: 200,
    //   fadeDuration: 600,
    //   imageFadeDuration: 600,
    //   wrapAround: true,
    // });
  }, []);
  return (
    <section
      className="portfolio-area page-section scroll-to-page"
      id="portfolio"
    >
      <div className="custom-container">
        <div className="portfolio-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-grip-vertical"></i> projects
            </h4>
            <h1 className="scroll-animation">
              Featured <span>Projects</span>
            </h1>
          </div>

          <div className="row portfolio-items">
            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-full">
                <div className="portfolio-item-inner">
                  <a
                    href="https://vanilla-typer.joshuarmiller.dev"
                    data-lightbox="example-1"
                  >
                    <img
                      src="../assets/images/real-vanilla-typer.gif"
                      alt="Vanilla Typer"
                    />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a disabled>NodeJS</a>
                    </li>
                    <li>
                      <a disabled>HTML & CSS</a>
                    </li>
                    <li>
                      <a disabled>JavaScript</a>
                    </li>
                    <li>
                      <a disabled>ExpressJS</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://vanilla-typer.joshuarmiller.dev">
                    Vanilla Typer
                  </a>
                </h2>
              </div>
            </div>

            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-full">
                <div className="portfolio-item-inner">
                  <a href="https://api-go.app/" data-lightbox="example-1">
                    <img
                      src="../assets/images/API-GO-ezgif.com-speed.gif"
                      alt="Portfolio"
                    />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a disabled>NodeJS</a>
                    </li>
                    <li>
                      <a disabled>NPM</a>
                    </li>
                    <li>
                      <a disabled>Axios</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://api-go.app/">API-GO</a>
                </h2>
              </div>
            </div>

            <div className="col-md-12 scroll-animation" data-aos="fade-right">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  {/* <a
                    href="../assets/images/portfolio2.jpg"
                    data-lightbox="example-1"
                  > */}
                  <img src="../assets/images/User-tool.jpeg" alt="Portfolio" />
                  {/* </a> */}

                  {/* <img src="../assets/images/User-tool.jpeg" alt="Portfolio" /> */}

                  <ul className="portfolio-categories">
                    <li>
                      <a disabled>React</a>
                    </li>
                    <li>
                      <a disabled>Redux</a>
                    </li>
                    <li>
                      <a disabled>Bootstrap</a>
                    </li>
                    <li>
                      <a disabled>MongoDB & Mongoose</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a disabled>Seventh Ave. User Tool</a>
                </h2>
              </div>
            </div>

            <div className="col-md-12 scroll-animation" data-aos="fade-right">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a href="https://thefomoapp.com/" data-lightbox="example-1">
                    <img src="../assets/images/FOMO.png" alt="Portfolio" />
                  </a>

                  {/* <img src="../assets/images/portfolio2.jpg" alt="Portfolio" /> */}

                  <ul className="portfolio-categories">
                    <li>
                      <a disabled>React Native</a>
                    </li>
                    <li>
                      <a disabled>Firebase</a>
                    </li>
                    <li>
                      <a disabled>Expo</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://thefomoapp.com/">FOMO App</a>
                </h2>
              </div>
            </div>

            {/* <div className="col-md-6 scroll-animation" data-aos="fade-left">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="../assets/images/portfolio3.jpg"
                    data-lightbox="example-1"
                  >
                    <img
                      src="../assets/images/portfolio3.jpg"
                      alt="Portfolio"
                    />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a disabled>NodeJS</a>
                    </li>
                    <li>
                      <a disabled>ExpressJS</a>
                    </li>
                    <li>
                      <a disabled>RxJS</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://www.taskly-dashboard.com">Event Vans</a>
                </h2>
              </div>
            </div> */}

            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="https://www.npmjs.com/package/node-backend-starter"
                    data-lightbox="example-1"
                  >
                    <img src="./assets/images/nbs-npm.png" alt="portfolio" />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a disabled>ExpressJS</a>
                    </li>
                    <li>
                      <a disabled>NodeJS</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://www.npmjs.com/package/node-backend-starter">
                    node-backend-starter - NPM Package
                  </a>
                </h2>
              </div>
            </div>

            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  {/* <a
                    href="../assets/images/portfolio5.jpg"
                    data-lightbox="example-1"
                  > */}
                  <img src="../assets/images/QuizBee.png" alt="portfolio" />
                  {/* </a> */}

                  <ul className="portfolio-categories">
                    <li>
                      <a disabled>React</a>
                    </li>
                    <li>
                      <a disabled>MongoDB & Mongoose</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a disabled>QuizBee Hackathon Project</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
