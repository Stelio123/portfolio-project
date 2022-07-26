import React from 'react'
// import backgroundVideo from '../assets/videos/aboutme2.mp4';
import {motion} from 'framer-motion';

function About() {

  return (
 <main className='main-about'>
    {/* <video playsInline autoPlay loop muted paused id="myVideo">
      <source src={backgroundVideo} type="video/mp4"/>
    </video>    */}
     <motion.div 
     initial    ={{scaleY: 0}}
     animate    ={{scaleY: 1}}
     exit       ={{scaleY: 0}}
     transition ={{duration:0.5}}
     className  ='about-container'>
        <h1>about me</h1>  
        <div>
          <img className="me" src={require('../assets/images/sl-original.png')} alt= 'Stelio Langaditis'></img>
          <img className="me" src={require('../assets/images/sl-hover.png')} alt= 'Stelio Langaditis'></img>
        </div>

        <section className ="about-me">
        <div>
          <p>dedicated, self-motivated, creative, and passionate front-end web 
            developer and designer following industry best practices. skilled at developing 
            cutting-edge web applications that work across multiple platforms, including 
            implementing design and code reviews to ensure high-quality outcomes meeting business and 
            technical requirements.</p>

            {/* <p>
            Experience building responsive websites and web applications using React, WordPress, and Shopify. 
            My tools include;  HTML, CSS/SCSS, JavaScript, PHP, and MySQL. Knowledge of REST API web services using JSON. 
            Competent in web usability/modern UI/UX best practices and SEO. Experience with Adobe Illustrator, Photoshop, and XD.
            </p> */}
{/* 
          <ul className="technical-skills">
            <li>Experience building responsive websites and web applications using React, WordPress and Shopify.</li>
            <li>Experience with CSS/SCSS, HTML, JavaScript, PHP, and MySQL.</li>
            <li>Knowledge in REST API web services using JSON.</li>
            <li>Competent in web usability/modern UI/UX best practices and SEO.</li>
            <li>Experience with Adobe Illustrator, Photoshop, and XD.</li>
          </ul> */}
        </div>


          </section>
      </motion.div>
 </main>
    
  )
}

export default About