import mystyles from './BasicProjects.module.css';
import { basicProjects } from './data/home-data';

import ProjectItem from './ProjectItem';

const BasicProjects = () => {
    return (
        <section className="container">
            <h2 className={mystyles.h2}><span>Basic </span> Projects</h2>
            <div className={mystyles['grid-container']}>
                {basicProjects.map(item => {
                    return (
                        <ProjectItem 
                            key={item.id}
                            item={item}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default BasicProjects;