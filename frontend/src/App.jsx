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
import Events from '@components/Events/Events'
import Authors from '@components/Authors/Authors'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { useQuery,gql } from '@apollo/client'
import Themes from '@components/Themes/Themes'
import Publications from '@components/Publications/Publications'

function App() {
  // AOS (Animate On Scroll) initialization
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  

  return (
    <div className="flex flex-col min-h-screen bg-white">
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
          <Route path='/events' element={<Events/>}/>
          <Route path="/authors" element={<Authors />}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path='/themes' element={<Themes/>}/>
          <Route path='/publications' element={<Publications/>}/>
        </Routes>

    </main>
    <Footer/>
    </div>

  )
}

export default App;