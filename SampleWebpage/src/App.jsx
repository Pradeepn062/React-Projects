import { useState } from "react";

import Background from "./Components/Background/Background.jsx"
import Navbar from "./Components/NavBar/Navbar.jsx";
import Body from './Components/Body/Body.jsx'
import { useEffect } from "react";

function App() {

  let heroData = [
    {text1:"Dive into", text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ]

  const [count,setCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false)

useEffect(() => {
  setInterval(() => {
    setCount((count) => {return count===2 ? 0 : count+1})
  },6000);
},[])

  return (
    <>
      <Background count={count} playStatus={playStatus}/>
      <Navbar/>
      <Body   heroData={heroData[count]} 
              count={count} 
              setCount={setCount} 
              setPlayStatus={setPlayStatus} 
              playStatus={playStatus}/>
    </>
  )
}

export default App
