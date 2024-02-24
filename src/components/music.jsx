import React from 'react'
import './music.css'
import { Link } from 'react-router-dom'
import music from './images/music1.jpg'

function Music() {
  return (
    <div className='music'>
        <Link className='musicLink' to={"https://open.spotify.com/playlist/4gX9v6eIDrSH6n2wFJsl2r?si=58b0053b90b147b3"}>
        <div className="musicImgs">
            <div className="musiccontent">
                <img className='music1' src={music} alt="" />
                <h3>playlist : songs i was once hooked to </h3>
                <p>these songs are the ones that I was atleast onece in my life obsessed with. obsessed as in, listen to it on repeat kinda obsessed</p>
            </div>
        </div>

        </Link>
    </div>
  )
}

export default Music
