import React from 'react'
import './Resume.css'
import Navbar from './Navbar'
import Theme from './theme'
import me1 from './images/me2.jpeg'
import kjs from './images/JS.png'
import btr from './images/Brototype.jpg'
import thkhub from './images/ThinkerHub.jpg'
import mischool from './images/mischool.jpg'


const Resume = () => {
  return (
    <div className='resumeContainer'>
        <Navbar/>
        <br />
        <Theme/>
      <div className="resumeMainContainer">

          <h1>My resume</h1>
          <h2>Education</h2>
          <div className="educationPresent">
          <img src={btr} alt="" />  
          <h2>APRIL 2024 *PRESENT</h2> 
          <h3>Intership at Brototype</h3>
          <h4>Calicut , kinfra technoPark</h4>
          </div>
          <div className="PresentEducationDesc">
          <p>During my internship at Brototype, I immersed myself in self-learning and software development. Engaging in dynamic projects, I honed my skills and contributed to innovative solutions, fostering a culture of growth and creativity.</p>
          </div>
          <br /><br />
          <div className="schooling">
          <img src={mischool} alt="" />
          <h2>March 2024</h2> 
          <h3>Schooling</h3>
          <h4>Mi boys - Kerala, India</h4>
          <p>Part of CSLab, Programer, World's Scholars Cup</p>
          </div>

          <h3 className='otherrrs'>Others</h3>
          <br />

          <div className="otherss">
          <img src={kjs} alt="" />
          <h2>January 2023</h2> 
          <h3>Participate actively in Kerala JS Tech event</h3>
          <h4>Calicut , kinfra technoPark</h4>
          </div> 
          <br />

          <div className="others1">
          <img src={btr} alt="" />
          <h2>March 2022</h2> 
          <h3>Intensive coding bootcamp program by Brototype</h3>
          <h4>Calicut , kinfra technoPark</h4>
         
          </div>
          <br />
          <div className="others2">
          <img src={thkhub} alt="" />
          <h2>March 2022</h2> 
          <h3>Member of Tech Community in Tinker Hub</h3>
          <h4>Calicut , kinfra technoPark</h4>
          </div>
          
          


     

      </div>
    </div>
  )
}

export default Resume
