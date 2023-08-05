import React from 'react';
import classes from  "./header_SSC.module.css";

function header_SSC() {
  return (
    <div>
        <div className={classes.subHeader_exam}>
            <div className={classes.subHeader_text}>
                <h1>STAFF SELECTION COMMISSION (S.S.C.)</h1>
                <p>Central Government of India</p>
            </div>
            <div className={classes.subHeader_img}>
                <img src='./images/ssc img.svg' alt='ssc_icon' className={classes.subHeader_img_icon}></img>
            </div>
        </div>
    </div>
  )
}

export default header_SSC;
