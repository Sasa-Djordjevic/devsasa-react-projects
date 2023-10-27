import Tab from "./Tab";

import mystyles from './TabsList.module.css';

const TabsList = (props) => {
    return (
        <div className={mystyles['btn-container']}>
            {props.companies.map( (item, index) => {
                return (
                    <Tab 
                        key={item.order} 
                        company={item.company} 
                        order={item.order} 
                        jobHandler={props.jobHandler}
                        activeClass={index === props.activejob ? true : false}
                    />
                );
            })}
        </div>
    );
};

export default TabsList;