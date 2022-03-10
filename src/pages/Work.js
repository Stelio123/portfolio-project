import React from 'react';
import {Link} from 'react-router-dom';
import { ProjectData } from '../components/ProjectData';
import {Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import backgroundVideo from '../assets/videos/work-video1.mp4';
// import FaLongArrowAltLeft from 'react-icons/fa';
// import FaLongArrowAltRight from 'react-icons/fa';


const fadeImages = [

  {
      image: ProjectData[0].image,
      caption: ProjectData[0].title,
      summary: ProjectData[0].summary,
      id: ProjectData[0].slug
  },
  {
      image: ProjectData[1].image,
      caption: ProjectData[1].title,
      summary: ProjectData[1].summary,
      id: ProjectData[1].slug
  },
]

// const prevArrow = () => {

// }

// const nextArrow = () => {

// }


const Slideshow = () => {
  return (
    <main className='main-work'>
      <video autoPlay loop muted paused id="myVideo">
        <source src={backgroundVideo} type="video/mp4"/>
      </video>      
    <div className="slide-container">
      <h1 className='work-title'>My Works</h1>
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
            <Link to={`/${fadeImage.id}`}><img className='fade-img' src={fadeImage.image} alt='project card'/></Link>
            </div>
            {/* <FaLongArrowAltLeft className='left-arrow' onCLick={prevArrow}/>
            <FaLongArrowAltRight className='Right-arrow' onCLick={nextArrow}/> */}
            <h2 className='project-title'>{fadeImage.caption}</h2>
            <p className='summary-caption'>{fadeImage.summary}</p>
           <Link to={`/${fadeImage.id}`}><p className='see-more'>See More</p></Link>
          </div>
        ))}
      </Fade>
    </div>
  </main>  
  )
}
 export default Slideshow