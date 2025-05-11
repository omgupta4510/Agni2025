import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1400);
      if (window.innerWidth >= 1400) {
        setMenuOpen(false);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const closeDropdown = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setActiveDropdown(null);
    }
  };

  const closeAll = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const {
    loading: speakerload,
    error: speakererr,
    data: speakerdata,
  } = useQuery(gql`
    query Query {
      speakers {
        type
      }
    }
  `);

  if (!speakerdata) return <div className="text-center p-4">Loading...</div>;

  const uniqueSpeakerTypes = Array.from(
    new Set(speakerdata?.speakers.map((speaker) => speaker.type))
  );

  return (
    <nav className="rounded-xl fixed top-0 left-0 right-0 z-50 bg-white shadow-md text-black px-4 lg:px-6 flex items-center justify-between ">
      <div className="flex items-center justify-between w-full px-4 py-2">
        <div className="flex items-center space-x-2">
          <img
            src="logonitt.png"
            alt="Logo"
            className="h-12 md:h-14 rounded-full"
          />
          <img
            src="agni.png"
            alt="Logo"
            className="h-12 md:h-14 rounded-full"
          />
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
        <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 absolute lg:static bg-white left-0 right-0 top-full lg:top-auto shadow-lg lg:shadow-none lg:mt-0 p-4 lg:p-0 space-y-2 lg:space-y-0">
          <li className="group">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium transition-colors"
              onClick={closeAll}
            >
              Home
            </a>
          </li>

          <li
            className="group relative"
            onMouseEnter={
              !isMobile ? () => setActiveDropdown("about") : undefined
            }
            onMouseLeave={!isMobile ? closeDropdown : undefined}
          >
            <button
              onClick={() => handleDropdown("about")}
              className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium transition-colors w-full lg:w-auto justify-between lg:justify-start"
            >
              About
              <svg
                className={`ml-1 h-4 w-4 text-gray-500 transform transition-transform ${
                  activeDropdown === "about" ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeDropdown === "about" && (
              <ul className="lg:absolute lg:bg-white lg:rounded-lg lg:shadow-xl lg:border border-gray-100 p-2 space-y-1 lg:top-full lg:left-0 mt-1 lg:mt-0 min-w-[200px]">
                <li>
                  <a
                    href="/about?agnis"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                    onClick={closeAll}
                  >
                    About the AGNI-S
                  </a>
                </li>
                <li>
                  <a
                    href="/about?nittrichy"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                    onClick={closeAll}
                  >
                    About the NIT-Trichy
                  </a>
                </li>
                <li>
                  <a
                    href="/about?dee"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                    onClick={closeAll}
                  >
                    About the DEE
                  </a>
                </li>
                <li>
                  <a
                    href="/themes"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                    onClick={closeAll}
                  >
                    AGNI-S Theme
                  </a>
                </li>
                <li>
                  <a
                    href="/dates"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                    onClick={closeAll}
                  >
                    Important Dates
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className="group">
            <a
              href="/authors"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium transition-colors"
              onClick={closeAll}
            >
              Authors
            </a>
          </li>

          <li
            className="group relative"
            onMouseEnter={
              !isMobile ? () => setActiveDropdown("committees") : undefined
            }
            onMouseLeave={!isMobile ? closeDropdown : undefined}
          >
            <button
              onClick={() => handleDropdown("committees")}
              className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium transition-colors w-full lg:w-auto justify-between lg:justify-start"
            >
              Committees
              <svg
                className={`ml-1 h-4 w-4 text-gray-500 transform transition-transform ${
                  activeDropdown === "committees" ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeDropdown === "committees" && (
              <ul className="lg:absolute lg:bg-white lg:rounded-lg lg:shadow-xl lg:border border-gray-100 p-2 space-y-1 lg:top-full lg:left-0 mt-1 lg:mt-0 min-w-[200px]">
                <li>
                  <a
                    href="/committee?Organising Committee"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                    onClick={closeAll}
                  >
                    Organising Committee
                  </a>
                </li>
                <li>
                  <a
                    href="/committee?Technical Committee"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                    onClick={closeAll}
                  >
                    Technical Committee
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li
            className="group relative"
            onMouseEnter={
              !isMobile ? () => setActiveDropdown("awards") : undefined
            }
            onMouseLeave={!isMobile ? closeDropdown : undefined}
          >
            <button
              onClick={() => handleDropdown("awards")}
              className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium transition-colors w-full lg:w-auto justify-between lg:justify-start"
            >
              Awards
              <svg
                className={`ml-1 h-4 w-4 text-gray-500 transform transition-transform ${
                  activeDropdown === "awards" ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeDropdown === "awards" && (
              <ul className="lg:absolute lg:bg-white lg:rounded-lg lg:shadow-xl lg:border border-gray-100 p-2 space-y-1 lg:top-full lg:left-0 mt-1 lg:mt-0 min-w-[200px]">
                <li>
                  <a
                    href="/paperaward"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                    onClick={closeAll}
                  >
                    Best Paper Award
                  </a>
                </li>
                <li>
                  <a
                    href="/posteraward"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                    onClick={closeAll}
                  >
                    Best Poster Award
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li
            className="group relative"
            onMouseEnter={
              !isMobile ? () => setActiveDropdown("speakers") : undefined
            }
            onMouseLeave={!isMobile ? closeDropdown : undefined}
          >
            <button
              onClick={() => handleDropdown("speakers")}
              className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium transition-colors w-full lg:w-auto justify-between lg:justify-start"
            >
              Speakers
              <svg
                className={`ml-1 h-4 w-4 text-gray-500 transform transition-transform ${
                  activeDropdown === "speakers" ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeDropdown === "speakers" && (
              <ul className="lg:absolute lg:bg-white lg:rounded-lg lg:shadow-xl lg:border border-gray-100 p-2 space-y-1 lg:top-full lg:left-0 mt-1 lg:mt-0 min-w-[200px]">
                {uniqueSpeakerTypes.length === 0 ? (
                  <li className="px-3 py-2 text-gray-500">
                    Yet to be Announced..
                  </li>
                ) : (
                  uniqueSpeakerTypes.map((type, index) => (
                    <li key={index}>
                      <a
                        href={`/speaker?${type}`}
                        className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors"
                        onClick={closeAll}
                      >
                        {type}
                      </a>
                    </li>
                  ))
                )}
              </ul>
            )}
          </li>

          <li className="group">
            <a
              href="/events"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium transition-colors"
              onClick={closeAll}
            >
              Events
            </a>
          </li>

          <li className="group">
            <a
              href="/sponshorship"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium transition-colors"
              onClick={closeAll}
            >
              Sponsorship
            </a>
          </li>

          <li className="group">
            <a
              href="/publications"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium transition-colors"
              onClick={closeAll}
            >
              Publications
            </a>
          </li>

          <li className="group">
            <a
              href="/venuecontact"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium transition-colors"
              onClick={closeAll}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { useQuery, gql } from '@apollo/client';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//       if (window.innerWidth >= 1024) {
//         setMenuOpen(false);
//       }
//     };

//     handleResize(); // Set initial value
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleDropdown = (menu) => {
//     if (activeDropdown === menu) {
//       setActiveDropdown(null);
//     } else {
//       setActiveDropdown(menu);
//     }
//   };

//   const closeDropdown = () => {
//     if (!isMobile) {
//       setActiveDropdown(null);
//     }
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//     if (!menuOpen) {
//       setActiveDropdown(null);
//     }
//   };

//   const closeAll = () => {
//     setMenuOpen(false);
//     setActiveDropdown(null);
//   };

//   const { loading: speakerload, error: speakererr, data: speakerdata } = useQuery(gql`
//     query Query {
//       speakers {
//         type
//       }
//     }
//   `);

//   if (!speakerdata) return <div className="text-center p-4">Loading...</div>;

//   const uniqueSpeakerTypes = Array.from(new Set(speakerdata?.speakers.map((speaker) => speaker.type)));

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-inner shadow-green-100 text-black p-2 flex items-center justify-between px-4">
//       <div className="flex items-center space-x-2">
//         <img src="logonitt.png" alt="Logo" className="h-14 rounded-full" />
//         <img src="agni.png" alt="Logo" className="h-14 rounded-full" />
//       </div>

//       <div className="lg:hidden">
//         <button onClick={toggleMenu} className="text-black focus:outline-none">
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       <ul
//         className={`${
//           menuOpen ? 'flex' : 'hidden'
//         } flex-col lg:flex lg:flex-row lg:items-center lg:space-x-6 absolute lg:static bg-white left-0 right-0 top-full lg:top-auto lg:mt-0 p-4 lg:p-0 text-sm shadow-lg lg:shadow-none transition-all duration-300`}
//       >
//         <li className="py-2 lg:py-0">
//           <a href="/" className="hover:text-green-600 block" onClick={closeAll}>Home</a>
//         </li>

//         <li
//           className="relative py-2 lg:py-0"
//           onMouseEnter={!isMobile ? () => setActiveDropdown('about') : undefined}
//           onMouseLeave={!isMobile ? closeDropdown : undefined}
//         >
//           <button
//             onClick={() => handleDropdown('about')}
//             className="flex items-center hover:text-green-600 w-full lg:w-auto justify-between lg:justify-start"
//           >
//             About <span className="ml-1 text-gray-500">▼</span>
//           </button>
//           {activeDropdown === 'about' && (
//             <ul className="lg:absolute lg:bg-white lg:rounded-md lg:shadow-md p-2 space-y-1 lg:top-full lg:left-0 mt-1 lg:mt-0">
//               <li><a href="/about?agnis" className="hover:text-green-600 block py-1" onClick={closeAll}>About the AGNI-S</a></li>
//               <li><a href="/about?nittrichy" className="hover:text-green-600 block py-1" onClick={closeAll}>About the NIT-Trichy</a></li>
//               <li><a href="/about?dee" className="hover:text-green-600 block py-1" onClick={closeAll}>About the DEE</a></li>
//               <li><a href="/themes" className="hover:text-green-600 block py-1" onClick={closeAll}>AGNI-S Theme</a></li>
//               <li><a href="/dates" className="hover:text-green-600 block py-1" onClick={closeAll}>Important Dates</a></li>
//             </ul>
//           )}
//         </li>

//         <li className="py-2 lg:py-0">
//           <a href="/authors" className="hover:text-green-600 block" onClick={closeAll}>Authors</a>
//         </li>

//         <li
//           className="relative py-2 lg:py-0"
//           onMouseEnter={!isMobile ? () => setActiveDropdown('committees') : undefined}
//           onMouseLeave={!isMobile ? closeDropdown : undefined}
//         >
//           <button
//             onClick={() => handleDropdown('committees')}
//             className="flex items-center hover:text-green-600 w-full lg:w-auto justify-between lg:justify-start"
//           >
//             Committees <span className="ml-1 text-gray-500">▼</span>
//           </button>
//           {activeDropdown === 'committees' && (
//             <ul className="lg:absolute lg:bg-white lg:rounded-md lg:shadow-md p-2 space-y-1 lg:top-full lg:left-0 mt-1 lg:mt-0">
//               <li><a href="/committee?Organising Committee" className="hover:text-green-600 block py-1" onClick={closeAll}>Organising Committee</a></li>
//               <li><a href="/committee?Technical Committee" className="hover:text-green-600 block py-1" onClick={closeAll}>Technical Committee</a></li>
//             </ul>
//           )}
//         </li>

//         <li
//           className="relative py-2 lg:py-0"
//           onMouseEnter={!isMobile ? () => setActiveDropdown('awards') : undefined}
//           onMouseLeave={!isMobile ? closeDropdown : undefined}
//         >
//           <button
//             onClick={() => handleDropdown('awards')}
//             className="flex items-center hover:text-green-600 w-full lg:w-auto justify-between lg:justify-start"
//           >
//             Awards <span className="ml-1 text-gray-500">▼</span>
//           </button>
//           {activeDropdown === 'awards' && (
//             <ul className="lg:absolute lg:bg-white lg:rounded-md lg:shadow-md p-2 space-y-1 lg:top-full lg:left-0 mt-1 lg:mt-0">
//               <li><a href="/paperaward" className="hover:text-green-600 block py-1" onClick={closeAll}>Best Paper Award</a></li>
//               <li><a href="/posteraward" className="hover:text-green-600 block py-1" onClick={closeAll}>Best Poster Award</a></li>
//             </ul>
//           )}
//         </li>

//         <li
//           className="relative py-2 lg:py-0"
//           onMouseEnter={!isMobile ? () => setActiveDropdown('speakers') : undefined}
//           onMouseLeave={!isMobile ? closeDropdown : undefined}
//         >
//           <button
//             onClick={() => handleDropdown('speakers')}
//             className="flex items-center hover:text-green-600 w-full lg:w-auto justify-between lg:justify-start"
//           >
//             Speakers <span className="ml-1 text-gray-500">▼</span>
//           </button>
//           {activeDropdown === 'speakers' && (
//             <ul className="lg:absolute lg:bg-white lg:rounded-md lg:shadow-md p-2 space-y-1 lg:top-full lg:left-0 mt-1 lg:mt-0">
//               {uniqueSpeakerTypes.length === 0 ? (
//                 <li className="text-black py-1">Yet to be Announced..</li>
//               ) : (
//                 uniqueSpeakerTypes.map((type, index) => (
//                   <li key={index}>
//                     <a href={`/speaker?${type}`} className="hover:text-green-600 block py-1" onClick={closeAll}>{type}</a>
//                   </li>
//                 ))
//               )}
//             </ul>
//           )}
//         </li>

//         <li className="py-2 lg:py-0">
//           <a href="/events" className="hover:text-green-600 block" onClick={closeAll}>Events</a>
//         </li>
//         <li className="py-2 lg:py-0">
//           <a href="/sponshorship" className="hover:text-green-600 block" onClick={closeAll}>Sponsorship</a>
//         </li>
//         <li className="py-2 lg:py-0">
//           <a href="/publications" className="hover:text-green-600 block" onClick={closeAll}>Publications</a>
//         </li>
//         <li className="py-2 lg:py-0">
//           <a href="/venuecontact" className="hover:text-green-600 block" onClick={closeAll}>Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
