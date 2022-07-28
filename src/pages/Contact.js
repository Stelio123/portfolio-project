import React from 'react'
import backgroundVideo from '../assets/videos/contact.mp4';
import {motion} from 'framer-motion';


function Contact() {
  return (
    <main className='main-home'>
    <motion.video playsInline autoPlay loop muted paused id="myVideo"
     initial    ={{scaleY: 0}}
     animate    ={{scaleY: [1, 1.25, 1.5, 1, 1]}}
     exit       ={{scaleY:0}}
     transition ={{duration: 1.5}}>
      <source src={backgroundVideo} type="video/mp4"/>
    </motion.video>
    <motion.div 
    initial    ={{scale: 0}}
    animate    ={{scale: 1}}
    exit       ={{scaleY: 0}}
    transition ={{duration: 0.5}}
    className  ='contact-container'>
        <motion.h1 
        initial    ={{scaleY: 0}}
        animate    ={{scaleY: 1, rotate: 360}}
        exit       ={{scaleY: 6}}
        transition ={{duration:0.5}}>Lets Connect</motion.h1>
          <p>I'm always open to questions about my work and happy to discuss any opportunities or collaborations!</p>
          <div className='btn-container'>
        <a href="mailto:slangaditis96@gmail.com"><button className='cta-contact'>email</button></a>
      </div>
    </motion.div>      
    </main>

  )
}

export default Contact