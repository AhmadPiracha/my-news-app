import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const [progress, setProgress] = useState(0);
  const pageSize = 15;
  const [mode, setMode] = useState("light"); // dark mode enable or disable

  const toggleMode = (cls) => {
    // setMode(mode === 'dark' ? 'light' : 'dark');
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#071f33";

      // showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Light Mode Enabled", "success");
    }
  };
    return (
      <>
        <Router>
          <Navbar mode={mode} toggleMode={toggleMode} />
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={3}
          />
          <div>
            <Routes>
              <Route exact path='/' element={<News mode={mode} setProgress ={setProgress} key="general" pageSize={pageSize} country="us" category='general' />}/>
              <Route exact path='/business' element={<News mode={mode} setProgress ={setProgress} key="business" pageSize={pageSize} country="us" category='business' />}/>
              <Route exact path='/entertainment' element={<News mode={mode} setProgress ={setProgress} key="" pageSize={pageSize} country="us" category='entertainment' />}/>
              <Route exact path='/general' element={<News mode={mode} setProgress ={setProgress} key="entertainment" pageSize={pageSize} country="us" category='general' />}/>
              <Route exact path='/health' element={<News mode={mode} setProgress ={setProgress} key="health" pageSize={pageSize} country="us" category='health' />}/>
              <Route exact path='/science' element={<News mode={mode} setProgress ={setProgress} key="science" pageSize={pageSize} country="us" category='science' />}/>
              <Route exact path='/sports' element={<News mode={mode} setProgress ={setProgress} key="sports" pageSize={pageSize} country="us" category='sports' />}/>
              <Route exact path='/technology' element={<News mode={mode} setProgress ={setProgress} key="technology" pageSize={pageSize} country="us" category='technology' />}/>
            </Routes>
          </div>
        </Router>
      </>
    );
  }
export default App;



