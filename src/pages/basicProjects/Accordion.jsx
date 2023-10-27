import React from 'react';

import questions from '../../assets/data/accordion';

import Questions from '../../components/accordion/Questions';

const AccordionPage = () => {
  return (
    <section className='container'>
        <h1 className='h1'><span>Accordion</span> App</h1>
       <Questions data={questions}/>
    </section>
  );
};
export default AccordionPage;