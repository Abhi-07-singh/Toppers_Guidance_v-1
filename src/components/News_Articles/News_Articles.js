import React from 'react';
import classes from  "./News_Articles.module.css";

const NewsArticles = () => {
  return (
    <>
        <div className={classes.news_section}>
            <div>
                <h3>Latest News</h3>
            </div>
            <div>
                <a href='#'><p>SSC Regions</p></a>
                <a href='#'><p>SSC Notification 2023</p></a>
                <a href='#'><p>SSC CGL Notification</p></a>
                <a href='#'><p>SSC GD Notification</p></a>
                <a href='#'><p>SSC CPO Notification</p></a>
                <a href='#'><p>SSC CHSL Notification</p></a>
                <a href='#'><p>SSC JE Notification</p></a>
                <a href='#'><p>SSC MTS Notification</p></a>
                <a href='#'><p>SSC Steno. Notification</p></a>
            </div>
        </div>
        <div className={classes.articles_section}>
            <div>
                <h3>Related Articles</h3>
            </div>
            <div>
                <a href='#'><p>Job Profile of SSC CGL AEO </p></a>
                <a href='#'><p>Job Profile of SSC CGL ASO </p></a>
                <a href='#'><p>About the SSC MTS Exam! </p></a>
                <a href='#'><p> SSC Career and jobs part-01</p></a>
                <a href='#'><p> SSC Career and job part-02</p></a>
            </div>
        </div>
    </>
  )
}

export default NewsArticles;
