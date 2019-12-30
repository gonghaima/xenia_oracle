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
          <div>In-Page Topics</div>
        </div>
        <main>
          <h2>How Hotel PMS Works</h2>
        </main>
      </section>
    </div>
  );
}

export default App;
