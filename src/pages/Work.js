import React from 'react';
import {Link} from 'react-router-dom';
import { ProjectData } from '../components/ProjectData';
import {Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import backgroundVideo from '../assets/videos/work-video3.mp4';
import {motion} from 'framer-motion'; 

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
  {
      image: ProjectData[2].image,
      caption: ProjectData[2].title,
      summary: ProjectData[2].summary,
      id: ProjectData[2].slug
  },
  {
      image: ProjectData[3].image,
      caption: ProjectData[3].title,
      summary: ProjectData[3].summary,
      id: ProjectData[3].slug
  },
  {
    image: ProjectData[4].image,
    caption: ProjectData[4].title,
    summary: ProjectData[4].summary,
    id: ProjectData[4].slug
  },
  {
    image: ProjectData[5].image,
      caption: ProjectData[5].title,
      summary: ProjectData[5].summary,
      id: ProjectData[5].slug
  }
]
// const prevArrow = () => {

// }

// const nextArrow = () => {

// }


const Slideshow = () => {
  return (
    <main className='main-work'>
      <video playsInline autoPlay loop muted paused id="myVideo">
        <source src={backgroundVideo} type="video/mp4"/>
      </video>      
    <motion.div 
    initial    ={{scaleY: 0}}
    animate    ={{scaleY: 1}}
    exit       ={{scaleY: 0}}
    transition ={{duration: 0.5}}
    className  ="slide-container">
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
    </motion.div>
  </main>  
  )
}
 export default Slideshow