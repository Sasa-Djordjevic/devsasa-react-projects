import { NavLink } from 'react-router-dom';

import mystyles from './FooterNavigation.module.css';
import { basicProjectsLinks } from './data/links-data';
import { advancedProjectsLinks } from './data/links-data';
import MyNavLink from './MyNavLink';
import { nanoid } from 'nanoid';
import { SiUdemy } from 'react-icons/si';
import { LuGithub } from 'react-icons/lu';

const year = new Date

const FooterNavigation = () => {
    const sectionClssses = `container ${mystyles['flex-section']}`;

    return (
        <footer>
            <div className={sectionClssses}>
                <div className={mystyles.div1}>
                    <div>
                        <div>
                            <NavLink to='/'>
                                <h2 className={mystyles.h2}><span>React</span> projects</h2>
                            </NavLink>
                        </div>
                        <div className={mystyles.icons}>
                            <a href='https://www.udemy.com/course/react-tutorial-and-projects-course/' target="_blank">
                                <SiUdemy />
                            </a>
                            <a href='https://github.com/Sasa-Djordjevic/react-tutorial-and-projects/tree/main' target="_blank">
                                <LuGithub />
                            </a>
                        </div>
                    </div>
                    <div className={mystyles['logo-div']}>
                        <img src="./images/logo-image-2.png" alt="react logo" className={mystyles.logo} />
                    </div>
                </div>
                <div className={mystyles.div2}>
                    <h3>Basic Projects</h3>
                    <div className={mystyles.links}>
                        {basicProjectsLinks.map( link => {
                            return (
                                <MyNavLink 
                                    key={nanoid()}
                                    url={link.url}
                                    text={link.text}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className={mystyles.div3}>
                    <h3>Advanced Projects</h3>
                    <div className={mystyles.links}>
                        {advancedProjectsLinks.map( link => {
                            return (
                                <MyNavLink 
                                    key={nanoid()}
                                    url={link.url}
                                    text={link.text}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <p className={mystyles.rights}>All rights reserved by <a href="https://devsasa.com/" target='_blank'>devsasa.com</a> - &copy; {year.getFullYear()}</p>
        </footer>
    );
};

export default FooterNavigation