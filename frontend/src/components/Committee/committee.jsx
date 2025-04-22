import React, { use } from 'react';
import Navbar from '../Navbar/Navbar';
import Section from './Section';
import Header from '../Header/Header';
import { useQuery, gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';


const Committee = () => {
  const location=useLocation();
  const committeeType=location.search.replace('?', '').replace('%20', ' ');
  let categorizedData =[];
  if(committeeType==="Organising Committee"){
    const { loading, error, data } = useQuery(gql`
      query Query {
        organizingCommittees {
          name
          category
          designation
          dept
          photoUrl
        }
      }
    `);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (data?.organizingCommittees.length === 0) {
      categorizedData = []; // No data available
    }
    else{ 
      categorizedData = data?.organizingCommittees.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = []; // Initialize the category if it doesn't exist
        }
        acc[item.category].push(item); // Add the member to the category
        return acc;
      }, {});
    }
  }
  else{
    const { loading, error, data } = useQuery(gql`
      query Query {
  technicalCommittees {
    name
    designation
    dept
  }
}
    `);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (data?.technicalCommittees.length === 0) {
      categorizedData = []; // No data available
      
    }
    else{
      categorizedData = data?.technicalCommittees.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = []; // Initialize the category if it doesn't exist
        }
        acc[item.category].push(item); // Add the member to the category
        return acc;
      }, {});
    }
  }
    
    
    
        
  return (
    <div className="min-h-screen bg-white pt-20"> 
        <div className="relative w-full">
            <Navbar /> 
            <Header/>
        </div>

        <div className="text-center font-bold bg-green-500 text-white p-4 text-xl sm:text-2xl">  {/* Adjusted text size */}
            {committeeType}
        </div>

        <section className="py-8 sm:py-16 bg-white"> {/* Adjusted padding for smaller screens */}
            <div className="p-4 sm:p-6 max-w-6xl mx-auto">
              {categorizedData.length === 0 && (
                <div className="text-center text-gray-500 text-lg">yet to be announced...</div>)}
                {Object.entries(categorizedData).map(([sectionTitle, members]) => (
                    <Section 
                        key={sectionTitle} 
                        title={sectionTitle} 
                        members={members} 
                        containerClass="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" // Responsive grid
                    />
                ))}
            </div>
        </section>
    </div>
  );
};

export default Committee;
