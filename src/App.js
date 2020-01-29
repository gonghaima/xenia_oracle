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
            <img alt="main-img" src={oracleCloud} />
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
          <section className="split-section">
            <h2>Business Benefits of Hotel Property Management</h2>
            <p>The consumer's travel journey begins by selecting a destination while simultaneously shopping for a hotel. That pre-stay shopping and booking interaction, their on-property engagement with the hotel and its staff, their in-room experience, and their sharing of feedback on social media post-stay are all part of their guest experience. Hoteliers are challenged with providing a personalized guest experience while operating an effective hotel business. Today's hotel PMS solutions help hoteliers deliver the experience guests want, while efficiently managing their business. Hotel PMS offers many benefits for a hotelier's business. They include:</p>
            <table>
              <tbody>
                <tr>
                  <td>Enhanced check-in/check-out capabilities</td>
                  <td>Provide anytime, anywhere service to your guests using a <a href="/nz/industries/hospitality/hotels-resorts/mobile.html">mobile-enabled cloud-based hotel PMS</a>. Untether your front-desk staff so they can check guests in, assign rooms, enable guest services, and check guests out wherever there is internet connectivity</td>
                </tr>
                <tr>
                  <td>Improved housekeeping service</td>
                  <td>Increase housekeeping efficiency with instant updates on housekeeping <a href="/nz/industries/food-beverage/products/micros-tablet-700-series.html">mobile devices</a> when customers check out, freeing up rooms for cleaning. Enable greater flexibility with room management and improve response time for room-service tasks. Identify and manage room-maintenance needs, ensuring rooms are clean and in perfect condition</td>
                </tr>
                <tr>
                  <td>Integrated hotel back-office systems</td>
                  <td>Connect operations and financial processes by leveraging prebuilt integrations to accounts receivable, accounts payable, payment gateways, hotel industry applications, and property infrastructure devices. Integrate accounts receivable and commission handling. Ensure accurate guest folios for faster, more accurate billing.</td>
                </tr>
                <tr>
                  <td>Effective hotel distribution management</td>
                  <td>Increase room occupancy and ADR through real-time rate and availability <a href="/nz/industries/hospitality/products/otas-gds-channels-self-service.html">management across distribution channels</a>. Boost sales through direct booking channels on brand website.</td>
                </tr>
                <tr>
                  <td>Improved hotel revenue management</td>
                  <td>Empower managers to improve ADR with extensive options for setting rates and advanced rate-management features for manual and semiautomated revenue management.</td>
                </tr>
                <tr>
                  <td>Better managed customer data</td>
                  <td>Centralize and secure customer data and improve the quality and accuracy of guest profiles with <a href="/nz/industries/hospitality/products/opera-reporting-analytics.html">reporting and analytics</a>. Understand customer buying patterns so you can define more <a href="/nz/industries/hospitality/products/opera-customer-loyalty-tracking.html">targeted packages and services</a>. Ensure compliance with national and international data-compliance rules</td>
                </tr>
              </tbody>
            </table>
            <div className="additional-info">
              <div className="additional-info-l">
                <h3>Learn more</h3>
              </div>
              <ul className="additional-info-r">
                <li>
                  <a href="#">
                    <div></div>
                    <span>Quick Tour</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div></div>
                    <span>Process Map</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div></div>
                    <span>Data Sheet</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="split-section">
            <h2>Selecting the Right Hotel PMS</h2>
            <p>Choosing the right hotel property management system is critical to the smooth running of your hotel operation. It pays to understand exactly what you do need, and what you don't need.</p>
            <p>The <a href="#">2019 Smart Decision Guide to Hotel Property Management Systems</a> provides the information you need to make a smart decision and find the <a href="#">hotel PMS</a> that best fits your need. This research report, conducted by Starfleet and sponsored by Oracle Hospitality, provides a checklist to use when evaluating hotel PMS, a list of must-ask questions for vendors, a roadmap for buying decisions, and valuable insights from industry insiders and experts.</p>
          </section>
          <section className="split-section">
            <h2>Deploying Cloud-Based Hotel PMS</h2>
          </section>
        </main>
      </section>
    </div>
  );
}

export default App;
