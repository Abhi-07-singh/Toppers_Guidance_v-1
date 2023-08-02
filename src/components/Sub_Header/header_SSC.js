import React from 'react';
import "./header_SSC.css";

function header_SSC() {
  return (
    <div>
        <div className='subHeader_exam'>
            <div className='subHeader_text'>
                <h1>STAFF SELECTION COMMISSION (S.S.C.)</h1>
                <p>Central Government of India</p>
            </div>
            <div className='subHeader_img'>
                <img src='./images/ssc img.svg' alt='ssc_icon' className='subHeader_img_icon'></img>
            </div>
        </div>
    </div>
  )
}

export default header_SSC;
