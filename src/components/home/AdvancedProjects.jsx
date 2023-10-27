import mystyles from './AdvancedProjects.module.css';
import { advancedProjects } from './data/home-data';

import ProjectItem from './ProjectItem';

const AdvancedProjects = () => {
    return (
        <section className="container">
            <h2 className={mystyles.h2}><span>Advanced </span>Projects</h2>
            <div className={mystyles['grid-container']}>
                {advancedProjects.map(item => {
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

export default AdvancedProjects;