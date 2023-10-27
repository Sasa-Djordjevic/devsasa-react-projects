import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PiCaretDownBold} from 'react-icons/pi';

import mystyles from './MainNavigation.module.css';
import { basicProjectsLinks } from './data/links-data';
import { advancedProjectsLinks } from './data/links-data';
import MyNavLink from './MyNavLink';
import { nanoid } from 'nanoid';

const body = document.querySelector('body');

const MainNavigation = () => {
    const [openNav, setOpenNav] = useState(false);

    const openNavHandler = () => {
        setOpenNav(!openNav);
    };

    const closeNavHandler = () => {
        if (openNav) {
            setOpenNav(false);
        }
    };

    if (openNav) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "initial";
    }

    const navClasses = `${mystyles.links} ${openNav ? mystyles.linksopen : ''}`;
    const burgerClasses = `${mystyles.burger} ${openNav ? mystyles.toggle : ''}`;

    return (
        <header>
            <nav className={mystyles.nav}>
                <div className={mystyles.logo}>
                    <NavLink to='/'>
                        <h2><img src="./images/logo-image-1.png" alt="react logo" className={mystyles.react} /> projects</h2>
                    </NavLink>
                </div>
                <ul className={navClasses}>
                    <li className={mystyles['home-btn']}>
                        <NavLink
                            to='/' 
                            // className={({isActive}) => isActive ? mystyles.active : undefined}
                            className={({isActive}) => isActive ? `${mystyles['home-logo']} ${mystyles.active}` : mystyles['home-logo']}
                            onClick={closeNavHandler}
                        >Home</NavLink>
                    </li>
                    <li className={mystyles.dropdown}>
                        <div className={mystyles['dropdown-btn']}>
                            <a>Basic Projects</a>
                            <PiCaretDownBold />
                        </div>
                        <div className={mystyles['dropdown-content']}>
                            {basicProjectsLinks.map( (link) => {
                                return (
                                    <MyNavLink 
                                        key={nanoid()}
                                        url={link.url}
                                        text={link.text}
                                        closeNavHandler={closeNavHandler}
                                    />
                                );
                            })}
                        </div>
                    </li>
                    <li className={mystyles.dropdown}>
                        <div className={mystyles['dropdown-btn']}>
                            <a>Advanced Projects</a>
                            <PiCaretDownBold />
                        </div>
                        <div className={mystyles['dropdown-content']}>
                            {advancedProjectsLinks.map( (link) => {
                                return (
                                    <MyNavLink 
                                        key={nanoid()}
                                        url={link.url}
                                        text={link.text}
                                        closeNavHandler={closeNavHandler}
                                    />
                                );
                            })}
                        </div>
                    </li>
                </ul>
                <div className={burgerClasses} onClick={openNavHandler}>
                    <div className={mystyles.line1}></div>
                    <div className={mystyles.line2}></div>
                    <div className={mystyles.line3}></div>
                </div>
            </nav>
        </header>
    )
};

export default MainNavigation;