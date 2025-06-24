import React from 'react';

export default function Rsidemenu() {
  function addActive() {
    document.querySelector('.responsive-sidebar-menu').classList.add('active');
  }
  function removeActive() {
    document
      .querySelector('.responsive-sidebar-menu')
      .classList.remove('active');
  }
  return (
    <div>
      <span
        className="icon-menu"
        onClick={addActive}
        style={{
          cursor: 'pointer',
        }}
      >
        <span className="bar"></span>
        <span className="bar"></span>
      </span>
      <div className="responsive-sidebar-menu">
        <div className="overlay" onClick={removeActive}></div>
        <div className="sidebar-menu-inner">
          <div className="menu-wrap">
            <p>Menu</p>
            <ul className="menu scroll-nav-responsive d-flex">
              <li>
                <a className="scroll-to" href="#home" onClick={removeActive}>
                  <i className="las la-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#about" onClick={removeActive}>
                  <i className="lar la-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#resume" onClick={removeActive}>
                  <i className="las la-briefcase"></i> <span>Resume</span>
                </a>
              </li>
              {/* <li>
                            <a className="scroll-to" href="#services"onClick={removeActive}>
                                <i className="las la-stream"></i> <span>Services</span>
                            </a>
                        </li> */}
              {/* <li>
                <a className="scroll-to" href="#skills" onClick={removeActive}>
                  <i className="las la-shapes"></i> <span>Skills</span>
                </a>
              </li> */}
              <li>
                <a
                  className="scroll-to"
                  href="#portfolio"
                  onClick={removeActive}
                >
                  <i className="las la-grip-vertical"></i>{' '}
                  <span>Portfolio</span>
                </a>
              </li>
              {/* <li>
                <a
                  className="scroll-to"
                  href="#testimonial"
                  onClick={removeActive}
                >
                  <i className="lar la-comment"></i> <span>Testimonial</span>
                </a>
              </li> */}
              <li>
                <a className="scroll-to" href="#contact" onClick={removeActive}>
                  <i className="las la-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>

            <p>My Other Sites</p>
            <ul className="menu scroll-nav-responsive d-flex">
              <li>
                <a
                  className="scroll-to"
                  href="https://blog.joshuarmiller.dev"
                  onClick={removeActive}
                >
                  <i className="las la-pen-nib"></i>
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a
                  className="scroll-to"
                  href="https://vanilla-typer.joshuarmiller.dev"
                  onClick={removeActive}
                >
                  <i className="las la-keyboard"></i> <span>Vanilla Typer</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-social">
            <p>Social</p>
            <ul className="social-links d-flex align-items-center">
              {/* <li>
                <a href="https://twitter.com">
                  <i className="lab la-twitter"></i>
                </a>
              </li> */}
              <li>
                <a href="https://github.com/JoshuaMillerCode">
                  <i className="lab la-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/joshuamillerdev/">
                  <i className="lab la-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
