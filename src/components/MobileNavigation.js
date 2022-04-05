// import { useState } from 'react';
import NavLinks from './NavLinks';
import Footer from './Footer';


const MobileNavigation = () => {

    // const [openHamburger, setHamburger] = useState(false);

    // const showHamburger = () => setHamburger(!openHamburger)
    

    return (
        <nav className='mobile-nav'>
            <div className="navbar">
                <div className="container nav-container">
                    <input 
                    className="checkbox" 
                    type="checkbox" 
                    readOnly={true}
                    id="burger" 
                    alt="navigation burger"/>  
                        <div className="hamburger-lines" >
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div> 
                            <div className="menu-items" >
                                <NavLinks />
                            </div>
                </div>
            </div>
       
        </nav>
    );
}

export default MobileNavigation;