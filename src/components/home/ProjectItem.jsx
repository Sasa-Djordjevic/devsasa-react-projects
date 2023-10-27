import { Link } from "react-router-dom";

import mystyles from './ProjectItem.module.css';

const ProjectItem = (props) => {
    return (
        <div className={mystyles.projest}>
            <div className={mystyles.icon}>
                {props.item.icon}
            </div>
            <h3>{props.item.name}</h3>
            <div className={mystyles.div}>
                <Link to={props.item.url} className={mystyles['icon-btn1']} >Project</Link>
            </div>
            <div className={mystyles.div}>
                <a href={props.item.giturl} target="_blank" className={mystyles['icon-btn1']} >GitHub</a>
            </div>
        </div>
    );
};

export default ProjectItem;