//Header 
import{Link} from 'react-router-dom';
import NavBar from './NavBar';



function Header() {

    return (
        <header className='head'>
                <div className="logo">
                    <Link to= '/'><img src={require('../assets/images/logo2.png')} alt='logo' /></Link> 
                </div>
                <div>
                    <NavBar/>
                </div>
        </header>
    );

};
export default Header;