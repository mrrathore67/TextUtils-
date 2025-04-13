import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState('light');
  const [text, setText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },1000)
  }
  
  // const removeClassList = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  // }

  // removeClassList() 
    // document.body.classList.add('bg-'+cls)

  const toggleMode = () => {
  
    if(darkMode === 'light'){
      setDarkMode('dark')
      setText('Enable Light Mode')
      document.body.style.backgroundColor = "#042743" 
      showAlert(': '+'Dark mode has been enabled', "success")
      // document.title = "TextUtils-DarkMode"
    }else{
      setDarkMode('light')
      setText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert(': '+'Light mode has been enabled', "success")
      // document.title = "TextUtils-LightMode"
    }
  }

  
  return (
    <>
    <BrowserRouter>
    
      <Navbar text={text} mode={darkMode} title="TextUtils" about="About TextUtils" toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      
      <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={darkMode} />} />
            <Route path="/" element={<TextForm showAlert={showAlert} mode={darkMode} heading="Enter your text to analyze" />} />

          </Routes>

          {/* <TextForm showAlert={showAlert} mode={darkMode} heading="Enter your text to analyze" /> */}

        </div>
    
    </BrowserRouter>
    </> 
  );
}

export default App;


