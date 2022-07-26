import React from 'react'
// import backgroundVideo from '../assets/videos/aboutme2.mp4';
import { motion} from 'framer-motion';

function About() {



  return (
 <main className='main-about'>
    {/* <video playsInline autoPlay loop muted paused id="myVideo">
      <source src={backgroundVideo} type="video/mp4"/>
    </video>    */}
     <div 
    //  initial    ={{scaleY: 0}}
    //  animate    ={{scaleY: 1}}
    //  exit       ={{scaleY: 0}}
    //  transition ={{duration:0.5}}
     className  ='about-container'>
        <motion.h1
        initial    ={{scaleY: 0}}
        animate    ={{scaleY: 3, rotate: 360}}
        exit       ={{scaleY: 6}}
        transition ={{duration:0.5}}

        >about me</motion.h1>  

        <motion.div
        whileHover={{ scale: 1.3 }}
        onHoverStart={e => {}}
        onHoverEnd={e => {}}>
          <img className="me" src={require('../assets/images/sl-hover.png')} alt= 'Stelio Langaditis'></img>
        </motion.div>

        <section className ="about-me">
          <motion.div
          whileHover={{ scale: 1.2}}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}>        
            <p>dedicated, self-motivated, creative, and passionate front-end web 
            developer + designer following industry best practices. <br/>skilled at developing 
            cutting-edge web applications that work across multiple platforms. <br/>
            i love seeing visions come to life.</p>
            <p>based in vancouver,bc.</p>
          </motion.div>
        </section>
      </div>
 </main>
    
  )
}

export default About