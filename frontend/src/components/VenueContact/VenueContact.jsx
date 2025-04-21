import React from 'react';
import Header from '../Header/Header';
import { Card, CardContent } from '../ui/card';
import { Mail, MapPin } from "lucide-react";
import TouristAttraction from '@components/TouristAttraction/TouristAttraction';
import { useQuery, gql } from '@apollo/client';

const VenueContact= () => {
    const {loading,error,data}=useQuery(gql`
    query Query($where: generalInformationWhereInput!) {
  generalInformations(where: $where) {
    name
    desc
  }
}
    `,{
        variables:{
            where:{
                name:{equals:"mailid"}
            }
        }
    });
    if(loading)return <div>Loading...</div>;
    if(error)return <div>Error...</div>;
    const mailid=data?.generalInformations[0].desc;
    return (
        <div className="min-h-screen flex flex-col bg-white pt-20">
        <div className="relative w-full">
          <Header />
        </div>
  
        <div className="text-center font-bold bg-blue-300 text-white p-4 text-xl sm:text-2xl">
           venue and contact details:
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-20 pr-20 pl-8 pb-0">
            {/* Contact Card */}
            <Card className="shadow-lg rounded-2xl" data-aos="fade-right">
                <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Contact</h2>
                <h3 className="text-lg font-bold">General Chairs  AGNI-S 2025 </h3>
                <p className="text-sm mb-2">National Institute of Technology Trichy</p>

                <div className="flex items-center mb-2">
                    <Mail className="w-4 h-4 mr-2 text-green-600" />
                    <a href="" className="text-green-600 hover:underline">
                        {mailid}
                    </a>
                </div>

                <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-600" />
                    <p className="text-sm"> National Institute of Technology, Tanjore Main Road, National Highway 67, Tiruchirappalli - 620 015, Tamil Nadu,India</p>
                </div>
                </CardContent>
            </Card>

            {/* Venue Card */}
            <Card className="shadow-lg rounded-2xl" data-aos="fade-left">
                <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Venue</h2>
                <div className="w-full h-64">
                    <iframe
                    title="NIT TRICHY"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.682453922274!2d78.81064317512272!3d10.758938089388844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8d47758e1ae1%3A0xb3e16389eeab05a!2sNational%20Institute%20of%20Technology%20Tiruchirappalli!5e0!3m2!1sen!2sin!4v1744993817415!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                </CardContent>
            </Card>
        </div>
        <TouristAttraction/>
    </div>
    );
  };
  

export default VenueContact;
