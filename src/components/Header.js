//Header 
import{Link} from 'react-router-dom';
import NavBar from './NavBar';
import {motion} from 'framer-motion';



function Header() {

   

    return (
        <motion.header 
        initial  ={{ scaleY: 0 }}
      animate    ={{ scaleY: 1 }}
      exit       ={{ scaleY: 0 }}
      transition ={{ duration: 2 }}
        className='head'>
                <div 
                className="logo">
                    <Link to= '/'><img src={require('../assets/images/logo2.png')} alt='logo' /></Link> 
                </div>
                <div aria-label="navigation menu">
                    <NavBar/>
                </div>
        </motion.header>
    );

};
export default Header;