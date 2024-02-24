import './App.css';
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ErrorPage from './components/error';
import { ThemeContext } from "./Theme";


function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <Router>
      <div className={`App ${theme}`}>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path='*' element={< ErrorPage />} />

          </Routes>
      </div>
    </Router>
  );
}

export default App;
