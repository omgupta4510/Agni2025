import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client'
import Navbar from './components/Navbar/Navbar'
function App() {
  const [count, setCount] = useState(0)
  const {loading,error, data} = useQuery(gql`
    query Query {
  abouts {
    id
    title
    description
  }
}`);
console.log(data?.abouts);

  return (
    <>
    <Navbar></Navbar>
      <h1>Hey It's working</h1>
    </>
  )
}

export default App
