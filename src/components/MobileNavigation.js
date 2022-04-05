import { useState } from 'react';
import NavLinks from './NavLinks';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';


const MobileNavigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    function blurOnClick(e) {
        console.log(e.target);

        e.target.blur();
    }

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
                    <label htmlFor="burger" onClick={blurOnClick}/>                        
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>  
                            <div className="menu-items">
                                <NavLinks onClick ={() => setIsOpen(!isOpen)} />
                                 {/* {open && <NavLinks isMobile={true} closeMobile ={closeMobileNav} />}  */}
                            </div>
                </div>
            </div>
       
        </nav>
    );
}

export default MobileNavigation;