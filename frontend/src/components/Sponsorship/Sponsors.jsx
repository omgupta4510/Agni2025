import React from 'react';
import { useQuery, gql } from '@apollo/client';

const Sponsors = () => {
  const { loading, error, data } = useQuery(gql`
    query Query {
      sponsors {
        name
        logoUrl
        website
      }
    }
  `);

  if (loading) return <div className="text-center py-10">Loading sponsors...</div>;
  if (error) return null;
  if (!data?.sponsors?.length) return null;

  return (
    <section className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Our Sponsors</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {data.sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.website || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img
              src={sponsor.logoUrl}
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
};

export default Sponsors;
