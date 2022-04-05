import { useState } from 'react';
import NavLinks from './NavLinks';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';


const MobileNavigation = () => {

    const [openHamburger, setHamburger] = useState(false);

    const showHamburger = () => setHamburger(!openHamburger)
    

    return (
        <nav className='mobile-nav'>
            <div className="navbar">
                <div className="container nav-container">
                <label htmlFor="burger" />  
                    <input 
                    className="checkbox" 
                    type="checkbox" 
                    checked= {showHamburger ? true : false}
                    readOnly={true}
                    id="burger" 
                    alt="navigation burger"/>  
                        <label htmlFor= "burger" onClick= {showHamburger}>
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>  
                        </label>
                            <div className="menu-items" >
                                <NavLinks onClick = {showHamburger}/>
                            </div>
                </div>
            </div>
       
        </nav>
    );
}

export default MobileNavigation;