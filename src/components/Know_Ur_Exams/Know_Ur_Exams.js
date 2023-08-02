import React from 'react';
import "./Know_Ur_Exams.css";

const KnowUrExams = () => {
  return (
    <>
        <div className='know_ur_exams_heading'>
            <h2>Know about your Exams :-</h2>
        </div>
    <div className='know_ur_exams_quote'>
        <p>Before starting preparation for an exam, one needs to know the domain they are going into. Here are the list of entrance exams for </p> <br />
        <p className='know_ur_exam_break'>respective exams of SSC.</p>
    </div>

    <div className="container">
                <div className="items">
                    <a href='#'><h3 className='know_ur_exam_content'>MTS</h3></a>
                </div>
                <div className="items">
                <a href="#"><h3 className='know_ur_exam_content'>CHSL</h3></a>

                </div>
                <div className="items">
                <a href="#"><h3 className='know_ur_exam_content'>CGL</h3></a>

                </div>
                <div className="items">
                <a href="#"><h3 className='know_ur_exam_content'>CPO</h3></a>

                </div>
                <div className="items">
                <a href="#"><h3 className='know_ur_exam_content'>GD</h3></a>

                </div>
                <div className="items">
                <a href="#"><h3 className='know_ur_exam_content'>STENO.</h3></a>

                </div>
                <div className="items">
                <a href="#"><h3 className='know_ur_exam_content'>SELEC. POST</h3></a>

                </div>
                <div className="items">
                <a href="#"><h3 className='know_ur_exam_content'>JE</h3></a>

                </div>
            </div>
    </>
  )
}

export default KnowUrExams;
