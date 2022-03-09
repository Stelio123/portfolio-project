import React from 'react';
import {Link} from 'react-router-dom';
import { ProjectData } from '../components/ProjectData';
import {Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


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

const Slideshow = () => {
  return (
    <div className="slide-container">
      <h1>My Works</h1>
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
            <img src={fadeImage.image} alt='project'/>
            </div>
            <h2>{fadeImage.caption}</h2>
            <p>{fadeImage.summary}</p>
           <Link to={`/${fadeImage.id}`}><p>See More</p></Link>
          </div>
        ))}
      </Fade>
    </div>
  )
}
 export default Slideshow