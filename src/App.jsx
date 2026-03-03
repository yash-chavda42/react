import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import TextForm from './components/TextForm.jsx'
import About from './components/About.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar title="yash" aboutText = "About Yash"/>
      <div className="container my-3">
        {/* <TextForm heading="Enter Text"/> */}
        <About/>
      </div>
    </>
  )
}

export default App
