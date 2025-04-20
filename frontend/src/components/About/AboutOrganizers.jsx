
// File: src/pages/About.js
import React, { use } from 'react';
import Navbar from '../Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const AboutOrganizers = () => {
  const location=useLocation();
  const aboutpage=location.search.split("?")[1];
  console.log(aboutpage);
  const { loading, error, data } = useQuery(gql`
    query Query($where: aboutWhereInput!) {
  abouts(where: $where) {
    id
    title
    description
    link
  }
}
  `,{
    variables: { 
      where: {
        route: {
          equals: aboutpage
        }
      }
    }
  });
  
  if(loading){
    return <div>Loading...</div>;
  }else if(error){
    return <div>Error: {error.message}</div>;
  }
  const aboutData = data?.abouts[0];
  if(!aboutData) {
    return <div>No data found</div>;
  }
  console.log(aboutData);
  
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Image Section */}
      <div className="relative h-[60vh] w-full">
    
        <img
          src="nitt.jpeg"
          alt="Solar panels under blue sky"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            About {aboutData.title}
          </h1>
        </div>
      </div>

      {/* First About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Vision & Mission
            </h2>
            <div className="w-24 h-1 bg-solar-blue mb-8"></div>
            <p className="text-lg text-gray-600 mb-6">
              {aboutData.description}
            </p>
            {aboutData.link && (
              <div className="text-center">
              <a
                href={aboutData.link}
                className="inline-block bg-solar-green text-white py-2 px-4 rounded-lg hover:bg-solar-blue transition duration-300"
              >
                Learn More
              </a>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* Second About Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Impact & Legacy
            </h2>
            <div className="w-24 h-1 bg-solar-green mb-8"></div>
            <p className="text-lg text-gray-600 mb-6">
              Since our inception, the Solar World Congress has been at the forefront of solar 
              energy innovation and policy development. Our annual gatherings have led to 
              groundbreaking partnerships, technological breakthroughs, and meaningful 
              policy changes across the globe.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Through our network of industry leaders, researchers, and advocates, we've 
              helped facilitate the implementation of solar energy solutions in communities 
              worldwide, making clean energy more accessible and affordable for all.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-solar-blue mb-2">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-solar-green mb-2">50K+</div>
                <div className="text-gray-600">Global Attendees</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-solar-blue mb-2">100+</div>
                <div className="text-gray-600">Partner Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div> 
  );
};

export default AboutOrganizers;