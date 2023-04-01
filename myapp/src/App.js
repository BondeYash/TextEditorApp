import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar' 
import TextArea from './components/TextArea';
// import About from './components/About'

function App() {

  const [mode , setmode] = useState('light') // Wheather Dark Mode is Enable or not
  const [alert , setAlert] = useState(null)

  const showalert = (message, type)=> {
    setAlert({
      msg:message,
      type:type
    })
  }
  
  const togglemode = ()=> {
    if (mode === 'light') {
      setmode ('dark')
      document.body.style.backgroundColor = '#042743'
      showalert("Dark Mode has Been Enabled" , "success")
    }
    else {
      setmode ('light')
      document.body.style.backgroundColor = 'white'
      showalert ("Light Mode has Been Enabled" , "success")
    }
  }

  return (
    <>
      <Navbar title = "Textutils" aboutText = "About us" contactText = "Contact us" mode= {mode} togglemode = {togglemode}/>
      <Alert alert = {alert}></Alert>
      <TextArea showalert = {showalert} heading = "Enter Text to Analyse" mode = {mode}></TextArea>
      {/* <About></About> */}
      
    </>
  );
}

export default App;
