import React from 'react'
import backgroundVideo from '../assets/videos/contact-video1.mp4';


function Contact() {
  return (
    <main className='main-contact'>
          <video autoPlay loop muted paused id="myVideo">
      <source src={backgroundVideo} type="video/mp4"/>
    </video>
    <div className='contact-container'>
        <h1>Lets Connect</h1>
          <p>Im always open to questions about my work and happy to discuss any opportunities or collaborations!</p>
          <div className='btn-container'>
        <button ><a  className='cta-contact' href="slangaditis96@gmail.com">click me</a></button>
      </div>
    </div>      
    </main>

  )
}

export default Contact