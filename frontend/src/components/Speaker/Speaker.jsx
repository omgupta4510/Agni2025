import React from 'react';
import './Speaker.css';
import { useQuery, gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import Header from '@components/Header/Header';


const Speaker = () => {
  const location = useLocation();
  console.log(location);
  const speakertype=location.search.replace('?', '').replace('%20', ' ');
  console.log(speakertype);
  
  const {loading, error, data} = useQuery(gql`
    query Query($where: speakerWhereInput!) {
  speakers(where: $where) {
    type
    name
    title
    bio
    photoUrl
  }
}
    `,{
      variables:{
        where:{
          type:{
            equals: speakertype
        }
      }
    }
});
    console.log(data);
    
    if(loading){
      return <div>Loading...</div>;
    } else if(error){
      return <div>Error: {error.message}</div>;
    } 
    const speakers = data?.speakers;
    console.log(speakers);
    
  return (
    <div className="speaker-page">
    <Header />
    <div className="speaker-page-alt"
     >
      
      <h1 className="speaker-heading">{speakertype}</h1>
      {speakers.length === 0 && (
        <div className="no-speaker">yet to be announced...</div>
      )}
      {speakers.map((speaker, index) => (
        <div
          className={`speaker-row ${index % 2 === 0 ? 'row-normal' : 'row-reverse'}`}
          key={index}
          data-aos="fade-up"
        >
          <div className="speaker-img">
            <img src={speaker.photoUrl} alt={speaker.name} />
          </div>
          <div className="speaker-info">
            <h2>{speaker.name}</h2>
            <h4>{speaker.title}</h4>
            <p>{speaker.bio}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Speaker;
