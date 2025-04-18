import React from 'react';

const Venue = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-6 w-full md:w-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Venue</h2>
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-1">
          National Institute of Technology Trichy
        </h3>
        <a
          href="https://www.google.com/maps/place/Malaviya+National+Institute+of+Technology,+Jaipur/@26.917559,75.822933,17z/data=!3m1!4b1!4m6!3m5!1s0x396db6672c987197:0x2c521044a9799353!8m2!3d26.917559!4d75.822933!16s%2Fg%2F121w87r6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm"
        >
          View larger map
        </a>
      </div>
      <div className="mt-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.40482897799!2d75.822933!3d26.917559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6672c987197%3A0x2c521044a9799353!2sMalaviya+National+Institute+of+Technology%2C+Jaipur!5e0!3m2!1sen!2sin!4v1713461188484!5m2!1sen!2sin"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Venue;