import React from "react";
import classes from "./Most_Searched.module.css";
import Card from "../Card/Card";
function Most_Searched() {
    return (
        <>
            <div className={classes.most_searched_toppers_heading}>
                <h2>Most Searched Toppers :-</h2>
                <div className={classes.exams_name}>
                    <h3 className={classes.exams}>UPSC Toppers :-</h3>
                    <div className={classes.exam_toppers_list}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <img src="./images/arrow.svg" className={classes.arrow} alt="arrow-img"></img>
                    </div>

                </div>
                <div className={classes.exams_name}>
                    <h3 className={classes.exams}>SSC Toppers :-</h3>
                    <div className={classes.exam_toppers_list}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <img src="./images/arrow.svg" className={classes.arrow} alt="arrow-img"></img>
                    </div>

                </div>
                <div className={classes.exams_name}>
                    <h3 className={classes.exams}>Banking Toppers :-</h3>
                    <div className={classes.exam_toppers_list}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <img src="./images/arrow.svg" className={classes.arrow} alt="arrow-img"></img>
                    </div>

                </div>
                <div className={classes.exams_name}>
                    <h3 className={classes.exams}>Railway Toppers :-</h3>
                    <div className={classes.exam_toppers_list}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <img src="./images/arrow.svg" className={classes.arrow} alt="arrow-img"></img>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Most_Searched;