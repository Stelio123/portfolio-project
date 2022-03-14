import React from 'react';
import {Link} from 'react-router-dom';
import backgroundVideo from '../assets/videos/background-video.mp4';
import {motion} from 'framer-motion';

function Home() {


  return (
    <main className='main-home'>
    <video playsInline autoPlay loop muted paused id="myVideo">
      <source src={backgroundVideo} type="video/mp4"/>
    </video>
    <motion.div 
    initial    ={{scaleY: 0}}
    animate    ={{scaleY: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0]}}
    exit       ={{scaleY:0}}
    transition ={{duration: 0.8}}
    className  ='home-container'>
      <h1 className='name'>Stelio Langaditis</h1>
      <p className='tag-line'>Front-end web developer</p>
      <div className='btn-container'>
        <Link to='work'><button className='cta-work'>click me</button></Link>
      </div>
    </motion.div>
    </main>
  )
}

export default Home;