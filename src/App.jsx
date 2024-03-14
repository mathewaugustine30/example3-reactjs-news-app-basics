import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'

const App = () => {
  const [categorey,setCategorey] = useState("general")
  return (
    <div>
      <Navbar setCategorey={setCategorey}/>
      <NewsBoard categorey={categorey}/>
    </div>
  )
}

export default App