import React from 'react';
import { ProjectData } from '../components/ProjectData';
import {useParams} from 'react-router-dom';
import  {useEffect, useState} from 'react';


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
    <main>
      {project !== null && (
       <div>
         <h1>{project.title}</h1>
         {project.image}
         <p>{project.links}</p>
         <p>{project.summary}</p>
         <p>{project.tools}</p>
         <h3>{project.mockTitle}</h3>
         {project.mockUpImage}
         <p>{project.mockUp}</p>
         <h3>{project.designTitle}</h3>
         <p>{project.design}</p>
         <h3>{project.colourTitle}</h3>
        {project.colourImage}
         <p>{project.colour}</p>
         <h3>{project.functionTitle}</h3>
         <h4>{project.spefFunTitle}</h4>
         <p>{project.funcSum}</p>
         <h4>{project.rest}</h4>
         <p>{project.restSum}</p>
         <h4>{project.responsive}</h4>
         <p>{project.respSum}</p>
      </div>         
      )}
    </main>

  )
}

export default IndividualWorkPage;