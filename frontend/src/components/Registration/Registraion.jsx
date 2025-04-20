import React, { useState } from 'react';
import Header from '@components/Header/Header';
import './Registration.css';
import RegistrationFee from './RegistrationTable';

const Registration = () => {
  console.log("here");
  
  return (
    <div style={{paddingTop:"20px"}}>
        <div className="relative w-full">
          <Header />
        </div>
        <div>
            <RegistrationFee/>
          </div>
          <br />

</div>
  );
};

export default Registration;
