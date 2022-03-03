//Header 
import {useState} from 'react';
import{Link} from 'react-router-dom';


function Header() {
    const [navOpen, setNavOpen] =useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen)
    }

    return (
        <header className='head'>
           
                <div className="logo">
                    <Link to= '/'><img src={'./images/logo.png'} alt="Stelio Codes Logo" /></Link>
                </div>
                <div id="site-navigation" className={navOpen ? 'show' : 'hide'} >
                    <button className="btn-main-nav" onMouseDown={(e) => {e.preventDefault(); }}
                        onClick={showHideNav}>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                    </button>     
                </div>                		
          
           
        </header>
    );

};
export default Header;