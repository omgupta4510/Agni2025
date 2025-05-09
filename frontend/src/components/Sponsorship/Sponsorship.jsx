import React from 'react';
import Header from '../Header/Header';
import SponsorshipTable from './SponshorshipTable';
import { useQuery, gql } from '@apollo/client';

const Sponsorship = () => {
  const { loading, error, data } = useQuery(gql`
    query Query($where: generalInformationWhereInput!) {
      generalInformations(where: $where) {
        name
        desc
      }
    }
  `, {
    variables: { where: { name: { equals: "sponsorshipclause" } } }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  const clause = data?.generalInformations[0].desc;

  return (
    // 👇 This wraps the full height and ensures it pushes footer
    <div className="flex flex-col min-h-full flex-grow bg-white">
      {/* 👇 Adjust for fixed navbar height */}
      <div className="pt-20">
        <Header />
      </div>

      <div className="text-center font-bold bg-green-600 text-white p-4 text-xl sm:text-2xl">
        Sponsorship Details
      </div>

      {/* 👇 This ensures content stretches to bottom */}
      <div className="flex-grow">
        <SponsorshipTable />

        <div className="bg-gray-50 px-4 sm:px-8 lg:px-16 py-8 mt-6 border-t border-gray-300">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Note to the Sponsors:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>Sponsorship may be made directly to NITT via RTGS/NEFT/Cheque/Demand Draft.</li>
            <li>No provisions are made in SBI i-Collect.</li>
            {clause !== "NA" && <li>{clause}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
