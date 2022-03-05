//Header 
import {useState} from 'react';
import{Link} from 'react-router-dom';
import NavBar from './NavBar';


function Header() {
    const [navOpen, setNavOpen] =useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen)
    }

    return (
        <header className='head'>
                <div className="logo">
                    <Link to= '/'><img src={require('../assets/images/logo.png')} alt='logo' /></Link>
                {/* <Link to='/'>sl</Link> */}
                </div>
                <div id="site-navigation" className={navOpen ? 'show' : 'hide'} >
                    <button className="btn-main-nav" onMouseDown={(e) => {e.preventDefault(); }}
                        onClick={showHideNav}>
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                            <span className="line-3"></span>
                    </button>     
                    <NavBar showHideNav={showHideNav} />  
                </div>                		
          
           
        </header>
    );

};
export default Header;