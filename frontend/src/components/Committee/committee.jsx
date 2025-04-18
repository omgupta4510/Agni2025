import React from 'react';
import Navbar from '../Navbar/Navbar';
import Section from './Section';
import Header from '../Header/Header';
import { useQuery, gql } from '@apollo/client';



const Committee = () => {
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
    
      // Organize data into an object grouped by category
      const categorizedData = data?.organizingCommittees.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = []; // Initialize the category if it doesn't exist
        }
        acc[item.category].push(item); // Add the member to the category
        return acc;
      }, {});
    
      console.log(categorizedData);
    
        
  return (
    <div className="min-h-screen bg-white pt-20"> 
        <div className="relative w-full">
            <Navbar /> 
            <Header/>
        </div>

        <div className="text-center font-bold bg-green-500 text-white p-4 text-xl sm:text-2xl">  {/* Adjusted text size */}
            Organizing Committee
        </div>

        <section className="py-8 sm:py-16 bg-white"> {/* Adjusted padding for smaller screens */}
            <div className="p-4 sm:p-6 max-w-6xl mx-auto">
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
