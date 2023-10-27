import React, {useState} from 'react';

import data from '../../assets/data/birthday-buddy';
import mystyles from './PersonList.module.css';

import Person from "./Person";

const PersonList = () => {
    const [friends, setFriends] = useState(data);

    const birthdayNumber = friends.length;

    const clearHandler = () => {
        setFriends([]);
    };

    return (
        <section className={mystyles.birthdays}>
            <h1 className='h1'><span>Birthday</span> Buddy</h1>
            <div className={mystyles.list}>
                <h3>{birthdayNumber} Birthdays Today</h3>
                {friends.map( (person) => {
                    return <Person key={person.id} info={person}/>
                })}
                <button className='btn btn-block' onClick={clearHandler}>Clear All</button>
            </div>
        </section>
    );
};

export default PersonList;