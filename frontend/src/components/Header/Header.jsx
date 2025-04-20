import React from "react";
const Header=()=>{
    return (
        <div className="bg-white  shadow-md px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Logo */}
          <img
            src="agni.png"
            alt="agni 2025 Logo"
            className="h-[15rem] w-[auto] object-contain"
          />
    
          {/* Center Content */}
          <div className="text-center flex-1">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-600"  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.2)"}}>
                International Conference on Advances in Green,
            </h1>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-600"  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.2)"}}>
                 Net-Zero, Innovation - Sustainability
            </h1>
            <h2 className="text-[30px] font-semibold text-green-600 mt-1"  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)"}}>
               AGNI-S 2025
            </h2>
            <p className="text-[23px] text-gray-800 mt-4 font-medium">
              15 Dec- 17 Dec, 2025
            </p>
            <p className="text-[25px] text-gray-800 font-medium">
               Trichy ,Tamil Nadu,India
            </p>
          </div>
    
          {/* Right Logo */}
          <img
            src="nitlogo1.png"
            alt="NIT Trichy"
            className="h-[13rem] w-[auto] object-contain"
          />
        </div>
      );
};

export default Header;