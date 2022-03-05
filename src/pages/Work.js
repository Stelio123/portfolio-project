import React from 'react';
import {Link} from 'react-router-dom';
import { ProjectData } from '../components/ProjectData';

function Work() {
  return (
    <div>
        <h1>Work</h1>
        <div>
      {ProjectData.map(item => {
        return <div>
        <Link to={`/${item.slug}`}><h3>{item.title}</h3></Link>
        {item.image}
        </div>
      })}
    </div>
    </div>
  )
}

export default Work