import React from 'react'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SideBarData} from './SidebarData';
import {IconContext} from 'react-icons';
function SideBarNav() {

    const [sidebar, setSideBar] = useState(false);

    const showSideBar= () => setSideBar(!sidebar)

  return (
   <>
   <IconContext.Provider value={{color: 'ffffff'}}>
    <div className="sidebar">
        <Link to="#" className= "menu-bars">
            <FaIcons.FaBars onClick = { showSideBar }/>
        </Link>
    </div>
    <nav className={ sidebar ? 'nav-menu active' : 'nav-menu' }>
        <ul className= 'nav-menu-items' onClick ={ showSideBar }>
            <li className= 'navbar-toggle'>
                <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                </Link>
            </li>
            {SideBarData.map((item, index) => {
                return (
                  
                    <li key={index} className={item.cName}>
                       <Link to={item.path}>
                            <span>{item.title}</span>
                        </Link>
                    </li> 
                )
            })}
            <div className='mobile-icons'>
                <div className='linkedin'>
                <a href="https://www.linkedin.com/in/stelio-langaditis"  rel='noreffer noopener' target='_blank' alt='linkedin'><svg  aria-label="linkedin" xmlns="http://www.w3.org/2000/svg" width="31.5" height="31.499" viewBox="0 0 31.5 31.499">
                        <path id="Icon_awesome-linkedin-in" data-name="Icon awesome-linkedin-in" d="M7.051,31.5H.52V10.47H7.051ZM3.782,7.6A3.8,3.8,0,1,1,7.564,3.783,3.814,3.814,0,0,1,3.782,7.6ZM31.493,31.5H24.976V21.263c0-2.44-.049-5.569-3.4-5.569-3.4,0-3.916,2.651-3.916,5.393V31.5H11.142V10.47h6.263v2.869H17.5a6.862,6.862,0,0,1,6.179-3.4c6.609,0,7.824,4.352,7.824,10.005V31.5Z" 
                        transform="translate(0 -0.001)" fill="#FFFFFF"/>
                     </svg></a>

                </div>

                <a href="https://www.instagram.com/steliocodes/" target='_blank' alt='instagram'><svg xmlns="http://www.w3.org/2000/svg" width="31.5" height="31.499" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    transform="translate(0 -0.001)" fill="#FFFFFF"/>
                    </svg></a>

                <div className='github'>
                    
                <a href="https://www.github.com/Stelio123" target='_blank' alt='github'><svg  aria-label="github" xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.004" viewBox="0 0 34.875 34.004">
                        <path id="Icon_awesome-github" data-name="Icon awesome-github" d="M11.665,27.942c0,.141-.162.253-.366.253-.232.021-.394-.091-.394-.253,0-.141.162-.253.366-.253C11.482,27.668,11.665,27.78,11.665,27.942Zm-2.187-.316c-.049.141.091.3.3.345a.33.33,0,0,0,.436-.141c.042-.141-.091-.3-.3-.366A.361.361,0,0,0,9.478,27.626Zm3.108-.12c-.2.049-.345.183-.323.345.021.141.2.232.415.183s.345-.183.323-.323S12.79,27.485,12.586,27.506ZM17.212.563A16.86,16.86,0,0,0,0,17.719,17.628,17.628,0,0,0,11.918,34.537c.9.162,1.216-.394,1.216-.851,0-.436-.021-2.841-.021-4.317,0,0-4.922,1.055-5.955-2.1,0,0-.8-2.046-1.955-2.573,0,0-1.61-1.1.113-1.083A3.711,3.711,0,0,1,8.03,25.432a3.717,3.717,0,0,0,5.126,1.47,3.908,3.908,0,0,1,1.125-2.37c-3.93-.436-7.9-1.005-7.9-7.77a5.329,5.329,0,0,1,1.659-4.141,6.643,6.643,0,0,1,.183-4.774c1.47-.457,4.852,1.9,4.852,1.9a16.611,16.611,0,0,1,8.831,0s3.382-2.363,4.852-1.9a6.64,6.64,0,0,1,.183,4.774,5.466,5.466,0,0,1,1.814,4.141c0,6.785-4.141,7.327-8.072,7.77a4.158,4.158,0,0,1,1.2,3.263c0,2.37-.021,5.3-.021,5.878,0,.457.323,1.013,1.216.851a17.466,17.466,0,0,0,11.8-16.8C34.875,7.966,26.965.563,17.212.563ZM6.834,24.813c-.091.07-.07.232.049.366.113.112.274.162.366.07.091-.07.07-.232-.049-.366C7.087,24.771,6.926,24.722,6.834,24.813Zm-.759-.57c-.049.091.021.2.162.274a.209.209,0,0,0,.3-.049c.049-.091-.021-.2-.162-.274C6.237,24.152,6.124,24.173,6.075,24.244Zm2.278,2.5c-.113.091-.07.3.091.436.162.162.366.183.457.07.091-.091.049-.3-.091-.436C8.655,26.655,8.445,26.634,8.353,26.747Zm-.8-1.034c-.113.07-.113.253,0,.415s.3.232.394.162a.321.321,0,0,0,0-.436C7.847,25.692,7.664,25.622,7.552,25.713Z" 
                        transform="translate(0 -0.563)" fill="#FFFFFF"/>
                    </svg></a>

                </div>
               <div className='email'>
                  <a href="mailto:slangaditis96@gmail.com"  alt='email'><svg aria-label='email' xmlns="http://www.w3.org/2000/svg" width="35" height="28" viewBox="0 0 35 28">
                        <path id="Icon_material-email" data-name="Icon material-email" d="M34.5,6H6.5A3.5,3.5,0,0,0,3.017,9.5L3,30.5A3.51,3.51,0,0,0,6.5,34h28A3.51,3.51,0,0,0,38,30.5V9.5A3.51,3.51,0,0,0,34.5,6Zm0,7-14,8.75L6.5,13V9.5l14,8.75,14-8.75Z" 
                        transform="translate(-3 -6)" fill="#FFFFFF"/>
                    </svg></a>
                </div>

            </div>
        </ul>
    </nav>
    </IconContext.Provider>
   </>
  )
}

export default SideBarNav