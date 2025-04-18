import React from 'react';
import './Speaker.css';
import { useQuery, gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';
const speakers = [
  {
    name: 'Prof. Dipti Srinivasan',
    title: 'Professor, Department of Electrical & Computer Engineering National University of Singapore',
    image: 'https://sefet.in/assets/speakers/2025/dipti_srinivasan.jpg',
    bio: 'Dipti Srinivasan is a Professor in the Department of Electrical & Computer Engineering, where she also heads the Centre for Green Energy Management & Smart Grid (GEMS). Prior to joining NUS, Professor Srinivasan worked as a Postdoctoral Fellow at University of California at Berkeley from 1994 to 1995. She has published more than 400 papers in the field of smart grid and computational intelligence. Her current research focuses on the development of novel computational intelligence-based models and methodologies to aid the integration of the new Smart Grid technologies into the existing infrastructure so that power grid can effectively utilize pervasive renewable energy generation and demand-side management programs, while accommodating stochastic load demand.',
  },
  {
    name: 'Prof. Kouki Matsuse',
    title: 'Professor, Graduate school of Science and Technology Meiji University, Japan',
    image: 'https://sefet.in/assets/speakers/2025/kouki_matsuse.jpg',
    bio: 'Dr. Matsuse received his B.E., M.E., and Ph.D. degree in electrical Engineering from Meiji University, Tokyo, Japan in 1966, 1968, and 1971. He started his teaching journey from Meiji University in 1971 as a lecturer and promoted to Professor in 1979. He has been Professor Emeritus of Meiji University since 2014. He has also worked with some universities from China and USA.He has authored or co-authored 102 IEEE transaction papers and 230 International full-conference papers. He also hold 17 patents including four US patents and two European patents.His research areas include Power electronics, semiconductor electric conversion, Electric vehicle drive system, High speed high power motor drives.',
  },
  {
    name: 'Prof. D. Yogi Goswami',
    title: 'Distinguished Professor and Director of the Clean Energy Research Center University of South Florida',
    image: 'https://sefet.in/assets/speakers/2025/yogi_goswami.jpg',
    bio: 'Dr. Goswami received his Bachelors of Science from University of Delhi, India and then his Masters of Science & PhD from Auburn University, Auburn, Alabama. He started his career from North Carolina A&T State University in 1977 as an Assistant Professor and promoted to associate prof in 1981 and to professor in 1985. He joined University of Florida in 2005 and is currently a distinguished professor and the director of the Clean Energy Research Center. He has received several awards including Farrington Daniels Award from ISES, Frank Kreith Energy Award and John Yellott Award for Solar Energy from ASME. He has published 23 books, 400+ papers and holds 42 patents in the field of Energy. He developed a new combined Power and cooling Cycle, now known as Goswami Cycle, which has resulted in global research in a new class of Combined Cycles with multiple outputs. He pioneered the development of photo-electrochemical oxidation (PECO). His research interests include Concentrating solar power, Photocatalytic detoxification/disinfection technologies, Indoor air quality, Smart materials (Thermochromics and Electrochromics), Building energy modeling (BEM), Design of solar plants on reclaimed land, Energy storage (phase change materials, thermal storage, batteries, supercapacitors), New efficient thermodynamic cycles, Photovoltaics, Solar water desalination and distillation.',
  },
  {
    name: 'Prof. D. Yogi Goswami',
    title: 'Distinguished Professor and Director of the Clean Energy Research Center University of South Florida',
    image: 'https://sefet.in/assets/speakers/2025/yogi_goswami.jpg',
    bio: 'Dr. Goswami received his Bachelors of Science from University of Delhi, India and then his Masters of Science & PhD from Auburn University, Auburn, Alabama. He started his career from North Carolina A&T State University in 1977 as an Assistant Professor and promoted to associate prof in 1981 and to professor in 1985. He joined University of Florida in 2005 and is currently a distinguished professor and the director of the Clean Energy Research Center. He has received several awards including Farrington Daniels Award from ISES, Frank Kreith Energy Award and John Yellott Award for Solar Energy from ASME. He has published 23 books, 400+ papers and holds 42 patents in the field of Energy. He developed a new combined Power and cooling Cycle, now known as Goswami Cycle, which has resulted in global research in a new class of Combined Cycles with multiple outputs. He pioneered the development of photo-electrochemical oxidation (PECO). His research interests include Concentrating solar power, Photocatalytic detoxification/disinfection technologies, Indoor air quality, Smart materials (Thermochromics and Electrochromics), Building energy modeling (BEM), Design of solar plants on reclaimed land, Energy storage (phase change materials, thermal storage, batteries, supercapacitors), New efficient thermodynamic cycles, Photovoltaics, Solar water desalination and distillation.',
  },
];

const Speaker = () => {
  const location = useLocation();
  console.log(location);
  const speakertype=location.search.replace('?', '').replace('%20', ' ');
  console.log(speakertype);
  
  const {loading, error, data} = useQuery(gql`
    query Query($where: speakersWhereInput!) {
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
    <div className="speaker-page-alt">
      <h1 className="speaker-heading">Speakers</h1>
      {speakers.length === 0 && (
        <div className="no-speaker">yet to be announced...</div>
      )}
      {speakers.map((speaker, index) => (
        <div
          className={`speaker-row ${index % 2 === 0 ? 'row-normal' : 'row-reverse'}`}
          key={index}
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
  );
};

export default Speaker;
