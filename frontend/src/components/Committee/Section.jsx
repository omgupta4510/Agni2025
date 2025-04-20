import React from 'react';
const Section = ({ title, members }) => {
  console.log(title);
  
  return (
    <div className="mb-12">
    <h2 className="text-2xl font-bold mb-6 border-b pb-2 underline bg-color-blue-700 text-center">{title}</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border rounded-2xl shadow-lg shadow-green-500 p-6 w-[280px] bg-white transition-transform duration-300 hover:scale-105"
            data-aos="flip-left"
          >
            <img
              src={"/OC/"+member.photoUrl}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4"
            />
            <h3 className="font-semibold text-xl text-gray-900">{member.name}</h3>
            <p className="text-base text-gray-600">{member.dept}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
