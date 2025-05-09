
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';

const PaperAward = () => {
  return (
    <div className=" bg-white pt-20">
      <div className="relative w-full">
        <Navbar />
        <Header />
      </div>

      <div className="text-center font-bold bg-green-500 text-white p-4 text-2xl sm:text-3xl shadow-md">
        BEST PAPER AWARDS
      </div>

      <div className="flex flex-col items-center p-6 space-y-6">
        <img
          src="BestPaperAward.png"
          alt="Best Paper Award"
          className="w-90 sm:w-96 md:w-[28rem] lg:w-[60rem] rounded-xl shadow-lg"
        />

        <div className="guidelines max-w-3xl bg-gray-100 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-green-700">Best Paper Awards Guidelines</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-800 text-lg leading-relaxed">
            <li>
              <span className="font-semibold text-green-600">All papers selected for oral presentations</span> will automatically be nominated for the <span className="font-semibold text-green-600">AGNI-S 2025 Best Paper Award.</span>
            </li>
            <li>
              In each session, <span className="font-semibold text-green-600">one paper will be chosen</span> for the award based on the <span className="italic">quality of work, presentation skills,</span> and performance during Q&A.
            </li>
            <li>
              <span className="font-semibold text-green-600">Winners will be announced</span> during the valedictory session. Be there to celebrate!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaperAward;

