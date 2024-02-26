import './App.css';
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ErrorPage from './components/error';
import { ThemeContext } from "./Theme";
import Guestbook from './components/guestbook';
import Projects from './components/projects';
import Resume from './components/Resume';


function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <Router>
      <div className={`App ${theme}`}>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/guestbook" element={<Guestbook/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path='*' element={< ErrorPage />} />

          </Routes>
      </div>
    </Router>
  );
}

export default App;
