import './project.css';
import React from 'react'
import { useContext } from "react";
import styn from'./images/styn.jpg';
import netflix from'./images/netflix.png';
import thecoder from'./images/thecoder.png';
import todolist from'./images/todolist.png';
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
      <div className="projectMainContainer">
        <br />
      <Theme/>
                            
                                <h2>Nice stuff I've built</h2>
                                <div className="ProjectImgs">
                                  <div className="ProjectcContent">
                                    
                                <Link to={"https://github.com/JasirBasheer/Styn"}><img className="projecttimg1" src={styn} alt="" /></Link>
                                <h3>Styn</h3>
                                <p>A Clothing brand Sells vintage cloths using React.js+node.js, mongodb as database</p>
                                <Link to={"https://github.com/JasirBasheer/Styn"}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#89aff0" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link>

                                </div>
                                <div className="ProjectcContent2">

                                <Link to={"https://github.com/JasirBasheer/Netflix.github.io"}><img className="projectimg1" src={netflix} alt="" /></Link>
                                <div className="status">
                                <h5 >Open-source</h5></div>
                                <h3>Netflix clone</h3>

                                <p>literlly same like netfilx. builded using react.js + imdb api + firbase database</p>
                                <Link to={"https://github.com/JasirBasheer/Netflix.github.io"}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#89aff0" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link>

                                </div>
                                <div className="ProjectcContent">

                                <Link to={"https://github.com/JasirBasheer/thecoder"}><img className="projectimg1" src={thecoder} alt="" /></Link>
                                <h3>The coder</h3>
                                <p>A place you can code through online, builded using react.js</p>
                                <Link to={"https://github.com/JasirBasheer/thecoder"}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#89aff0" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link>
                                </div>
                                <div className="ProjectcContent2">

                                <Link to={"https://jasirbasheer.github.io/To-Do-List.github.io/"}><img className="projectimg1" src={todolist} alt="" /></Link>
                                <h3>To do list</h3>
                                <p>A place you can code through online, builded using react.js</p>
                                <Link to={"https://jasirbasheer.github.io/To-Do-List.github.io/"}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#89aff0" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link>
                                </div>
                                <div className="ProjectcContent2">

                                <Link to={"https://jasirbasheer.github.io/To-Do-List.github.io/"}><img className="projectimg1" src={todolist} alt="" /></Link>
                                <h3>To do list</h3>
                                <p>A place you can code through online, builded using react.js</p>
                                <Link to={"https://jasirbasheer.github.io/To-Do-List.github.io/"}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#89aff0" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link>
                                </div>
                                
                                </div>
                            </div>
                            <div className="rightside">
          <Newsletter/>
          <Thanks/>
          <Checkout/>
        </div>
    </div>
  )
}

export default Projects
