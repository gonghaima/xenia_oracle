import React from 'react';
import oracleCloud from './img/oracle-cloud.jpg';
import whatIsHotelPMS from './img/hotel-what-is-hotel-pms.jpg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <section className="top-section">
        <div className="content_margin full_width flex-center space-between">
          <div>Icon</div>
          <div>Search box</div>
          <div>Oracle Cloud Free Tier</div>
        </div>
      </section>
      <div className="breadcrumb">
        <div className="content_margin flex-center breadcrumb-content">
          <div>Oracle New Zealand /Industries / Hospitality / Hotel Property Management / Resources</div>
          <div>Hotel PMS</div>
        </div>
      </div>
      <section className="head-section">
        <div className="head-section-content">
          <h2>What is Hotel PMS?</h2>
          <p>Hotel property management systems manage all aspects of hotel business operations, including the delivery of superior guest experiences.</p>
          <div className="hero-button-container">
            <button>Get help selecting the right Hotel PMS  </button>
          </div>
        </div>
      </section>
      <nav>
        <div className="nav-item">
          <ul>
            <li>
              <div>
                <a href="#">Overview</a>
              </div>
            </li>
            <li>
              <div>
                <a href="#">Products</a>
              </div>
            </li>
            <li>
              <div>
                <a href="#">Solutions</a>
              </div>
            </li>
            <li>
              <div>
                <a href="#">Resources</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="contact-button-container">
          <button>Contact us</button>
        </div>
      </nav>
      <section className="main-section">
        <div className="side">
          <section className="social-section">
            <h2>Share this page</h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section>
          <section className="in-page-section">
            <h3>In-Page Topics</h3>
            <ul className="in-page-content">
              <li>
                <a href="#">How Hotel PMS Works</a>
              </li>
              <li>
                <a href="#">What is a Hotel Property Management System</a>
              </li>
              <li>
                <a href="#">Business Benefits of Hotel PMS</a>
              </li>
              <li>
                <a href="#">Selecting the Right Hotel Property Management System</a>
              </li>
              <li>
                <a href="#">Deploying Cloud-Based Hotel PMS</a>
              </li>
              <li>
                <a href="#">Oracle Hotel Property Management</a>
              </li>
            </ul>

          </section>
          <section className="learn-more-section">
            <h3>Learn More</h3>
            <ul className="learn-more-content">
              <li>
                <a href="#">What is OPERA Hotel PMS?</a>
              </li>
              <li>
                <a href="#">Selecting the right hotel property management system</a>
              </li>
              <li>
                <a href="#">Are you ready for mobile Hotel PMS?</a>
              </li>
              <li>
                <a href="#">How does the OPERA Property Management solution work?</a>
              </li>
            </ul>
          </section>
        </div>
        <main>
          <h2>How Hotel PMS Works</h2>
          <p>OPERA Cloud hotel property management system offers hoteliers capabilities to enhance operating efficiency and deliver exceptional guest experiences. The platform integrates emerging technologies with ease, accelerating innovation to meet ever-changing demands.</p>
          <div className="main-video" data-aos="fade-in">
            <img alt="main-video" src={oracleCloud} />
          </div>
          <div className="learn-more-button-container">
            <button>Learn more about Oracle Hotel PMS</button>
          </div>
          <section className="split-section">
            <h2>Hotel PMS Defined</h2>
            <p>Traditionally, a hotel property management system was defined as a platform that enabled a hotel or group of hotels to manage front-office capabilities, such as booking reservations, guest check-in/check-out, room assignment, managing room rates, and billing. Hotel PMS delivered a software platform that replaced time-intensive, paper and spreadsheet-heavy processes.</p>
            <p>However, <a className="link" href="#">hotel PMS</a> technology has evolved and greater integrations offer services that extend well beyond the front desk. Hotel PMS is now a critical business operations system that enables hoteliers to deliver a seamless guest experience. Hotel PMS now integrates to other onsite services that impact the guest's complete experience, including:</p>
            <ul className="split-content">
              <li>
                <a href="#">OPERA Cloud Property Management System</a>
              </li>
              <li>
                <a href="#">Sales and Catering</a>
              </li>
              <li>
                <a href="#">Reporting and Analytics</a>
              </li>
              <li>
                <a href="#">Loyalty</a>
              </li>
              <li>
                <a href="#">Mobility</a>
              </li>
              <li>
                <a href="#">Distribution and Revenue Optimization</a>
              </li>
            </ul>
            <div className="main-img" data-aos="fade-in">
              <img alt="main-video" src={whatIsHotelPMS} />
            </div>
          </section>

        </main>
      </section>
    </div>
  );
}

export default App;
