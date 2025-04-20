import React from "react";
import './Registration.css';

const registrationData = {
    "Registration Details Indians":[
        { col1: "Academic presenter", col2: "10000", col3: "20000" },
  { col1: "Professional presenter", col2: "8500", col3: "15000" },
  { col1: "Student presenter", col2: "7500", col3: "10000" },
  { col1: "Student participant", col2: "5000", col3: "6000" }
    ],
    "Registration Details Foreign":[
        { col1: "Academic presenter", col2: "250", col3: "299" },
        { col1: "Professional presenter", col2: "225", col3: "265" },
        { col1: "Student presenter", col2: "175", col3: "222" },
        { col1: "Student participant", col2: "100", col3: "150" }
    ],
    "Registration Fee Includes": [
      { number: 1, desc: "Conference Kit" },
      { number: 2, desc: "Food and Snacks" },
      { number: 3, desc: "Transportation inside the campus" },
      { number: 4, desc: "Only One Paper Presentation is Allowed Under One Student Registration." },
      { number: 5, desc: "Maxiamum Two Paper Presentation are allowed under one full Delegate Registration." },
    ],
    "Registration Fee Payment": [
      { number: 1, desc: "Registration Fee can be made throughthe following steps to pay through SBI i-collect" },
      { number: 2, desc: "For Early bird applicants Payment option will be available from 8 Oct 2025 - 16 Oct 2025" },
      { number: 3, desc: "For Regular applicants Payment option will be available from 23 Oct 2025 - 30 Oct 2025" },
    ],
    "Payment Gateway": [
      { number: 1, desc: "Go to https://www.onlinesbi.sbi/sbicollect/" },
      { number: 2, desc: "Under 'Select Category' select 'Educational Institution' and the new page http://www.onlinesbi.sbi/sbicollect/payment/listinstitution.html"},
      { number: 3, desc: "In the filter by state' drop down menu, select 'Tamil Nade' and type 'NIT TRICHY' in the search for education institutions' search box." },
      { number: 4, desc: "Select 'CONFERENCE AND WORKSHOP NIT TRICHY'" },
      { number: 5, desc: "In the next screen payment category, select (Scroll down) -> AGNI-S" },
    ]
  };
  
  const RegistrationFee = () => {
    return (

      <div className="Reg-container">
        <div>
        <h2 className="headf">Registration Details</h2>
            <div className="fee-table-section">
      <h3 className="head1" style={{color: "#3d9416"}}>For Indians</h3>
      <table className="fee-table">
        <thead>
          <tr>
            <th>Particulars of delegate</th>
            <th>Early Bird (8-16 October, 2025)</th>
            <th>Regular (23-30 October, 2025)</th>
          </tr>
        </thead>
        <tbody>
          {registrationData["Registration Details Indians"].map((index1) => (
            <tr key={index1}>
              <td>{index1.col1}</td>
              <td>Rs.{index1.col2}</td>
              <td>Rs.{index1.col3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="fee-table-section">
      <h3 className="head1" style={{color: "#3d9416"}}>For Foreign delegates</h3>
      <table className="fee-table">
        <thead>
          <tr>
            <th>Particulars of delegate</th>
            <th>Early Bird (8-16 October, 2025)</th>
            <th>Regular (23-30 October, 2025)</th>
          </tr>
        </thead>
        <tbody>
          {registrationData["Registration Details Foreign"].map((index) => (
            <tr key={index}>
              <td>{index.col1}</td>
              <td>${index.col2}</td>
              <td>${index.col3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <br />
    <div style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
    <button className="btn">Registration</button>
    </div>
    </div>
    <br />
    <br />
        <div className="Reg-card">
          <h2 className="headf">Registration Fee Includes</h2>
          <ul className="det">
            {registrationData["Registration Fee Includes"].map((reg) => (
              <li key={reg.number}>
                  {reg.number}. {reg.desc}
              </li>
            ))}
          </ul>
        </div>
        <div className="Reg-card">
          <h2 className="headf">Registration Fee Payment</h2>
          <ul className="det">
            {registrationData["Registration Fee Payment"].map((reg1) => (
              <li key={reg1.number}>
                {reg1.number}. {reg1.desc}
              </li>
            ))}
          </ul>
        </div>
        <div className="Reg-card">
          <h2 className="headf">Payment Gateway</h2>
          <ul className="det">
            {registrationData["Payment Gateway"].map((reg2) => (
              <li key={reg2.number}>
                  {reg2.number}. {reg2.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  export default RegistrationFee;