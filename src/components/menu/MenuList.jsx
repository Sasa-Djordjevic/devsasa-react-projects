import MenuItem from './MenuItem';

import mystyles from './MenuList.module.css';

const MenuList = (props) => {
    return (
        <div className={mystyles['section-center']}>
            {props.data.map( (item) => {
                return (
                    <MenuItem key={item.id} dataInfo={item} />
                );
            })}
        </div>
    );
};

export default MenuList;