import NavLinks from './NavLinks';
import {CgMenuGridR} from 'react-icons/cg';
import {MdCloseFullscreen} from 'react-icons/md';
import {useState} from 'react';


const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenuGridR className='hamburger' onClick={()=>setOpen(!open)}/>

    const hamburgerIconClose = <MdCloseFullscreen className='hamburger' fill='white' onClick ={() => setOpen(!open)} />

    const closeMobileNav = () => setOpen(false); 


    return (
        <nav className='mobile-nav'>
            {open ? hamburgerIconClose : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileNav={closeMobileNav}/> }
        </nav>
    );
}

export default MobileNavigation;