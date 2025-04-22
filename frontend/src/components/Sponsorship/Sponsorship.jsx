import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import SponsorshipTable from './SponshorshipTable';
import { useQuery, gql } from '@apollo/client';
// const sponsorshipData = [
//   {
//     type: 'Platinum',
//     amount: 1500000,
//     delegates: 15,
//     stallarea: 400,
//     backdropBanner: true,
//     presentationSlot: true,
//     addvertisement: 'Full Page',
//   },
//   {
//     type: 'Support',
//     amount: 100000,
//     delegates: 2,
//     stallarea: 0,
//     backdropBanner: true,
//     presentationSlot: false,
//     addvertisement: 'Quarter Page',
//   },
//   {
//     type: 'Support',
//     amount: 100000,
//     delegates: 2,
//     stallarea: 0,
//     backdropBanner: true,
//     presentationSlot: false,
//     addvertisement: 'Quarter Page',
//   },{
//     type: 'Support',
//     amount: 100000,
//     delegates: 2,
//     stallarea: 0,
//     backdropBanner: true,
//     presentationSlot: false,
//     addvertisement: 'Quarter Page',
//   },{
//     type: 'Support',
//     amount: 100000,
//     delegates: 2,
//     stallarea: 0,
//     backdropBanner: true,
//     presentationSlot: false,
//     addvertisement: 'Quarter Page',
//   },
// ]
const Sponsorship = () => {
  const {loading,error, data} = useQuery(gql`
    query Query($where: generalInformationWhereInput!) {
  generalInformations(where: $where) {
    name
    desc
  }
}
    `,{variables:{where:{name:{equals:"sponsorshipclause"}}}});
    
    if(loading){
      return <div>Loading...</div>;
    }else if(error){
      return <div>Error: {error.message}</div>;
    }
    
  if(!data)return <div>NO data</div>
    const clause= data?.generalInformations[0].desc;
    return (
      <div className="min-h-screen flex flex-col bg-white pt-20">
        <div className="relative w-full">
          <Header />
        </div>
  
        <div className="text-center font-bold bg-blue-300 text-white p-4 text-xl sm:text-2xl">
          Sponsorship Details
        </div>
  
        {/* Main Content Container */}
        <div className="flex-grow bg-white text-gray-900">
          <SponsorshipTable  />
  
          <div className="bg-gray-50 px-4 sm:px-8 lg:px-16 py-8 mt-6 border-t border-gray-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Note to the Sponsors:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
              <li>
                Sponsorship may be made directly to NITT via RTGS/NEFT/Cheque/Demand Draft.
              </li>
              <li>No provisions are made in SBI i-Collect.</li>
              {clause!="NA" && (<li>{clause}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  

export default Sponsorship;

