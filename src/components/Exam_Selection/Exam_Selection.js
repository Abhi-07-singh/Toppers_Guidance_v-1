import React, { useState } from "react";
import "./Exam_Selection.css";
import { Link } from "react-router-dom";
import examNameList from "./Exam_Selection.json";
function ExamSelection() {
    const [visible, setVisible] = useState(10);
    const view_more_handler = () => {
        setVisible(prevValue=>prevValue+5);
    }
    return (
        <div className="exam_selection_main_div">
            <h2>Select Your Exam :-</h2>
            <div className="container">
                {examNameList.slice(0,visible).map(examName => {
                    return (
                        <div className="items">
                            <Link to={examName.to} ><h3>{examName.exam}</h3></Link>
                        </div>
                    )
                })}

                

            </div>
            <div className="view_more_button">
                <button onClick={view_more_handler}>
                    View more
                </button>
            </div>
        </div>
    )
}
export default ExamSelection;