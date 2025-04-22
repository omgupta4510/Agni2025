import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="flex justify-start nit">
        <img src="c1.PNG" alt="Logo" className="nitlogo" style={{
          height: '184px',
          width: '1309px',
          margin: '3px 1px 0px 1px'
        }} />
        <img src='agni.png' style={{ height: '184px', width: '209px' }} />
      </div>
      <footer className="bg-green-100 text-black py-4">
        <div className="max-w-8xl mt-2 mb-0 flex flex-col md:flex-row items-center justify-between px-8 gap-y-">
          <div className="text-sm font-semibold">
            Agni-S © 2025
          </div>

          <div className="space-x-6 text-center">
            <a href="https://www.linkedin.com/in/omgupta4510/" >
            Made with 💙 by <strong>BlueAura</strong></a>
          </div>

          <div className="text-sm font-semibold">
            NIT-Trichy
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
