import Header from "@components/Header/Header";
import React from "react";
import '../Events/Events.css';
import { FaUser } from "react-icons/fa"; 

const Events=()=>{
    const data = [
        { name: "Wedding", photoUrl: "logonitt.png", desc: "Dipti Srinivasan is a Professor in the Department of Electrical & Computer Engineering, where she also heads the Centre for Green Energy Management & Smart Grid (GEMS). Prior to joining NUS, Professor Srinivasan worked as a Postdoctoral Fellow at University of California at Berkeley from 1994 to 1995. She has published more than 400 papers in the field of smart grid and computational intelligence. Her current research focuses on the development of novel computational intelligence-based models and methodologies to aid the integration of the new Smart Grid technologies into the existing infrastructure so that power grid can effectively utilize pervasive renewable energy generation and demand-side management programs, while accommodating stochastic load demand.", registerlink: "https://example.com/register"},
           { name: "Wedding", photoUrl: "logonitt.png", desc: "Dipti Srinivasan is a Professor in the Department of Electrical & Computer Engineering, where she also heads the Centre for Green Energy Management & Smart Grid (GEMS). Prior to joining NUS, Professor Srinivasan worked as a Postdoctoral Fellow at University of California at Berkeley from 1994 to 1995. She has published more than 400 papers in the field of smart grid and computational intelligence. Her current research focuses on the development of novel computational intelligence-based models and methodologies to aid the integration of the new Smart Grid technologies into the existing infrastructure so that power grid can effectively utilize pervasive renewable energy generation and demand-side management programs, while accommodating stochastic load demand.", registerlink: "https://example.com/register"},
           { name: "Wedding", photoUrl: "logonitt.png", desc: "Dipti Srinivasan is a Professor in the Department of Electrical & Computer Engineering, where she also heads the Centre for Green Energy Management & Smart Grid (GEMS). Prior to joining NUS, Professor Srinivasan worked as a Postdoctoral Fellow at University of California at Berkeley from 1994 to 1995. She has published more than 400 papers in the field of smart grid and computational intelligence. Her current research focuses on the development of novel computational intelligence-based models and methodologies to aid the integration of the new Smart Grid technologies into the existing infrastructure so that power grid can effectively utilize pervasive renewable energy generation and demand-side management programs, while accommodating stochastic load demand.", registerlink: "https://example.com/register"},
           { name: "Wedding", photoUrl: "logonitt.png", desc: "Dipti Srinivasan is a Professor in the Department of Electrical & Computer Engineering, where she also heads the Centre for Green Energy Management & Smart Grid (GEMS). Prior to joining NUS, Professor Srinivasan worked as a Postdoctoral Fellow at University of California at Berkeley from 1994 to 1995. She has published more than 400 papers in the field of smart grid and computational intelligence. Her current research focuses on the development of novel computational intelligence-based models and methodologies to aid the integration of the new Smart Grid technologies into the existing infrastructure so that power grid can effectively utilize pervasive renewable energy generation and demand-side management programs, while accommodating stochastic load demand.", registerlink: "https://example.com/register"},
           { name: "Wedding", photoUrl: "logonitt.png", desc: "Dipti Srinivasan is a Professor in the Department of Electrical & Computer Engineering, where she also heads the Centre for Green Energy Management & Smart Grid (GEMS). Prior to joining NUS, Professor Srinivasan worked as a Postdoctoral Fellow at University of California at Berkeley from 1994 to 1995. She has published more than 400 papers in the field of smart grid and computational intelligence. Her current research focuses on the development of novel computational intelligence-based models and methodologies to aid the integration of the new Smart Grid technologies into the existing infrastructure so that power grid can effectively utilize pervasive renewable energy generation and demand-side management programs, while accommodating stochastic load demand.", registerlink: "https://example.com/register"}
    ];
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
                {data.map((item, index) => (
                    <div
                    className={`event-block ${index % 2 !== 0 ? 'reverse' : ''}`}
                    key={index}
                    >
                    <div className="event-image">
                        <img src={item.photoUrl} alt={item.name} />
                    </div>
                    <div className="event-content">
                        <div className="event-details">
                            <h2 className="title">{item.name}</h2>
                            <p>{item.desc}</p>
                        </div>
                        <a href={item.registerlink}   target="_blank"  rel="noopener noreferrer" >
                        <button className="event-register-button"> <FaUser/>REGISTER NOW</button>
                        </a>
                    </div>
                    </div>
                ))}
                </div>
        </div>
    );
};

export default Events;