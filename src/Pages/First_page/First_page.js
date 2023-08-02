import React from "react";
import Header from '../../components/Header/Header';
import Carousel1 from "../../components/Carousel/Carousel";
import ExamSelection from '../../components/Exam_Selection/Exam_Selection';
import SearchToppers from "../../components/Search_Toppers/Search_Toppers";
import MostSearched from '../../components/Most_Searched/Most_Searched';
import UpcomingWebinar from '../../components/Upcoming_Webinars/Upcoming_Webinars';
import ToppersTips from '../../components/Toppers_Tips/Toppers_Tips';
import Podcast from '../../components/Podcast/Podcast';
import Footer from '../../components/Footer/Footer';


function FirstPage() {
    return (
        <>
            <Header />
           <div style={{zIndex:'-1'}}> <Carousel1 /> </div>
            <ExamSelection />
            <SearchToppers />
            <MostSearched />
            <UpcomingWebinar />
            <ToppersTips />
            <Podcast />
            <Footer />
        </>
    )
}
export default FirstPage;