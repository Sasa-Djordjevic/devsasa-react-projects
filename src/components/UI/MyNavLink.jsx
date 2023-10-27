import { NavLink } from 'react-router-dom';

import mystyles from './MyNavLink.module.css';

const MyNavLink = (props) => {
    return (
        <NavLink 
            to={props.url}
            onClick={props.closeNavHandler ? props.closeNavHandler : undefined}
            className={({isActive}) => isActive ? `${mystyles.color} ${mystyles.active}` : mystyles.color}
        >{props.text}
        </NavLink>
    );
};

export default MyNavLink;