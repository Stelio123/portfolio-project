import React from 'react'
import backgroundVideo from '../assets/videos/about-vid1.mp4';
// import {Link} from 'react-router-dom';
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
          <p>With a background in sound design, music production and audio engineering I 
          strive to my bring my natural creativity to the world of web development. </p>
          <div>
            {/* <h3>My toolkit</h3> */}

            {/* <div className='tool-container'>
                <ul className='dev-list'>
                  <h4>Dev tools</h4>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Wordpress</li>
                    <li>React</li>
                    <li>PHP</li>
                </ul>
                  <ul className='design-list'>
                    <h4>Design tools</h4>
                      <li>Adobe XD</li>
                      <li>Invision</li>
                      <li>Figma</li>
                      <li>Adobe Photoshop</li>
                      <li>Adobe Illustrator</li>
                      <li>Premiere Pro</li>
                  </ul>                    
            </div>            */}
          </div>
      </motion.div>
 </main>
    
  )
}

export default About