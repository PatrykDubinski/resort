import React, {useState} from 'react'
import {Link} from 'react-router-dom';

import logo from '../../../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';

const Navbar = () => {
    const [isOpened, setIsOpened] = useState(false);

    const handleToggle = () => {
        setIsOpened(!isOpened);
    }

    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/'>
                        <img src={logo} alt='Beach Resort' />
                    </Link>
                    <button type='button' className='nav-btn'>
                        <FaAlignRight className='nav-icon' onClick={handleToggle} />
                    </button>
                </div>
                <ul className={isOpened ? 'nav-links show-nav' : 'nav-links'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/rooms'>Rooms</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
