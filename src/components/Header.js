//Header 
import{Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


function Header() {


    return (
        <header className='head'>
                <div className="logo">
                    <Link to= '/'><img src={require('../assets/images/logo2.png')} alt='logo' /></Link> 
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

          
           
        </header>
    );

};
export default Header;