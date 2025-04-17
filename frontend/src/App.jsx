import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import About from './components/About/AboutOrganizers'
import AboutOrganizers from './components/About/AboutOrganizers'
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
    <>
    
    <Navbar />
    
    <AboutOrganizers />
    </>
    
  )
}

export default App
