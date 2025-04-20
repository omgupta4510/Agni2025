import React, { useEffect } from 'react';
import './Authors.css';
import Conference from './Conference';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Authors = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="author-page" data-aos="fade-in">
        <div className="hero-content" data-aos="zoom-in">
          <h1 className="hero-title">Authors</h1>
        </div>
      </div>
      <br />
      <div className="cfp-box-glass" data-aos="fade-up" data-aos-duration="1000">
  <h2 className="cfp-title" data-aos="flip-left" data-aos-delay="100">
    Call for Paper
  </h2>

  <div className="cfp-text" data-aos="fade-right" data-aos-delay="200">
    <p>
      🌍 International Conference on <strong>Advances in Green, Net-Zero, Innovation - Sustainability (AGNI-S 2025)</strong> is scheduled from <strong>15 Dec - 17 Dec, 2025</strong>.
    </p>
    <br />
    <p>
      📣 We welcome top-notch submissions from global researchers, academics, and professionals. Let your work shape the future of sustainability, innovation, and applied sciences.
    </p>
  </div>

  <div className="btn-wrapper" data-aos="zoom-in" data-aos-delay="300">
    <button className="hero-btn glow-btn">🚀 Submission</button>
  </div>

  <div className="conference-card" data-aos="fade-up" data-aos-delay="400">
    <Conference />
  </div>
</div>
    </div>
  );
};

export default Authors;
