import React from 'react';
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
        <div className="head-section-content"></div>
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
        </main>
      </section>
    </div>
  );
}

export default App;
