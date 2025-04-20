import React, { useEffect, useState } from "react";
import './Registration.css';
import { useQuery, gql } from "@apollo/client";

const REGISTRATION_DETAILS_QUERY = gql`
  query Query {
    registrationDetails {
      particulars
      native
      amt_early_bird
      amt_regular
    }
  }
`;

const GENERAL_INFORMATION_QUERY = gql`
  query Query($where: generalInformationWhereInput!) {
  generalInformations(where: $where) {
    name
    desc
  }
}
`;
console.log("here");

const RegistrationFee = () => {
  const [regdetails, setRegdetails] = useState({});
  const [earlyBirdDate, setEarlyBirdDate] = useState("");
  const [regularDate, setRegularDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { data: data1, loading: load1, error: err1 } = useQuery(REGISTRATION_DETAILS_QUERY);
  const { data: data2, loading: load2, error: err2 } = useQuery(GENERAL_INFORMATION_QUERY,{
    variables:{
      where:{
        name:{
          in:["Early bird dates", "Regular dates"]
        }
      }

    }
  });
  console.log(data2);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (data1 && data2) {
          // Process registration details
          const processedRegDetails = data1.registrationDetails.reduce((acc, item) => {
            if (!acc[item.native]) {
              acc[item.native] = [];
            }
            acc[item.native].push(item);
            return acc;
          }, {});
          setRegdetails(processedRegDetails);

          // Extract early bird and regular dates
          const earlyBird = data2.generalInformations.find(
            (info) => info.name === "Early bird dates"
          )?.desc;
          const regular = data2.generalInformations.find(
            (info) => info.name === "Regular dates"
          )?.desc;

          setEarlyBirdDate(earlyBird);
          setRegularDate(regular);
          setLoading(false);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [data1, data2]);

  if (load1 || load2 || loading) {
    return <div>Loading...</div>;
  }

  if (err1 || err2 || error) {
    return <div>Error: {err1?.message || err2?.message || error?.message}</div>;
  }
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
              { number: 2, desc: "For Early bird applicants Payment option will be available from " +  earlyBirdDate },
              { number: 3, desc: "For Regular applicants Payment option will be available from " + regularDate},
            ],
            "Payment Gateway": [
              { number: 1, desc: "Go to https://www.onlinesbi.sbi/sbicollect/" },
              { number: 2, desc: "Under 'Select Category' select 'Educational Institution' and the new page http://www.onlinesbi.sbi/sbicollect/payment/listinstitution.html"},
              { number: 3, desc: "In the filter by state' drop down menu, select 'Tamil Nade' and type 'NIT TRICHY' in the search for education institutions' search box." },
              { number: 4, desc: "Select 'CONFERENCE AND WORKSHOP NIT TRICHY'" },
              { number: 5, desc: "In the next screen payment category, select (Scroll down) -> AGNI-S" },
            ]
          };
          
  return (
    <div className="Reg-container">
      <div>
        <h2 className="headf">Registration Details</h2>
        {regdetails["indians"] && (
          <div className="fee-table-section">
            <h3 className="head1" style={{ color: "#3d9416" }}>For Indians</h3>
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Particulars of delegate</th>
                  <th>Early Bird ({earlyBirdDate})</th>
                  <th>Regular ({regularDate})</th>
                </tr>
              </thead>
              <tbody>
                {regdetails["indians"].map((index1) => (
                  <tr key={index1.particulars}>
                    <td>{index1.particulars}</td>
                    <td>Rs.{index1.amt_early_bird}</td>
                    <td>Rs.{index1.amt_regular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {regdetails["foreign"] && (
          <div className="fee-table-section">
            <h3 className="head1" style={{ color: "#3d9416" }}>For Foreign delegates</h3>
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Particulars of delegate</th>
                  <th>Early Bird ({earlyBirdDate})</th>
                  <th>Regular ({regularDate})</th>
                </tr>
              </thead>
              <tbody>
                {regdetails["foreign"].map((index) => (
                  <tr key={index.particulars}>
                    <td>{index.particulars}</td>
                    <td>${index.amt_early_bird}</td>
                    <td>${index.amt_regular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <br />
        {!regdetails && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button className="btn">Registration</button>
          </div>
        )}
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