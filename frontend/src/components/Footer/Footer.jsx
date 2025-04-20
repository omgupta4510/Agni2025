import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="flex justify-start nit">
        <img src="c1.PNG" alt="Logo" className="nitlogo" style={{
          height:'184px',
          width:'1309px',
           margin: '3px 1px 0px 1px'
        }} />
        <img src='agni.png' style={{height:'184px', width:'209px'}}/>
      </div> 
    <footer className="bg-green-100 text-black text-center py-4">
      <div className="max-w-4xl mx-auto">
      <p className="text-sm">Agni-S © 2025</p>
      <br />
      <p className="text-sm">NIT-TRICHY</p>
        <div className="mt-4 space-x-6">
          <a href="#" className="text-green-600 hover:underline font-semibold">Privacy Policy</a>
          <a href="#" className="text-green-600 hover:underline font-semibold">Terms of Service</a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
