import React, { useEffect } from 'react';
import './Authors.css';
import Conference from './Conference';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gql, useQuery } from '@apollo/client';

const Authors = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { loading, error, data } = useQuery(gql`
    query Query($where: generalInformationWhereInput!) {
      generalInformations(where: $where) {
        name
        desc
      }
    }`, {
    variables: {
      where: {
        name: { in: ["SubmissionLink", "ConferenceDate","PaperSubmissionGuideline Link"] }
      }
    }
  });
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  if (!data) return <div>NO data</div>
  console.log(data);
  
  const submissionLink = data?.generalInformations[1].desc;
  const confdate = data?.generalInformations[0].desc;
  const paperSubmissionGuidelineLink = data?.generalInformations[2].desc;
  return (
    <div className="bg-white pt-20">
      <div className="relative lg:h-[60vh] md:h-[40vh] w-full">
        <img
          src="nitt.jpeg"
          alt="NIT TRICHY"
          className="w-full h-full object-cover filter blur-[2px]" // or blur-md, blur-lg for more blur
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Authors Corner
          </h1>
        </div>
      </div>

      <div className=" py-16 cfp-box-glass" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="cfp-title" data-aos="flip-left" data-aos-delay="100">
          Call for Paper
        </h2>

        <div className="cfp-text" data-aos="fade-right" data-aos-delay="200">
          <p>
            🌍 International Conference on <strong>Advances in Green, Net-Zero Innovation - Sustainability (AGNI-S 2025)</strong> is scheduled from <strong>{confdate}</strong>.
          </p>
          <br />
          <p>
            📣 We welcome top-notch submissions from global researchers, academics, and professionals. Let your work shape the future of sustainability, innovation, and applied sciences.
          </p>
          <br />
          <p>
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
          
        </div>
        {paperSubmissionGuidelineLink !== "false" && (
          <a
            href={paperSubmissionGuidelineLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cfp-guideline-link" data-aos="zoom-in" data-aos-delay="300"
          >
            <span style={{ color: "#2563eb" }}>Click here</span> for paper submission guideline
          </a>
        )}
        <div className="btn-wrapper" data-aos="zoom-in" data-aos-delay="300">
          {submissionLink == "false" && (<div>Submission Portal  is not active now.</div>)}
          {submissionLink != "false" && (<a href={submissionLink} target="_blank" rel="noopener noreferrer" className="hero-btn glow-btn">🚀 Submission Portal</a>)}
        </div>

        <div className="conference-card" data-aos="fade-up" data-aos-delay="400">
          <Conference />
        </div>
      </div>
    </div>
  );
};

export default Authors;
