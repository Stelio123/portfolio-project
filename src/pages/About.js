import React from 'react'
import backgroundVideo from '../assets/videos/about.mp4';
import {motion} from 'framer-motion';

function About() {
  return (
 <main className='main-about'>
    <video playsInline autoPlay loop muted paused id="myVideo">
      <source src={backgroundVideo} type="video/mp4"/>
    </video>   
     <motion.div 
     initial    ={{scaleY: 0}}
     animate    ={{scaleY: 1}}
     exit       ={{scaleY: 0}}
     transition ={{duration:0.5}}
     className  ='about-container'>
        <h1>About Me</h1>
          <p>I'm a front end web developer and web designer based in Vancouver, BC.
          I design simple but highly functional, interactive and responsive websites.</p>
          
          <div>
            <p>With a background in sound design, music production and audio engineering I 
          strive to my bring my natural creativity to the world of web development. </p>
          </div>
      </motion.div>
 </main>
    
  )
}

export default About