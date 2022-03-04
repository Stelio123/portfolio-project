// Nav

import { NavLink } from 'react-router-dom';

function Nav() {
    

    function handleBlurOnClick(e){
        e.target.blur();
    }


    
    return (
        <div class="nav-wrapper">
            <nav className="site-navigation"  onClick={handleBlurOnClick} >
                <div className="navigation">
                    <ul className="nav-items">
                        <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                        <li><NavLink className="nav-link" to="/Projects">Projects</NavLink></li>
                        <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li> 
                    </ul>
                </div>
            </nav>  
        </div>


    );

};

export default Nav;