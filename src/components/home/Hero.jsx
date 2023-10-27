import { title } from './data/home-data';

import mystyles from './Hero.module.css';

const Hero = () => {
    const heroClasses = `container ${mystyles.flex}`;
    return (
        <section className={mystyles.hero}>
            <div className={heroClasses}>
                <div className={mystyles.title}>
                    <h1><span>React</span> projects</h1>
                    <p>My collection of interesting React projects from the Udemy course: <b>React 18 Tutorial and Projects</b> ( by John Smilga ). Feel free to follow the links and explore the projects.</p>
                    <div className={mystyles['title-btns']}>
                        <a href={title.url} target="_blank" className={mystyles['title-btn1']}>Udemy</a>
                        <a href={title.giturl} target="_blank" className={mystyles['title-btn1']}>GitHub</a>
                    </div>
                </div>
                <div className={mystyles.image}>
                    <img src='/images/hero-image.png' alt="react 18 hero" className={mystyles.img}/>
                </div>
            </div>
        </section>
    );
};

export default Hero;