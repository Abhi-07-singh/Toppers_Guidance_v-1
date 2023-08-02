import React from 'react';
import "./Topper_Intro_Videos.css";
import NewsArticles from '../News_Articles/News_Articles';
import ToppersPlanStrategy from '../Toppers_Plan_Strategy/Toppers_Plan_Strategy';

const Topper_Intro_Videos = () => {
    return (
        <>
            <div className='toppers_intro_videos_heading'>
                <h2>Popular Toppers Introduction Videos :-</h2>
            </div>
            <div className='intro_video_and_news_articles_and_plan_strategy'>
                <div className='intro_video_and_news_articles'>
                    <div className='intro_detail_card'>
                        <div>
                            <div className='intro_video_section_icon'>
                                <img src='./images/video.svg' alt='video_icon' className='intro_video_icon'></img>
                            </div>
                            <div className='intro_video_detail'>
                                <p>Xyz (name)</p>
                                <p>SSC JE 2022</p>
                                <p>All India Rank :- 2nd</p>
                            </div>
                        </div>

                        <div>
                            <div className='intro_video_section_icon'>
                                <img src='./images/video.svg' alt='video_icon' className='intro_video_icon'></img>
                            </div>
                            <div className='intro_video_detail'>
                                <p>Xyz (name)</p>
                                <p>SSC JE 2022</p>
                                <p>All India Rank :- 2nd</p>
                            </div>
                        </div>

                        <div>
                            <div className='intro_video_section_icon'>
                                <img src='./images/video.svg' alt='video_icon' className='intro_video_icon'></img>
                            </div>
                            <div className='intro_video_detail'>
                                <p>Xyz (name)</p>
                                <p>SSC JE 2022</p>
                                <p>All India Rank :- 2nd</p>
                            </div>
                        </div>

                        <div>
                            <div className='intro_video_section_icon'>
                                <img src='./images/video.svg' alt='video_icon' className='intro_video_icon'></img>
                            </div>
                            <div className='intro_video_detail'>
                                <p>Xyz (name)</p>
                                <p>SSC JE 2022</p>
                                <p>All India Rank :- 2nd</p>
                            </div>
                        </div>

                        <div>
                            <div className='intro_video_section_icon'>
                                <img src='./images/video.svg' alt='video_icon' className='intro_video_icon'></img>
                            </div>
                            <div className='intro_video_detail'>
                                <p>Xyz (name)</p>
                                <p>SSC JE 2022</p>
                                <p>All India Rank :- 2nd</p>
                            </div>
                        </div>

                        <div>
                            <div className='intro_video_section_icon'>
                                <img src='./images/video.svg' alt='video_icon' className='intro_video_icon'></img>
                            </div>
                            <div className='intro_video_detail'>
                                <p>Xyz (name)</p>
                                <p>SSC JE 2022</p>
                                <p>All India Rank :- 2nd</p>
                            </div>
                        </div>

                        <div>
                            <div className='intro_video_section_icon'>
                                <img src='./images/video.svg' alt='video_icon' className='intro_video_icon'></img>
                            </div>
                            <div className='intro_video_detail'>
                                <p>Xyz (name)</p>
                                <p>SSC JE 2022</p>
                                <p>All India Rank :- 2nd</p>
                            </div>
                        </div>

                        <div>
                            <div className='intro_video_section_icon'>
                                <img src='./images/video.svg' alt='video_icon' className='intro_video_icon'></img>
                            </div>
                            <div className='intro_video_detail'>
                                <p>Xyz (name)</p>
                                <p>SSC JE 2022</p>
                                <p>All India Rank :- 2nd</p>
                            </div>
                        </div>
                    </div>
                    <div className='news_article_section'>
                        <NewsArticles />
                    </div>
                </div>
                <div className='plan_strategy_card'><ToppersPlanStrategy /></div>
            </div>
        </>
    )
}

export default Topper_Intro_Videos;
