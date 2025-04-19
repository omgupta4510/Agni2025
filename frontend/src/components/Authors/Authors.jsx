import React from 'react';
import './Authors.css';
import Conference from './Conference';

const Authors = () => {
  return (
    <div>
    <div className="author-page">
      <div className="hero-content">
        <h1 className="hero-title">Authors</h1>
      </div>
      </div>
     <br />
     <div className="cfp-box">
        <h2 style={{textAlign:'center', fontWeight:'bold', fontSize:'40px' ,color:"white", backgroundColor:" #b9d6fc"}}>Call for Paper</h2>
        <div class="section">
    <p>International Conference on Advances in Green,Net-Zero, Innovation - Sustainability AGNI-S 2025 is going to held from 15 Dec - 17 Dec, 2025.</p>
    <br />
    <p> We invite high-quality submissions in the areas of technology, innovation, and applied sciences. We welcome contributions from researchers, academics, and professionals from around the globe.</p>
  </div>
  <br />
  <button className="hero-btn">Submission</button>

  <div className="conference-card">
       <Conference/>
     </div>
      </div>

   </div>
   
  );
};

export default Authors;
