import React from "react";
import classes from "./Search_Toppers.module.css";
import Card from "../Card/Card";
function Search_Toppers() {
    return (
        <>
            <div className={classes.search_toppers_heading}>
                <h2>Search Toppers for your related Exams :-</h2>
            </div>
            <div className={classes.toppers_search_bar}>
                <div>
                    <img src="./images/search.png" className={classes.search_img} alt="search_img"></img>
                </div>
                <div>
                    <input type="search" placeholder="Search for any Exams" className={classes.topper_search}></input>
                </div>

            </div>
            <div className={classes.srch_result_box}>
                <div className={classes.search_result}>
                    <h3>Search Results here :-</h3>
                </div>
                <div className={classes.search_id}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className={classes.view_more_btn}>
                    <button>View more</button>
                </div>
            </div>

        </>
    )
}
export default Search_Toppers;