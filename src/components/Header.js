//Header 
import {useState} from 'react';

function Header() {
    const [navOpen, setNavOpen] =useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen)
    }

    return(
        <div id="site-navigation" className={navOpen ? 'show' : 'hide'} >
        <button className="btn-main-nav" onMouseDown={(e) => {e.preventDefault(); }}
            onClick={showHideNav}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
        </button>      
    </div>              
    );
};
export default Header;