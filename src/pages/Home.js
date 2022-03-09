import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='home-container'>
      <h1>Stelio Langaditis</h1>
      <h1>Welcome</h1>
      <p>Front-end web developer + designer</p>
      <div className='btn-container'>
      <Link to='work'><button className='btn'>click me</button></Link>
      </div>
    </div>
  )
}

export default Home;