import React from "react";
import classes from "./Toppers_Tips.module.css"
function Toppers_Tips() {
    return (
        <>
            <div className={classes.toppers_tips_header}>
                <h2>Trending Tips by Toppers :-</h2>
            </div>
            <div className={classes.tips_card}>
                <div>
                    <div className={classes.upper_card}>
                        <div>
                            <img src="./images/user.svg" alt="user_icon"></img>
                        </div>
                        <div><p>ISHITA KISHORE</p></div>
                        <div><p>UPSC TOPPER 2022</p></div>
                    </div>
                    <div className={classes.lower_card}>
                        <div className={classes.tips_topic}><h3>4 Tips for setting powerful</h3> <br />
                            <h3 className={classes.break}>goals.</h3>
                        </div>
                        <div className={classes.lorem_ipsum_tips}>
                            <p> Evaluate and Reflect. The only way
                                we can reasonably decide what we
                                want in the future and how we'll get
                                there is to know where we are right
                                now and what our current level of
                                satisfaction is ...
                            </p>
                        </div>
                        <div className={classes.read_more_btn}>
                            <button>Read more...</button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={classes.upper_card}>
                        <div>
                            <img src="./images/user.svg" alt="user_icon"></img>
                        </div>
                        <div><p>ISHITA KISHORE</p></div>
                        <div><p>UPSC TOPPER 2022</p></div>
                    </div>
                    <div className={classes.lower_card}>
                        <div className={classes.tips_topic}><h3>4 Tips for setting powerful</h3> <br />
                            <h3 className={classes.break}>goals.</h3>
                        </div>
                        <div className={classes.lorem_ipsum_tips}>
                            <p> Evaluate and Reflect. The only way
                                we can reasonably decide what we
                                want in the future and how we'll get
                                there is to know where we are right
                                now and what our current level of
                                satisfaction is ...
                            </p>
                        </div>
                        <div className={classes.read_more_btn}>
                            <button>Read more...</button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={classes.upper_card}>
                        <div>
                            <img src="./images/user.svg" alt="user_icon"></img>
                        </div>
                        <div><p>ISHITA KISHORE</p></div>
                        <div><p>UPSC TOPPER 2022</p></div>
                    </div>
                    <div className={classes.lower_card}>
                        <div className={classes.tips_topic}><h3>4 Tips for setting powerful</h3> <br />
                            <h3 className={classes.break}>goals.</h3>
                        </div>
                        <div className={classes.lorem_ipsum_tips}>
                            <p> Evaluate and Reflect. The only way
                                we can reasonably decide what we
                                want in the future and how we'll get
                                there is to know where we are right
                                now and what our current level of
                                satisfaction is ...
                            </p>
                        </div>
                        <div className={classes.read_more_btn}>
                            <button>Read more...</button>
                        </div>
                    </div>
                </div>


            </div>
            <div><button className={classes.view_more_btn_tips}>View more</button></div>
        </>
    )
}
export default Toppers_Tips;