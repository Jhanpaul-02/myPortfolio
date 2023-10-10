import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/j-code-high-resolution-logo-color-on-transparent-background.png';
import {Link} from 'react-scroll';
import contactimg from '../../assets/phone-call.png';
import menu from '../../assets/menu.png'

const Navbar = () => {
    
    const [showMenu,setShowMenu] = useState(false);

    return (
    <div className='allNavbar'>   
        <nav className='navbar'>
            <img src={logo} alt='J Code'  className='logo'/>
            <div >
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="NavBarMenuList">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="NavBarMenuList">About</Link>
                <Link activeClass='active' to='Works' spy={true} smooth={true} offset={-50} duration={500} className="NavBarMenuList">Portfolio</Link>
            </div>
            <button className='navbarBtn' onClick={() => {
                    document.getElementById('Contact').scrollIntoView({behavior:'smooth'});
                }}>
                <img src={contactimg} alt='' className='navbarBtnImg'/> Contact Me
            </button>

            <img src={menu} alt='Menu'  className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className='navbarMenu' style={{display: showMenu? 'flex' : 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='Works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
            
        </nav>
    </div>     
    );
}

export default Navbar;