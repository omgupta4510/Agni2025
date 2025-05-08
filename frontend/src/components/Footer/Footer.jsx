import React from 'react';

const Footer = () => {
  return (
    <div className="w-full flex flex-col mt-10 ">
      {/* Image Row */}
      <div className="w-full flex flex-row p-0 m-0 gap-0 overflow-hidden ">
          <img
            src="footer_img.png"
            alt="Banner"
            className="w-full h-full object-contain object-left p-0 m-0"
          />
      </div>

      {/* Tight Footer */}
      <footer className="bg-green-100 p-2 py-6">
        <div className="flex justify-between items-center px-4 text-sm">
        <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="text-sm font-semibold">AGNI-S 2025</div>
            <div className="hidden md:block">|</div>
            <div className="text-sm">NIT-TRICHY</div>
          </div>

          {/* Center Link */}
          <div className="text-sm order-first md:order-none">
            <a href="https://www.linkedin.com/in/omgupta4510/">
              Developed by <strong>BlueAura</strong>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;