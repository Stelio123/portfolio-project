// Slider

import React from "react";
import Slider from "react-slick";
import { ProjectData } from '../components/ProjectData';
import {Link} from 'react-router-dom';

export default function SimpleSlider() {


    const projects = [

        {
            image: ProjectData[0].image,
            caption: ProjectData[0].title,
            overview: ProjectData[0].overview,
            id: ProjectData[0].slug
        },
        {
            image: ProjectData[1].image,
            caption: ProjectData[1].title,
            overview: ProjectData[1].overview,
            id: ProjectData[1].slug
        },
        {
            image: ProjectData[2].image,
            caption: ProjectData[2].title,
            overview: ProjectData[2].overview,
            id: ProjectData[2].slug
        },
        {
            image: ProjectData[3].image,
            caption: ProjectData[3].title,
            overview: ProjectData[3].overview,
            id: ProjectData[3].slug
        },
        {
          image: ProjectData[4].image,
          caption: ProjectData[4].title,
          overview: ProjectData[4].overview,
          id: ProjectData[4].slug
        },
        {
          image: ProjectData[5].image,
            caption: ProjectData[5].title,
            overview: ProjectData[5].overview,
            id: ProjectData[5].slug
        }
      ]


    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
  };
  return (
<section>
    <h1 className='project-title'>Selected Works</h1>
    <Slider {...settings}>
        {projects.map((project, index) => (
          <div className="tarikComandSlider" key={index}>
                <article className='commandSlider__item'>
             
                {/* <div className="image-container"> */}
                <Link to={`/${project.id}`}><img className='commandSlider__item_photo' src={project.image} alt='project card'/></Link>
            {/* </div> */}
                <h2 className='commandSlider__item_status'>{project.caption}</h2>
                <Link to={`/${project.id}`}><p className='see-more'>See More</p></Link>
            {/* <p className='commandSlider__item_overview'>{project.overview}</p> */} 
                </article>
          </div>
        ))}
    </Slider>
    </section>
  );
}
