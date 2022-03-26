import React from 'react'
import backgroundVideo from '../assets/videos/contact-video1.mp4';
import {motion} from 'framer-motion';


function Contact() {
  return (
    <main className='main-contact'>
          <video playsInline autoPlay loop muted paused id="myVideo">
      <source src={backgroundVideo} type="video/mp4"/>
    </video>
    <motion.div 
    initial    ={{scale: 0}}
    animate    ={{scale: 1}}
    exit       ={{scaleY: 0}}
    transition ={{duration: 0.5}}
    className  ='contact-container'>
        <h1>Lets Connect</h1>
          <p>Im always open to questions about my work and happy to discuss any opportunities or collaborations!</p>
          <div className='btn-container'>
        <button ><a aria-label="email" className='cta-contact' href="mailto:slangaditis96@gmail.com">email</a></button>
      </div>
    </motion.div>      
    </main>

  )
}

export default Contact