import React from 'react';

const BestPosterAwards = () => {
  return (
    <div className="best-Poster-awards" >
      <img
        src="BestPosterAward.png"
        alt="Best Poster Award"
        className="Poster-award-image"
      />
      <div className="guidelines">
        <h2>Best Poster Awards Guidelines</h2>
        <ul>
          <li>
            <strong>All Posters selected for oral presentations will automatically be nominated for the IEEE SEFET 2025 Best Poster Award.</strong>
          </li>
          <li>
            <strong>In each session, one Poster will be chosen for the Best Poster Award based on the quality of the work, presentation skills, and performance during the question-and-answer session.</strong>
          </li>
          <li>
            <strong>The winners of the Best Poster Award from each session will be announced during the valedictory session.</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BestPosterAwards;