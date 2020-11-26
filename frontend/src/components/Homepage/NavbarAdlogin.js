import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './A-Style.css';
import { Button } from './LogoutButton';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <h3>LAFLEFNE</h3>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/trips/'
                                className='nav-links'
                                onClick={closeMobileMenu}>Trips</Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/AddTrip'
                                className='nav-links'
                                onClick={closeMobileMenu}>AddTrip</Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/user'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >User</Link>
                        </li>
                        <li>
                            <Link
                                to='/'
                                className='buLogOut'
                                onClick={closeMobileMenu}>Log Out</Link>
                        </li>
                    
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>LOG OUT</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar