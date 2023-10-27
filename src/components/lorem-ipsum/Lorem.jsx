import React, {useState} from 'react';

import text from '../../assets/data/lorem-ipsum';
import mystyles from './Lorem.module.css';
import LoremForm from './LoremForm';
import LoremText from './LoremText';

const Lorem = () => {
    const [numberOfParagraphs, setNumberOfParagraphs] = useState(0);

    const numberHandler = (number) => {
        setNumberOfParagraphs(number);
    };

    const textData = text.slice(0, numberOfParagraphs);

    return (
        <section className={mystyles['section-center']}>
            <h1 className='h1'><span>Lorem Ipsum</span> App</h1>
            <h2>tired of boring lorem ipsum?</h2>
            <LoremForm numberHandler={numberHandler} />
            <LoremText textData={textData}/>
        </section>
    );
};

export default Lorem;