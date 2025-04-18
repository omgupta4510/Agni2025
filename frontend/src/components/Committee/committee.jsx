import React from 'react';
import Navbar from '../Navbar/Navbar';
import Section from './Section';
import Header from '../Header/Header';

const data = {
    "Patron": [
      { name: "Prof. G. Aghila", role: "Chairman BoG and Director, MNIT Jaipur", img: "sir.jpg" },
    ],
    Patron: [
      { name: "N. P. Padhy", role: "Chairman BoG and Director, MNIT Jaipur", img: "sir.jpg" },
    ],
    "Honorary Chairs": [
      { name: "Andy Knight", role: "President, IEEE IAS, USA", img: "sir.jpg" },
      { name: "Ayman EL-Refaie", role: "President-elect, IEEE IAS, USA", img: "sir.jpg"},
      { name: "Brad Lehman", role: "President, IEEE PELS, USA", img: "sir.jpg"},
      { name: "Milos Manic", role: "President, IEEE IES, USA", img: "sir.jpg" },
      { name: "Shay Bahramirad", role: "President, IEEE PES, USA", img: "sir.jpg" },
    ],
    "General Chairs": [
      { name: "Akshay Kumar Rathore", role: "SIT Singapore", img: "sir.jpg" },
      { name: "Kapil Pareek", role: "MNIT Jaipur", img: "sir.jpg" },
      { name: "Sunanda Sinha", role: "MNIT Jaipur", img: "sir.jpg"},
    ],
    "Organizing Chairs": [
      { name: "Amartya Chowdhury", role: "role", img: "sir.jpg"},
      { name: "Aneesh Prabhakar", role: "role", img: "sir.jpg"},
      { name: "Parul Mathuria", role: "role", img:"sir.jpg"},
    ],
};

const Committee = () => {
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
                {Object.entries(data).map(([sectionTitle, members]) => (
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
