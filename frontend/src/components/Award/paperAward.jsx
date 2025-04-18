import React from 'react';

const BestPaperAwards = () => {
  return (
    <div className="best-paper-awards" >
      <img
        src="BestPaperAward.png"
        alt="Best Paper Award"
        className="paper-award-image"
      />
      <div className="guidelines">
        <h2>Best Paper Awards Guidelines</h2>
        <ul>
          <li>
            <strong>All papers selected for oral presentations will automatically be nominated for the IEEE SEFET 2025 Best Paper Award.</strong>
          </li>
          <li>
            <strong>In each session, one paper will be chosen for the Best Paper Award based on the quality of the work, presentation skills, and performance during the question-and-answer session.</strong>
          </li>
          <li>
            <strong>The winners of the Best Paper Award from each session will be announced during the valedictory session.</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BestPaperAwards;