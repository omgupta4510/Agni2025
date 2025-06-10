import Header from "@components/Header/Header";
import React from "react";
import '../Publications/Publications.css';
import { FaUser } from "react-icons/fa"; 
import { gql, useQuery } from "@apollo/client";

const Publications=()=>{
    const {loading,error, data}=useQuery(gql`
        query Query {
            publications {
                name
                desc
                photoUrl
                link
                linkname
            }
            }
    `);
    
    if(loading)return <div>Loading...</div>
    if(error)return <div>Error..</div>
    
  if(!data)return <div>NO data</div>
    const publicationdata=data?.publications;
    
    return(
        <div className="publication-page">
            <Header/>
            <div className="publication-page-start">
                <h1 className="publication-page-title">Publications-Details</h1>
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
                {publicationdata.length==0 && (<h1 className="flex flex-col items-center">Yet to be Announced...</h1>)}
                {publicationdata && (publicationdata.map((item, index) => (
                    <div
                    className={`publication-block ${index % 2 !== 0 ? 'reverse' : ''}`}
                    key={index}
                    data-aos="zoom-out-right"
                    >
                    <div className="publication-image">
                        <img src={item.photoUrl} alt={item.name} />
                    </div>
                    <div className="publication-content">
                        <div className="publication-details">
                            <h2 className="title">{item.name}</h2>
                            <p>{item.desc}</p>
                        </div>
                       <a href={item.link}   target="_blank"  rel="noopener noreferrer" >
                        <button className="publication-register-button">{item.linkname}</button>
                        </a>
                    </div>
                    </div>
                )))}
                </div>
        </div>
    );
};

export default Publications;