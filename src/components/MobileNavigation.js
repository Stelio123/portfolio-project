import NavLinks from './NavLinks';
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import {MdCloseFullscreen} from 'react-icons/md';
import {useState} from 'react';


const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <HiOutlineMenuAlt1 className='hamburger' size='35px' onClick={()=>setOpen(!open)}/>

    const hamburgerIconClose = <MdCloseFullscreen className='hamburger' size='35px'fill='white' onClick ={() => setOpen(!open)} />

    const closeMobileNav = () => setOpen(false); 


    return (
        <nav className='mobile-nav'>
            {open ? hamburgerIconClose : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileNav={closeMobileNav}/> }
        </nav>
    );
}

export default MobileNavigation;