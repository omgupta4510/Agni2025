import React from "react";
const Header=()=>{
    return (
        <div className="bg-white  shadow-md px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Logo */}
          <img
            src=""
            alt="agni 2025 Logo"
            className="h-30 w-30 object-contain"
          />
    
          {/* Center Content */}
          <div className="text-center flex-1">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-600">
                International Conference on Advances in Green,
            </h1>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-600">
                 Net-Zero, Innovation - Sustainability
            </h1>
            <h2 className="text-[20px] font-semibold text-green-600 mt-1">
               AGNI-S 2025
            </h2>
            <p className="text-[23px] text-gray-700 mt-4 font-medium">
              15 Dec- 17 Dec, 2025
            </p>
            <p className="text-[25px] text-gray-700 font-medium">
               Trichy ,Tamil Nadu,India
            </p>
          </div>
    
          {/* Right Logo */}
          <img
            src="download.png"
            alt="NIT Trichy"
            className="h-30 object-contain"
          />
        </div>
      );
};

export default Header;