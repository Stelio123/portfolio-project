// Slider

import React from "react";
import Slider from "react-slick";
import { ProjectData } from '../components/ProjectData';
import {Link} from 'react-router-dom';

export default function SimpleSlider() {


    const projects = [

        {
            image: ProjectData[4].image,
            caption: ProjectData[4].title,
            overview: ProjectData[4].overview,
            id: ProjectData[4].slug,
            key: 1
        },
        {
            image: ProjectData[5].image,
            caption: ProjectData[5].title,
            overview: ProjectData[5].overview,
            id: ProjectData[5].slug,
            key: 2
        },
        {
          image: ProjectData[6].image,
          caption: ProjectData[6].title,
          overview: ProjectData[6].overview,
          id: ProjectData[6].slug,
          key: 3
      },
        {
            image: ProjectData[7].image,
            caption: ProjectData[7].title,
            overview: ProjectData[7].overview,
            id: ProjectData[7].slug,
            key: 4
        },
        {
            image: ProjectData[2].image,
            caption: ProjectData[2].title,
            overview: ProjectData[2].overview,
            id: ProjectData[2].slug,
            key: 5
        },
        {
          image: ProjectData[3].image,
          caption: ProjectData[3].title,
          overview: ProjectData[3].overview,
          id: ProjectData[3].slug,
          key: 6
        }, 
        {
          image: ProjectData[0].image,
          caption: ProjectData[0].title,
          overview: ProjectData[0].overview,
          id: ProjectData[0].slug,
          key: 7
        },
        {
          image: ProjectData[1].image,
          caption: ProjectData[1].title,
          overview: ProjectData[1].overview,
          id: ProjectData[1].slug,
          key: 8
        }
          
      ]


    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
  };
  return (
<section>
    <h1 className='project-title'>Selected Works</h1>
    <div className='slider-container'>
    { <Slider {...settings}>
        {projects.map((project, index) => (
          <div className="tarikComandSlider" key={index}>
                <article className='commandSlider__item'>
             
                <div className="image-container">
                <Link to={`/${project.id}`}><img className='commandSlider__item_photo' src={project.image} alt='display card'/></Link>
            </div>
                <h2 className='commandSlider__item_status'>{project.caption}</h2>
                <Link className="see-more" to={`/${project.id}`}><button>enter</button></Link>
                </article>
          </div>
        ))}
    </Slider>   }
    </div>
    
    </section>
  );
}
