import {NavLink} from 'react-router-dom';
import { motion } from 'framer-motion';

const NavLinks = (props) => {

    const animateFrom = {opacity: 0, y: -40 }
    const animateTo = {opacity: 1, y: 0}

    return ( 
       
    <ul>
        <motion.li 
            initial   ={animateFrom}
            animate   ={animateTo}
            transition={{delay: 0.05}}
            onClick   ={() => props.isMobile && props.closeMobileNav()}><NavLink aria-label="home page" className="nav-link" to="/">Home</NavLink>
        </motion.li>
        <motion.li 
            initial   ={animateFrom}
            animate   ={animateTo}
            transition={{delay: 0.10}}
            onClick   ={() => props.isMobile && props.closeMobileNav()}><NavLink aria-label="about page" className="nav-link" to="/about">About</NavLink>
        </motion.li>
        <motion.li
            initial   ={animateFrom}
            animate   ={animateTo}
            transition={{delay: 0.20}}
            onClick   ={() => props.isMobile && props.closeMobileNav()}><NavLink aria-label="work page" className="nav-link" to="/work">Work</NavLink>
        </motion.li>
        <motion.li
            initial   ={animateFrom}
            animate   ={animateTo}
            transition={{delay: 0.30}}
            onClick   ={() => props.isMobile && props.closeMobileNav()}><NavLink aria-label="contact page" className="nav-link" to="/contact">Contact</NavLink></motion.li> 
    </ul>
    );
}

export default NavLinks;