import React from 'react'
import Navbar from './Navbar';
import './About.css';
import mee from './images/mee.jpeg'
import me1 from './images/me1.jpeg'
import Theme from './theme';
import Newsletter from './newsletter';
import Thanks from './thanks';
import Checkout from './checkout';
import Music from './music';

function About() {
  return (
    <div className='Aboutcontainer'>
      <Navbar/>
      <br />
      <Theme/>
      <div className="AboutminContainer">
        <br />
      
        <br /><br />
        <br />
         <h1>Hi. I'm Jasir <span className='spannn'>@Jsr.wtf</span> Basheer <br /> <span>🤘</span></h1>
         
         <img src={me1} alt="" />
         <h2>Short bio</h2>
         <p>I'm a product maker (... and full stack developer) currently based in Kerala, INDIA. I'm passionate about building products that help people and make a difference in the world. I'm also a big fan of open source software  I also love educating others about technology and programming, which is why I'm a content creator and write blogs in my free time.</p>
        <h2>Career</h2>
        <p>I sold my first venture, at an age of 16. And then went on to build and fail a lot of times. I also worked as a freelancer, creating and selling discord bots and landing pages. 
<br />
I've won several hackathons as well, like Hakero, by Fetlla, which was the biggest hackathon of the time.</p>
  
  <h2>Let's Connect</h2>
  <p>I'm excited to connect with others via email (jasirbinbasheer@gmail.com) and Twitter to chat about projects and ideas. Currently, I'm not taking on freelance projects, but I am open to hearing about potential opportunities, discussing them with you and then potentially collaborating if it's a good fit.</p>
     </div>
     <div className="righttside">
          <Newsletter/>
          <Music/>
          <Thanks/>
          <Checkout/>
        </div>
    </div>
  )
}

export default About
