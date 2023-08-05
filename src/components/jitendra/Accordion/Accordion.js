import React from 'react';
import classes from "./Accordion.module.css";
import MyAccordion from './MyAccordion';
import { questions } from './api';

const Accordion = () => {
    var heading="Frequently Asked Questions"
    return (
    <>
    <section className={classes.main_sec}>
        <div className={classes.faq_main}>
            <h1>{heading}</h1>
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