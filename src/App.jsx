import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import TextForm from './components/TextForm.jsx'
import About from './components/About.jsx'
import { useFormState } from 'react-dom'
import React, {useState} from 'react'
import Alert from './components/Alert.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }

  const toggleMode = ()=> {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#343a40"
      showAlert("Dark Mode Has Been Enabled", "success")
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Has Been Enabled", "success")
    }
  }
  return (
    <BrowserRouter>
      <Navbar title="yash" aboutText="About Yash" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text" mode={mode} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
