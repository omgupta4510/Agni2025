import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {  Route, Router, Routes } from 'react-router-dom'
import About from './components/About/AboutOrganizers'
import Home from './components/Home/Home'
import ImportantDates from './components/ImportantDates/ImportantDates'
import Committee from './components/Committee/committee'
import Speaker from './components/Speaker/Speaker'
import VenueContact from './components/VenueContact/VenueContact'
import Footer from './components/Footer/Footer'
import Registration from '@components/Registration/Registraion'
import Sponsorship from './components/Sponsorship/Sponsorship'
import BestPaperAwards from '@components/Award/paperAward'
import BestPosterAwards from '@components/Award/posterAward'
import Authors from '@components/Authors/Authors'

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
    <div className="flex flex-col min-h-screen foot">
              <Navbar />
    <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/dates" element={<ImportantDates/>}/>
          <Route path="/speaker" element={<Speaker/>}/>
          <Route path="/committee" element={<Committee/>}/>
          <Route path="/venuecontact" element={<VenueContact/>}/>
          <Route path="/sponshorship" element={<Sponsorship/>}/>
          <Route path="/paperaward" element={<BestPaperAwards/>} />
          <Route path="/posteraward" element={<BestPosterAwards/>} />
          <Route path="/authors" element={<Authors/>}/>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
       
    </main>
    <div className="flex justify-start nit">
        <img src="c1.PNG" alt="Logo" className="nitlogo" style={{
          height:'184px',
          width:'1309px',
           margin: '3px 1px 0px 1px'
        }} />
        <img src='agni.png' style={{height:'184px', width:'209px'}}/>
      </div>
    <Footer/>
    </div>
    
  )
}

export default App
