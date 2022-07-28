import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import {motion} from 'framer-motion'; 
import Slider from '../components/Slider';


const Slideshow = () => {
  return (
    <main className='work-main'>
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