import React, {useState, useEffect} from "react";

import {list} from '../../assets/data/slider';
import {FaQuoteRight} from 'react-icons/fa';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

import mystyles from './Slider1.module.css';

const Slider1 = () => {
    const [people, setPeople] = useState(list);
    const [curentPerson, setCurentPerson] = useState(0);

    const prevSlide = () => {
        setCurentPerson((oldPerson) => {
            const result = (oldPerson - 1 + people.length) % people.length;
            return result;
        });
    };
    const nextSlide = () => {
        setCurentPerson((oldPerson) => {
            const result = (oldPerson + 1) % people.length;
            return result;
        });
    };

    useEffect(() => {
        let sliderInt = setInterval(() => {
            nextSlide()
        }, 10000);

        return () => {
            clearInterval(sliderInt);
        }
    }, [curentPerson]);

    return (
        <div className={mystyles['slider-container']}>
            {people.map((person, indexP) => {
                const {id, image, name, title, quote} = person;
                return (
                    <div 
                        key={id}
                        className={mystyles.slide}
                        style={{
                            transform: `translateX(${100 * (indexP - curentPerson)}%`,
                            opacity: indexP === curentPerson ? 1 : 0,
                            visibility: indexP === curentPerson ? 'visible' : 'hidden'
                        }}

                    >
                        <img src={image} alt={name} className={mystyles['person-img']} />
                        <h5 className={mystyles.name}>{name}</h5>
                        <p className={mystyles.title}>{title}</p>
                        <p className={mystyles.text}>{quote}</p>
                        <FaQuoteRight className={mystyles.icon} />
                    </div>
                );
            })}
            <button type="button" className={mystyles.prev} onClick={prevSlide}>
                <FiChevronLeft />
            </button>
            <button type="button" className={mystyles.next} onClick={nextSlide}>
                <FiChevronRight />
            </button>
        </div>
    );
};

export default Slider1;