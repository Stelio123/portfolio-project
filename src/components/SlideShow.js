// import React from 'react';
// import {Fade} from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// import { ProjectData } from './ProjectData';


// const fadeImages = [

//     {
//         image: ProjectData.image,
//         caption: ProjectData.title,
//         summary: ProjectData.summary
//     },
// ]

// const Slideshow = () => {
//     return (
//       <div className="slide-container">
//         <Fade>
//           {fadeImages.map((fadeImage, index) => (
//             <div className="each-fade" key={index}>
//               <div className="image-container">
//                 <img src={fadeImage.image} alt='project'/>
//               </div>
//               <h2>{fadeImage.caption}</h2>
//             </div>
//           ))}
//         </Fade>
//       </div>
//     )
//   }
// export default Slideshow;