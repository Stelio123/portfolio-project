import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import backgroundVideo from '../assets/videos/work-video3.mp4';
import {motion} from 'framer-motion'; 
import Slider from '../components/Slider';


const Slideshow = () => {
  return (
    <main className='work-main'>
      <video playsInline autoPlay loop muted paused id="myVideo">
        <source src={backgroundVideo} type="video/mp4"/>
      </video>      
    <motion.div 
    initial    ={{scaleY: 0}}
    animate    ={{scaleY: 1}}
    exit       ={{scaleY: 0}}
    transition ={{duration: 0.5}}
    className  ="slide-container">
      <Slider/>
    </motion.div>
  </main>  
  )
}
 export default Slideshow