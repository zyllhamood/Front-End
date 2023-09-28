import {useState} from 'react';
import logo from './assets/Logo.svg';
function Nav(){
    const [menuStatus,setMenuStatus] = useState(false)
    const toggleMenu = () => {
        setMenuStatus(!menuStatus);
    }
    return (
        <nav className={`navbar ${menuStatus ? "open" : ""}`}>
            <a href='/' className='logo'><img src={logo} alt="error showing img" /></a>
            
            <div className='menu-icon' onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`nav-links ${menuStatus ? "visible" : ""}`}>
                <a href="/"><li>Home</li></a>
                <a href="/"><li>About</li></a>
                <a href="/"><li>Menu</li></a>
                <a href="/"><li>Reservations</li></a>
                <a href="/"><li>Order Online</li></a>
                <a href="/"><li>Login</li></a>
            </ul>
        
        
        </nav>
    );
    
    
    
}

export default Nav;