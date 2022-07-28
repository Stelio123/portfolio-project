import React from 'react';
import { ProjectData } from '../components/ProjectData';
import {useParams} from 'react-router-dom';
import  {useEffect, useState} from 'react'; 
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';



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
                <p className ='indiv-tool-used'>{project.toolsUsed}</p>
                <p className='indiv-tool'>{project.tools}</p>
                  <h3 className='indiv-mock-title'>{project.mockTitle}</h3>
                    <div className='mock-div'>{project.projectImage}</div>
                    <p className='description'>{project.description}</p>
                    <Link to='/work'><button aria-label="work page" href='Work.js' className='individual-btn'> back</button></Link>

      </motion.div>         
      )}
    </main>

  )
}

export default IndividualWorkPage;