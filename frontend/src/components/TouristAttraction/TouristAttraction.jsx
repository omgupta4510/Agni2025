import React from 'react';
import './TouristAttraction.css';
import { useQuery, gql } from '@apollo/client';

const dummyattractions = [
  {
    name: 'Gold Gopuram',
    location: 'Srirangam, Tamil Nadu, India',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwORpEMCi7uRAnVK64lcgYwv7yfCVo0uiIA&s',
    description:
      'The Gold Gopuram is the crown jewel of the Sri Ranganathaswamy Temple, one of the largest and most revered Hindu temples in the world. Located in Srirangam, the temple is dedicated to Lord Ranganatha (a reclining form of Vishnu) and is a marvel of Dravidian architecture.The Gold Gopuram, also known as the Rajagopuram, is adorned with intricate carvings and plated with gold that glistens under the sun, creating a majestic view visible from afar. It stands as a symbol of divine opulence and devotion, rising to nearly 72 meters (236 feet), making it one of the tallest temple towers in Asia. More than just a structure, it represents centuries of faith, art, and craftsmanship — drawing pilgrims, art lovers, and architecture enthusiasts from around the globe. ',
  },
  {
    name: 'Sri Ranganathaswamy Temple',
    location: 'Srirangam, Tamil Nadu, India',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwORpEMCi7uRAnVK64lcgYwv7yfCVo0uiIA&s',
    description: "'The Sri Ranganathaswamy Temple in Srirangam is not just a place of worship — it's a living, breathing testament to South India’s rich spiritual and architectural legacy. Spanning 156 acres, it is the largest functioning Hindu temple complex in the world, and one of the most important shrines dedicated to Lord Ranganatha, a reclining form of Lord Vishnu. The temple is surrounded by seven concentric walls (prakaras) and boasts 21 magnificent gopurams (temple towers), each intricately carved and painted, reflecting the grandeur of Dravidian architecture. At its heart lies the sanctum sanctorum housing the deity in a unique reclining posture, representing cosmic rest."
  },
  {
    name: 'Viralimalai Murugan Temple',
    location: 'Viralimalai, Tamil Nadu, India',
    image: 'https://ramyashotels.com/wp-content/uploads/2023/07/Viralimalai-Murugan-Temple-Ramyas-Hotel.jpg', // You can replace this with a better quality image if you have one
    description:
      'Perched atop a small hill, the Viralimalai Murugan Temple is a peaceful and historic shrine dedicated to Lord Muruga. It is believed to be more than a thousand years old and is one of the ancient Padal Petra temples. Surrounded by natural beauty and dense groves of peacocks, the temple offers not only spiritual solace but also scenic views of the region. The hilltop can be reached via a short climb of stone steps, and the tranquility of the area makes it ideal for meditation and devotion. The temple is also famous for its annual Panguni Uthiram festival, which draws pilgrims and cultural enthusiasts from across Tamil Nadu.',
  },

];


const TouristAttraction = () => {
  const { loading, error, data } = useQuery(gql`
    query Toursits {
    toursits {
      name
      location
      photoUrl
      desc
    }
  }`);
  if (loading) {
    return <div>Loading...</div>;
  }
  if(error)return <div>Error</div>
  if(!data)return <div>NO data</div>
  const attractions = data?.toursits;

  return (
    <div className="attractions-page">
      <h1 className="page-title">Tourist Attractions</h1>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1.5rem',
        textAlign: 'center',
        color: '#333',
        fontFamily: 'cursive',
        background: '#d9f3d2'

      }}>
        Trichy – Where Ancient Temples Meet Modern Marvels
      </h2>
      {attractions.map((item, index) => (
        <div
          className={`attraction-block ${index % 2 !== 0 ? 'reverse' : ''}`}
          key={index}
        >
          <div className="attraction-image">
            <img src={"/tourist/" + item.photoUrl} alt={item.name} />
          </div>
          <div className="attraction-details">
            <h2 className="title">{item.name}</h2>
            <h4>{item.location}</h4>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristAttraction;
