import Header from "@components/Header/Header";
import React from "react";
import '../Events/Events.css';
import { FaUser } from "react-icons/fa"; 
import { gql, useQuery } from "@apollo/client";

const Events=()=>{
    const {loading,error, data}=useQuery(gql`
        query Query {
            eventDetails {
                name
                desc
                photoUrl
                link
            }
            }
    `);
    if(loading)return <div>Loading...</div>
    if(error)return <div>Error..</div>
    const eventdata=data?.eventDetails;
    return(
        <div className="event-page">
            <Header/>
            <div className="event-page-start">
                <h1 className="event-page-title">Events-Details & Registration</h1>
                <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem', 
            textAlign: 'center', 
            color: '#333', 
            fontFamily:'cursive',
            background: '#d9f3d2' 
            
            }}>
            </h2>
                {!eventdata && (<h1>Yet to be Announced...</h1>)}
                {eventdata && (eventdata.map((item, index) => (
                    <div
                    className={`event-block ${index % 2 !== 0 ? 'reverse' : ''}`}
                    key={index}
                    data-aos="zoom-out-right"
                    >
                    <div className="event-image">
                        <img src={item.photoUrl} alt={item.name} />
                    </div>
                    <div className="event-content">
                        <div className="event-details">
                            <h2 className="title">{item.name}</h2>
                            <p>{item.desc}</p>
                        </div>
                        <a href={item.link}   target="_blank"  rel="noopener noreferrer" >
                        <button className="event-register-button"> <FaUser/>REGISTER NOW</button>
                        </a>
                    </div>
                    </div>
                )))}
                </div>
        </div>
    );
};

export default Events;