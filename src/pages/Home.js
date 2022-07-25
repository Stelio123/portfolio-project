import React from 'react';
import {Link} from 'react-router-dom';
import backgroundVideo from '../assets/videos/background-video.mp4';
import {motion} from 'framer-motion';

function Home() {


  return (
    <main className='main-home'>
    <motion.video playsInline autoPlay loop muted paused id="myVideo"
     initial    ={{scaleY: 0}}
     animate    ={{scaleY: [1, 1.25, 1.5, 1, 1]}}
     exit       ={{scaleY:0}}
     transition ={{duration: 1}}>
      <source src={backgroundVideo} type="video/mp4"/>
    </motion.video>
    <motion.div 
    initial    ={{scaleY: 0}}
    animate    ={{scaleY: [1, 2, 2, 1, 1],}}
    exit       ={{scaleY:0}}
    transition ={{duration: 1.5}}
    className  ='home-container'>
      <h1 className='name'>Stelio Langaditis</h1>
      <p className='tag-line'>Front-end web developer 
      <br/> +
      <br/>Designer</p>
      <div className='btn-container'>
        <Link to='work'><button aria-label="work page" className='cta-work'>enter</button></Link>
      </div>
    </motion.div>
    </main>
  )
}

export default Home;