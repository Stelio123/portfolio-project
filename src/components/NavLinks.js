import {NavLink} from 'react-router-dom';

const NavLinks = () => {


    return ( 
       
    <ul>
        <li><NavLink aria-label="home page" className="nav-link" to="/">Home</NavLink></li>
        <li><NavLink aria-label="about page" className="nav-link" to="/about">About</NavLink></li>
        <li><NavLink aria-label="work page" className="nav-link" to="/work">Work</NavLink></li>
        <li><NavLink aria-label="contact page" className="nav-link" to="/contact">Contact</NavLink></li> 
    </ul>
    );
}

export default NavLinks;