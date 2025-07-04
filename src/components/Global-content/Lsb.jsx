import React from 'react';

export default function Lsb() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <img
          style={{ width: '150px', height: '150px' }}
          src="./jmLogo.png"
          alt="Logo"
        />
        <span
          className="designation"
          style={{ fontSize: '1.2rem', fontWeight: 'bold' }}
        >
          Full Stack Engineer
        </span>
      </div>
      <img className="me" src="./assets/images/profile_pic_new.png" alt="Me" />
      <h2 className="email">millerjoshua737@gmail.com</h2>
      <h2 className="address">Based in Houston, TX</h2>
      {/* <p className="copyright">&copy; 2022 Drake. All Rights Reserved</p> */}
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        {/* <li>
          <a href="https://twitter.com/">
            <i className="lab la-twitter"></i>
          </a>
        </li> */}
        <li>
          <a href="https://www.linkedin.com/in/joshuamillerdev/">
            <i className="lab la-linkedin"></i>
          </a>
        </li>
        {/* <li>
          <a href="https://instagram.com/">
            <i className="lab la-instagram"></i>
          </a>
        </li> */}
        <li>
          <a href="https://github.com/JoshuaMillerCode">
            <i className="lab la-github"></i>
          </a>
        </li>
      </ul>
      <a
        href="mailto:joshmillercode@gmail.com"
        className="theme-btn"
        style={{ marginBottom: '5px' }}
      >
        <i className="las la-envelope"></i> Hire Me!
      </a>
      <br />
      <a
        href="./assets/Joshua Miller Full Stack Software Engineer.pdf"
        className="theme-btn"
        style={{ marginBottom: '5px' }}
      >
        <i className="las la-paper-plane"></i> Resume
      </a>
    </div>
  );
}
