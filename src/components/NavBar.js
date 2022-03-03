//Navigation
import {NavLink} from 'react-router-dom';

function NavBar () {

    function handleBlurOnClick(e){
        e.target.blur();
    }

 return (
     <div>
         <nav className="site-naviagtion" onClick={handleBlurOnClick}>
             <ul>
                 <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                 <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                 <li><NavLink className="nav-link" to="/projects">Projects</NavLink></li>
                 <li><NavLink className="nav-link" to="/for-fun">For Fun</NavLink></li>
                 <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
             </ul>
         </nav>
         
     </div>
 );
 
};

export default NavBar; 