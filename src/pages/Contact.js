import React from 'react'
// import backgroundVideo from '../assets/videos/about.mp4';
import {motion} from 'framer-motion';


function Contact() {
  return (
    <main className='main-contact'>
          {/* <video playsInline autoPlay loop muted paused id="myVideo">
      <source src={backgroundVideo} type="video/mp4"/>
    </video> */}
    <motion.div 
    initial    ={{scale: 0}}
    animate    ={{scale: 1}}
    exit       ={{scaleY: 0}}
    transition ={{duration: 0.5}}
    className  ='contact-container'>
        <h1>Lets Connect</h1>
          <p>Im always open to questions about my work and happy to discuss any opportunities or collaborations!</p>
          <div className='btn-container'>
        <a href="mailto:slangaditis96@gmail.com"><button className='cta-contact'>email</button></a>
      </div>
    </motion.div>      
    </main>

  )
}

export default Contact