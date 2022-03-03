// Nav

import { NavLink } from 'react-router-dom';

function Nav() {

    function handleBlurOnClick(e){
        e.target.blur();
    }

    
    return (
            <nav className="site-navigation"  onClick={handleBlurOnClick} >
                <ul>
                    <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                    <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                    <li><NavLink className="nav-link" to="/Projects">Projects</NavLink></li>
                    <li><NavLink className="nav-link" to="/for-fun">Fun</NavLink></li>
                    <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li> 
                </ul>
            </nav>  


    );

};

export default Nav;