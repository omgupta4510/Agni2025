import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
