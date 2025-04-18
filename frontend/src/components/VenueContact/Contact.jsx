

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-6 w-full md:w-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact</h2>
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-1">
          General Chairs (SeFeT 2025)
        </h3>
        <p className="text-gray-600 mb-2">
          Malaviya National Institute of Technology, Jaipur
        </p>
      </div>
      <div className="flex items-center text-gray-600 mt-3">
        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
        <a
          href="mailto:ieee.sefet.2025@gmail.com"
          className="hover:text-blue-500"
        >
          ieee.sefet.2025@gmail.com
        </a>
      </div>
      <div className="flex items-center text-gray-600 mt-2">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
        <p>
          Jawahar Lal Nehru Marg, Jaipur - 302017 (Rajasthan), India
        </p>
      </div>
    </div>
  );
};

export default Contact;