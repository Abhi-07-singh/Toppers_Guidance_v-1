import React from "react";
import "./Search_Toppers.css";
import Card from "../Card/Card";
function Search_Toppers() {
    return (
        <>
            <div className="search_toppers_heading">
                <h2>Search Toppers for your related Exams :-</h2>
            </div>
            <div className="toppers_search_bar">
                <div>
                    <img src="./images/search.png" className="search_img" alt="search_img"></img>
                </div>
                <div>
                    <input type="search" placeholder="Search for any Exams" className="topper_search"></input>
                </div>

            </div>
            <div className="srch_result_box">
                <div className="search_result">
                    <h3>Search Results here :-</h3>
                </div>
                <div className="search-id">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="view_more_btn">
                    <button>View more</button>
                </div>
            </div>

        </>
    )
}
export default Search_Toppers;