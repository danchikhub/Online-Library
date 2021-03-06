import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
const Header = () => {
    
    return (
        <div className='header'>
            <div className='container'>
                <div className='nav-wrapper'>
                    <div className='wrapper'>
                        <div className='logo-wrapper'>
                            <Link to='/' className='nav-list_link'>
                                Главная
                            </Link>
                        </div>
                        <nav className='nav'>
                            <ul className='nav-list'>
                                <li className='nav-list_item'>
                                    <NavLink activeClassName="selected"  to='/wishlist' className='nav-list_link'>Wish list</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <Link to='/crud' className='nav-list_link'>CRUD panel</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;