import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Venue from './venue';
import { Contact } from 'lucide-react';

const VenueContact= () => {
    return (
        <div className="min-h-screen flex flex-col bg-white pt-20">
            <div className="relative w-full">
                <Navbar />
                <Header />
            </div>
    
            <div className="text-center font-bold bg-blue-300 text-white p-4 text-xl sm:text-2xl">
               Venue and Contact Information
            </div>
            
            <div className="flex flex-col md:flex-row w-full gap-6">
                <div className="md:w-1/2">
                    <Contact />
                </div>
                <div className="md:w-1/2">
                    <Venue />
                </div>
            </div>   
      </div>
    );
  };
  
  

export default VenueContact;

