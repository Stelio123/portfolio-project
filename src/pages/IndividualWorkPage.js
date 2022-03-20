import React from 'react';
import { ProjectData } from '../components/ProjectData';
import {useParams} from 'react-router-dom';
import  {useEffect, useState} from 'react'; 
import backgroundVideo from '../assets/videos/work-video3.mp4';
import {motion} from 'framer-motion';



function IndividualWorkPage() {

    const { slug } =  useParams();
    const [project, setProject] = useState(null);
    useEffect(() => {
      const data =ProjectData.filter((item) => item.slug === slug);
      if (data !== null) {
          setProject(data[0]);
      }
    },[slug]);
  return (
    <main className='main-individual'>
       <video playsInline autoPlay loop muted paused id="myVideo">
      <source src={backgroundVideo} type="video/mp4"/>
    </video>  
      {project !== null && (
       <motion.div 
       initial    ={{scaleY: 0}}
       animate    ={{scaleY: 1}}
       exit       ={{scaleY: 0}}
       transition ={{duration: 0.5}}
       className  ='indiv-container'>
         <h1>{project.title}</h1>
         <img className ='indiv-img'src={project.image} alt='project'/>
         <p className='indiv-links'>{project.links}</p>
         <p className='indiv-sum'>{project.summary}</p>
         <p className='indiv-tool'>{project.tools}</p>
         <h3 className='indiv-mock-title'>{project.mockTitle}</h3>
         <div className='mock-div'>
           <img className='mock-img' src={project.mockUpImage} alt='mock up'/> 
          <img  className= 'mock-img'src={project.mockUpImage2} alt='second mockup' />
         </div>
        
         <p className='indiv-mockup'>{project.mockUp}</p>
         <h3 className='indiv-des-title'>{project.designTitle}</h3>
         <p className='indiv-des-sum'>{project.design}</p>
         <h3 className='indiv-func-title'>{project.functionTitle}</h3>
         <h4 className='indiv-spef-title'>{project.spefFunTitle}</h4>
         <p className='indiv-funcSum'>{project.funcSum}</p>
         <h4>{project.rest}</h4>
         <p>{project.restSum}</p>
         <h4>{project.responsive}</h4>
         <p>{project.respSum}</p>
      </motion.div>         
      )}
    </main>

  )
}

export default IndividualWorkPage;