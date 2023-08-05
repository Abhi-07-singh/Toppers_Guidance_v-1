import React from 'react';
import classes from "./Variety.module.css";

const Variety = () => {
  return (
    <>
        <div className={classes.at_a_glance}>
            <h2>S.S.C. at a Glance</h2>
        </div>
        <div className={classes.variety_heading}>
            <h2>Varieties of Exams held under S.S.C. :-</h2>
        </div>
        <div className={classes.exams_variety_names}>
            <div className={classes.variety_details}>
                <img src='./images/ssc img.svg' alt='ssc_icon' className={classes.ssc_variety_icon}></img>
                <p>SSC CHSL</p>
            </div>
            <div className={classes.variety_details}>
                <img src='./images/ssc img.svg' alt='ssc_icon' className={classes.ssc_variety_icon}></img>
                <p>SSC CGL</p>
            </div>
            <div className={classes.variety_details}>
                <img src='./images/ssc img.svg' alt='ssc_icon' className={classes.ssc_variety_icon}></img>
                <p>SSC CPO</p>
            </div>
            <div className={classes.variety_details}>
                <img src='./images/ssc img.svg' alt='ssc_icon' className={classes.ssc_variety_icon}></img>
                <p>SSC GD</p>
            </div>
            <div className={classes.variety_details}>
                <img src='./images/ssc img.svg' alt='ssc_icon' className={classes.ssc_variety_icon}></img>
                <p>SSC MTS</p>
            </div>
            <div className={classes.variety_details}>
                <img src='./images/ssc img.svg' alt='ssc_icon' className={classes.ssc_variety_icon}></img>
                <p>SSC JE</p>
            </div>
            <div className={classes.variety_details}>
                <img src='./images/ssc img.svg' alt='ssc_icon' className={classes.ssc_variety_icon}></img>
                <p>SSC SE. POST</p>
            </div>
            <div className={classes.variety_details}>
                <img src='./images/ssc img.svg' alt='ssc_icon' className={classes.ssc_variety_icon}></img>
                <p>SSC STENO</p>
            </div>
            
        </div>
    </>
  )
}

export default Variety;
