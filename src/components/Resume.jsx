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
      <div className="titlesssss">
          <h1>My resume</h1>
          <h2>Education</h2>
          </div>
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
          <div className="titlesssss">
         <h3 className='otherrrs'>Others</h3>
         </div>
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


      <div className="rightssiideresume">
          <div className="technicalSkills">
          <br />
          <div className="titletechnical">
            <h2>Technical Skills</h2>
            </div>
            
           <div className="tscontainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#B197FC" d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg><p>React</p></div>
           <div className="tscontainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#B197FC" d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg><p>Javascript</p></div>
           <div className="tscontainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#B197FC" d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg><p>C</p></div>
           <div className="tscontainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#B197FC" d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg><p>Node.js</p></div>
           <div className="tscontainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#B197FC" d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg><p>Express</p></div>
           <div className="tscontainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#B197FC" d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg><p>Product Design</p></div>
           <div className="tscontainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#B197FC" d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg><p>UI/UX</p></div>
           <div className="tscontainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#B197FC" d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg><p>Java</p></div>
           <div className="tscontainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#B197FC" d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg><p>Mongodb</p></div>
           <br /><br />
          

          </div>
          <div className="toolsiKnow">
          <br />
          <div className="titletools">
            <h2>Tools I know</h2>
            </div>
            
           <div className="tscontainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#B197FC" d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg><p>Git</p></div>
           <div className="tscontainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#B197FC" d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg><p>Github</p></div>
           <div className="tscontainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#B197FC" d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg><p>Figma</p></div>
           <div className="tscontainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#B197FC" d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg><p>VS Code</p></div>
           <br />
          

          </div>
          <div className="Languages">
          <br />
          <div className="titletools">
            <h2>Languages</h2>
            </div>
            
           <div className="tscontainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#B197FC" d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"/></svg><p>English</p></div>
           <div className="tscontainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#B197FC" d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"/></svg><p>Malayalam</p></div>
           <div className="tscontainerr"><p>Arabic</p></div>
           <div className="tscontainerr"><p>Hindi</p></div>
          
           <br />
          

          </div>
        </div>
    </div>
  )
}

export default Resume
