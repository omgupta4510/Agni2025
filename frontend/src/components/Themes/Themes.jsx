
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useQuery,gql } from '@apollo/client';

import { CheckCircle } from 'lucide-react';
const Themes = () => {
    const Subtheme_Query=gql`
    query Subthemes {
      subthemes {
        number
        desc
      }
    }
    `;
    const {loading,error,data}=useQuery(Subtheme_Query);
      if(loading){
        return <div>Loading....</div>;
      }
      if(error){
        return <div>Error</div>
      }
      console.log(data);
      const subThemesData = data?.subthemes?.slice().sort((a, b) => a.number - b.number);
      console.log(subThemesData);
      
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Image Section */}
      <div className="relative h-[60vh] w-full">
       <Navbar />
        <img
            src="nitt.jpeg"
            alt="Solar panels under blue sky"
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                AGNI-S 2025 Themes
            </h1>
            </div>
        </div>
        <section className="relative px-4 py-16 md:px-8 lg:px-10 bg-white shadow-2xl shadow-green-200 rounded-xl border border-green-500 min-h-screen">
          {/* Sub-Themes Heading with Rounded Styling */}
          <div className="relative flex justify-center mb-12">
            <h2 className="relative z-10 px-8 py-3 text-3xl font-bold text-green-700 bg-white rounded-full border border-green-300">
              AGNI-S Sub-Themes
            </h2>

            {/* Vertical Line (full height, starting from the top of the section) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-green-500 z-0 h-full rounded-sm" />
          </div>

          {/* Timeline Items */}
          <div className="relative z-10">
            <div className="flex flex-col gap-5">
              {subThemesData.map((theme, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center md:items-start gap-3 md:gap-8`}
                  data-aos="fade-up"
                  style={{ marginBottom: index === subThemesData.length - 1 ? 0 : '12px' }} // Remove margin for the last item
                >
                  <div className="w-full md:w-1/2 px-4 md:px-8">
                    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="text-green-600" />
                        <p className="text-gray-800 text-lg font-medium">{theme.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

    </div>
  );
};

export default Themes;