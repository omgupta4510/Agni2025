import React from 'react';
import '../../App.css';

const sponsors = [
  {
    name: 'High Energy Batteries (India) Limited',
    logo: '/sponsers/HEB_logo.png',
    website: 'https://www.highenergy.co.in/'
  },
  {
    name: 'AMPeers',
    logo: '/sponsers/AMPeers_logo.png',
    website: 'https://www.ampeers.com/'
  }
];

const Sponsors = () => (
  <section className="py-10 bg-white">
    <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Our Sponsors</h2>
    <div className="flex flex-wrap justify-center gap-12">
      {sponsors.map((sponsor, idx) => (
        <a
          key={sponsor.name}
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <img
            src={sponsor.logo}
            alt={sponsor.name + ' logo'}
            className="h-32 object-contain mb-2 shadow-lg rounded bg-white p-2"
            style={{ maxWidth: 220 }}
          />
          <span className="font-semibold text-lg text-gray-700 text-center mt-2">
            {sponsor.name}
          </span>
        </a>
      ))}
    </div>
  </section>
);

export default Sponsors;
