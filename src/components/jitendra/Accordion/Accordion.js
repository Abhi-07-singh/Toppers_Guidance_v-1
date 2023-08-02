import React from 'react';
import "./Accordion.css";
import MyAccordion from './MyAccordion';
import { questions } from './api';

const Accordion = () => {
    return (
    <>
    <section className='main_sec'>
        <div className='faq_main'>
            <h1>Frequently Asked Questions</h1>
        {
            questions.map((curEle) => {
                const { id } = curEle;
                return <MyAccordion key={ id } { ...curEle} />
            })
        }
        </div>
    </section>
    </>
  )
}

export default Accordion;