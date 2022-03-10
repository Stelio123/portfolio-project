import React from 'react';
import {Link} from 'react-router-dom';
import backgroundVideo from '../assets/videos/background-video.mp4';

function Home() {


  return (
    <main className='main-home'>
    <video autoPlay loop muted paused id="myVideo">
      <source src={backgroundVideo} type="video/mp4"/>
    </video>
    <div className='home-container'>
      <h1 className='name'>Stelio Langaditis</h1>
      <p className='tag-line'>Front-end web developer</p>
      <div className='btn-container'>
        <Link to='work'><button className='cta-work'>click me</button></Link>
      </div>
    </div>
    </main>
  )
}

export default Home;