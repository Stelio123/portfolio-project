import React from 'react'
import backgroundVideo from '../assets/videos/aboutme2.mp4';
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
        <section className ="about-me">
        <div>
          <p>I'm a front-end web developer and designer based in Vancouver, BC.
          I design simple but highly functional, interactive and responsive websites.</p>

         
            <p>I have a passion for seeing creative visions come true.
              As a  dedicated front-end web developer and designer who posses a well-developed combination of technical skills and creative abilities. 
              I'm proud to write clean concise code and have an innovative spirit.</p>
        </div>

          <img className="me" src={require('../assets/images/me.png')} alt= 'Stelio Langaditis'></img>

          </section>
      </motion.div>
 </main>
    
  )
}

export default About