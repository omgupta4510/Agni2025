import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import About from './components/About/AboutOrganizers';
import Home from './components/Home/Home';
import ImportantDates from './components/ImportantDates/ImportantDates';
import Committee from './components/Committee/committee';
import Speaker from './components/Speaker/Speaker';
import VenueContact from './components/VenueContact/VenueContact';
import Sponsorship from './components/Sponsorship/Sponsorship';
import BestPaperAwards from '@components/Award/PaperAward';
import BestPosterAwards from '@components/Award/PosterAward';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0);

  // AOS (Animate On Scroll) initialization
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dates" element={<ImportantDates />} />
        <Route path="/speaker" element={<Speaker />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/venuecontact" element={<VenueContact />} />
        <Route path="/sponshorship" element={<Sponsorship />} />
        <Route path="/paperaward" element={<BestPaperAwards />} />
        <Route path="/posteraward" element={<BestPosterAwards />} />
      </Routes>
    </main>
  );
}

export default App;
