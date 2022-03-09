import React from 'react'
import {Link} from 'react-router-dom';

function Home() {

//   $(window).on('load', addNoise);

// function addNoise() {
//   $('.loader').text('Bring in \'da noise!');
//   $('.noise-wrapper').css('opacity',1);
// }
  return (
    <>
    <video autoplay loop id="myVideo">
      <source src='../assets/videos/background-video.mp4' type="video/mp4"/>
    </video>
    <div className='home-container'>
      <h1>Stelio Langaditis</h1>
      <p>Front-end web developer + designer</p>
      <div className='btn-container'>
        <Link to='work'><button className='btn'>click me</button></Link>
      </div>
    </div>
    </>
  )
}

export default Home;