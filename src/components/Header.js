//Header 
// import {useState} from 'react';
import{Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
// import NavBar from './NavBar';


function Header() {
    // const [navOpen, setNavOpen] =useState(false);

    // const showHideNav = () => {
    //     setNavOpen(!navOpen)
    // }

    return (
        <header className='head'>
                <div className="logo">
                    <Link to ='/'><p>home</p></Link>
                    {/* <Link to= '/'><img src={require('../assets/images/logo.png')} alt='logo' /></Link>  */}
                    {/* <NavBar />   */}
                </div>
                <div class="nav-wrapper">
            <nav className="site-navigation">
                <div className="navigation">
                    <ul className="nav-items">
                        <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                        <li><NavLink className="nav-link" to="/work">Work</NavLink></li>
                        <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li> 
                    </ul>
                </div>
            </nav>  
        </div>
                {/* <div id="site-navigation" className={navOpen ? 'show' : 'hide'} >
                    <button className="btn-main-nav" onMouseDown={(e) => {e.preventDefault(); }}
                        onClick={showHideNav}>
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                            <span className="line-3"></span>
                    </button>     
                   
                </div>                		 */}
          
           
        </header>
    );

};
export default Header;