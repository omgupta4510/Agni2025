import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {  Route, Router, Routes } from 'react-router-dom'
import About from './components/About/AboutOrganizers'
import Home from './components/Home/Home'
import ImportantDates from './components/ImportantDates/ImportantDates'
import Committee from './components/Committee/committee'
import Speaker from './components/Speaker/Speaker'
import Sponsorship from './components/Sponsorship/Sponsorship'
import VenueContact from './components/VenueContact/VenueContact'
function App() {
  const [count, setCount] = useState(0)
//   const {loading,error, data} = useQuery(gql`
//     query Query {
//   abouts {
//     id
//     title
//     description
//   }
// }`);
// console.log(data?.abouts);

  return (
    <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/dates" element={<ImportantDates/>}/>
          <Route path="/speaker" element={<Speaker/>}/>
          <Route path="/committee" element={<Committee/>}/>
          <Route path="/sponshorship" element={<Sponsorship/>}/>
          <Route path="/venuecontact" element={<VenueContact/>}/>
        </Routes>
    </main>
    
  )
}

export default App
