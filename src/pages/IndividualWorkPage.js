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
         <h2>{project.title}</h2>
      </div>         
      )}
    </main>

  )
}

export default IndividualWorkPage;