// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const slides = [
//   {
//     image: "nitt.png",
//     alt: "NIT TRIChY",
//   },
//   {
//   image: "ceesat2.jpeg",
//     alt: "NIT TRIChY",
//   },
//   {
//     image: "library.jpeg",
//     alt: "NIT TRIChY",
//   },
//   {
//     image: "orion.jpg",
//     alt: "NIT TRIChY",
//   },
// ];

// const HeroCarousel = () => {
//   return (
//     <section className="relative w-full h-[50vh]">
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showArrows
//         showThumbs={false}
//         showStatus={false}
//         interval={3000}
//         transitionTime={1000}
//         swipeable
//         emulateTouch
//         dynamicHeight={false} 
//         stopOnHover={false}
//         className="h-full"
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="relative h-[90vh]">
//             <img
//               src={slide.image}
//               alt={slide.alt}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/60" />
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
//               <img
//                 src="nitlogo1.png" // Replace with your logo file
//                 alt="Logo"
//                 className="w-16 h-16 object-contain mb-4" // Adjust size as needed
//               />
//               <h2 className="text-xl md:text-2xl font-medium">
//                 International Conference on
//               </h2>
//               <h1 className="text-3xl md:text-5xl font-extrabold mt-2 leading-tight">
//                  Advances in Green, Net-Zero
//                 <br />
//                 Innovation - Sustainability
//               </h1>
//               <p className="text-lg md:text-xl mt-4 font-semibold">
//                 AGNI-S 2025 <br /> 26–28 December, 2024
//               </p>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </section>
//   );
// };

// export default HeroCarousel;

import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slidesdata = [
  {
    photoUrl: "nitt.jpeg",
    name: "NIT Trichy",
    detail:true,
  },
  {
    photoUrl: "ceesat2.jpeg",
    name: "CEESAT Building",
    detail:true,
  },
  {
    photoUrl: "library.jpeg",
    name: "Library",
    detail:true,
  },
  {
    photoUrl: "orion.jpg",
    name: "Orion Building",
    detail:true,
  },
];

const HeroCarousel = () => {
  const {loading,error,data}=useQuery(gql`
  query Query {
  homeimages {
    name
    photoUrl
    detail
  }
}
    `);
    if(loading)return <div>Loading....</div>
    if(error)return <div>Error...</div>
    var slides=data?.homeimages;
    if(slides.length==0)slides=slidesdata;
    
  return (
    <section className="relative w-full mt-[96px]"> {/* Below fixed Navbar + NotificationBar */}
      <Carousel
        autoPlay
        infiniteLoop
        showArrows
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={2000}
        swipeable
        emulateTouch
        dynamicHeight={false}
        stopOnHover={false}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[75vh]">
            <img
              src={slide.photoUrl}
              alt={slide.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            {slide.detail && (<div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <img
                src="nitlogo1.png"
                alt="Logo"
                className="w-16 h-16 object-contain mb-4"
              />
              <h2 className="text-xl md:text-2xl font-medium">
                International Conference on
              </h2>
              <h1 className="text-3xl md:text-5xl font-extrabold mt-2 leading-tight">
                Advances in Green, Net-Zero
                <br />
                Innovation - Sustainability
              </h1>
              <p className="text-lg md:text-xl mt-4 font-semibold">
                AGNI-S 2025 <br /> 10–12 December, 2024
              </p>
            </div>)}
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
