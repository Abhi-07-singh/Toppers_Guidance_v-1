import React, { useState } from 'react'
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import classes from "./Accordion.module.css"
const MyAccordion = ({question, answer}) => {
    const [show, setShow] = useState(false);

  return (    
    <>
    <div className={classes.main_heading} onClick={() =>setShow(!show)}>
        <p >{show? <BsChevronDown /> : <BsChevronRight /> }</p>
        <h3>{question}</h3>
    </div>
    {show && <p className={classes.answers}>{answer}</p>}
    </>
  )
}

export default MyAccordion;