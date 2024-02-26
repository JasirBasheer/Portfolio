import './project.css';
import React from 'react'
import { useContext } from "react";
import styn from'./images/styn.jpg';
import netflix from'./images/netflix.png';
import thecoder from'./images/thecoder.png';
import todolist from'./images/todolist.png';
import spysteps from'./images/spysteps.png';
import me2 from'./images/me2.jpeg';


import { Link } from "react-router-dom";
import { ThemeContext } from "../Theme";
import Navbar from './Navbar';
import Newsletter from './newsletter';
import Music from './music';
import Thanks from './thanks';
import Checkout from './checkout';
import Theme from './theme';
function Projects() {
  return (
    <div className='ProjectContainer'>
      <Navbar/>
      <br />
      <Theme/>
      <div className="projectMainContainer">
        <br />

                            
                                <h2>Nice stuff I've built</h2>
                                <div className="ProjectImgs">
                                  <div className="ProjectcContent">
                                    
                                <Link to={"https://github.com/JasirBasheer/Styn"}><img className="projecttimg1" src={styn} alt="" /></Link>
                                <h3>Styn</h3>
                                <p>The vintage clothing brand uses React.js and Node.js for its online platform, with MongoDB for efficient data management.</p>
                                <Link to={"https://github.com/JasirBasheer/Styn"}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#89aff0" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link>

                                </div>
                                <div className="ProjectcContent2">

                                <Link to={"https://github.com/JasirBasheer/Netflix.github.io"}><img className="projectimg1" src={netflix} alt="" /></Link>
                                <div className="status">
                                <h5 >Open-source</h5></div>
                                <h3>Netflix clone</h3>

                                <p>The platform, similar to Netflix, is built with React.js, IMDb API, and Firebase database for efficient data handling and a user-friendly interface.</p>
                                <Link to={"https://github.com/JasirBasheer/Netflix.github.io"}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#89aff0" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link>

                                </div>
                                <div className="ProjectcContent">

                                <Link to={"https://github.com/JasirBasheer/thecoder"}><img className="projectimg1" src={thecoder} alt="" /></Link>
                                <h3>The coder</h3>
                                <p>An online coding environment, developed with React.js, offers users a platform to code and collaborate seamlessly.</p>
                                <Link to={"https://github.com/JasirBasheer/thecoder"}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#89aff0" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link>
                                </div>
                                <div className="ProjectcContent2">

                                <Link to={"https://jasirbasheer.github.io/To-Do-List.github.io/"}><img className="projectimg1" src={todolist} alt="" /></Link>
                                <h3>To do list</h3>
                                <p>A sleek todo list application, crafted with React.js, provides users with an intuitive platform for organizing tasks efficiently.</p>
                                <Link to={"https://jasirbasheer.github.io/To-Do-List.github.io/"}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#89aff0" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link>
                                </div>
                                <div className="ProjectcContent2">

                                <Link to={"https://github.com/JasirBasheer/Spy.steps"}><img className="projectimg1" src={spysteps} alt="" /></Link>
                                <h3>Spy.steps</h3>
                                <p>An online marketplace for custom rings and necklaces, constructed with HBS (Handlebars.js) and Node.js, leverages MongoDB for seamless database management.</p>
                                <Link to={"https://github.com/JasirBasheer/Spy.steps"}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#89aff0" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link>
                                </div>
                                <div className="ProjectcContent2">

                                <Link to={"https://github.com/JasirBasheer/Portfolio"}><img className="projectimg1" src={me2} alt="" /></Link>
                                <h3>Portfolio</h3>
                                <p>A portfolio highlighting skills and projects, built with React.js frontend and Firebase backend, offers a streamlined showcase of your expertise.</p>
                                <Link to={"https://github.com/JasirBasheer/Portfolio"}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#89aff0" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link>
                                </div>
                                
                                </div>
                            </div>
                            <div className="rightsiide">
          <Newsletter/>
          <Thanks/>
          <Checkout/>
        </div>
    </div>
  )
}

export default Projects
