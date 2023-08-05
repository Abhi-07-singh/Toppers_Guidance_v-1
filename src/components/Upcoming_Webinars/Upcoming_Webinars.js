import React from "react";
import classes from  "./Upcoming_Webinars.module.css";
function Upcoming_Webinar() {
    return (
        <>
            <div className={classes.webinar_heading}>
                <h2>Upcoming Webinars :-</h2>
            </div>

            <div className={classes.webinar_card}>
                <div className={classes.card_boundary}>
                    <div className={classes.heading}>
                        <h3>How to be consistent during </h3><br />
                        <h3 className={classes.break}>preparation of GK / GS</h3>
                    </div>
                    <div className={classes.webinar_image}>
                        <img src="./images/webinar.svg" alt="webinar_img" className={classes.webinar_img}></img>
                    </div>
                    <div className={classes.webinar_holder_name}>
                        <p>Name :- Xyz</p>
                    </div>
                    <div className={classes.time}>
                        <p>Date & Time :- 23rd Sept. 2023 (6 am)</p>
                    </div>
                    <div>
                        <button className={classes.regs_btn}>Register now</button>
                    </div>


                </div>

                <div className={classes.card_boundary}>
                    <div className={classes.heading}>
                        <h3>How to be consistent during </h3><br />
                        <h3 className={classes.break}>preparation of GK / GS</h3>
                    </div>
                    <div className={classes.webinar_image}>
                        <img src="./images/webinar.svg" alt="webinar_img" className={classes.webinar_img}></img>
                    </div>
                    <div className={classes.webinar_holder_name}>
                        <p>Name :- Xyz</p>
                    </div>
                    <div className={classes.time}>
                        <p>Date & Time :- 23rd Sept. 2023 (6 am)</p>
                    </div>
                    <div>
                        <button className={classes.regs_btn}>Register now</button>
                    </div>


                </div>

                <div className={classes.card_boundary}>
                    <div className={classes.heading}>
                        <h3>How to be consistent during </h3><br />
                        <h3 className={classes.break}>preparation of GK / GS</h3>
                    </div>
                    <div className={classes.webinar_image}>
                        <img src="./images/webinar.svg" alt="webinar_img" className={classes.webinar_img}></img>
                    </div>
                    <div className={classes.webinar_holder_name}>
                        <p>Name :- Xyz</p>
                    </div>
                    <div className={classes.time}>
                        <p>Date & Time :- 23rd Sept. 2023 (6 am)</p>
                    </div>
                    <div>
                        <button className={classes.regs_btn}>Register now</button>
                    </div>


                </div>


            </div>
            <div className={classes.more_button}>
                <img src="./images/arrow.svg" className={classes.more_webinar} alt="arrow-img"></img>
            </div>

        </>
    )
}
export default Upcoming_Webinar;