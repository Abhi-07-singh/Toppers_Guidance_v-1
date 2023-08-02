import React from "react";
import "./Most_Searched.css";
import Card from "../Card/Card";
function Most_Searched() {
    return (
        <>
            <div className="most_searched_toppers_heading">
                <h2>Most Searched Toppers :-</h2>
                <div className="exams_name">
                    <h3 className="exams">UPSC Toppers :-</h3>
                    <div className="exam_toppers_list">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <img src="./images/arrow.svg" className="arrow" alt="arrow-img"></img>
                    </div>

                </div>
                <div className="exams_name">
                    <h3 className="exams">SSC Toppers :-</h3>
                    <div className="exam_toppers_list">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <img src="./images/arrow.svg" className="arrow" alt="arrow-img"></img>
                    </div>

                </div>
                <div className="exams_name">
                    <h3 className="exams">Banking Toppers :-</h3>
                    <div className="exam_toppers_list">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <img src="./images/arrow.svg" className="arrow" alt="arrow-img"></img>
                    </div>

                </div>
                <div className="exams_name">
                    <h3 className="exams">Railway Toppers :-</h3>
                    <div className="exam_toppers_list">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <img src="./images/arrow.svg" className="arrow" alt="arrow-img"></img>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Most_Searched;