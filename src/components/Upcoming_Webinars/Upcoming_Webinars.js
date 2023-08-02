import React from "react";
import "./Upcoming_Webinars.css";
function Upcoming_Webinar() {
    return (
        <>
            <div className="webinar_heading">
                <h2>Upcoming Webinars :-</h2>
            </div>

            <div className="webinar_card">
                <div className="card_boundary">
                    <div className="heading">
                        <h3>How to be consistent during </h3><br />
                        <h3 className="break">preparation of GK / GS</h3>
                    </div>
                    <div className="webinar_image">
                        <img src="./images/webinar.svg" alt="webinar_img" className="webinar_img"></img>
                    </div>
                    <div className="webinar_holder_name">
                        <p>Name :- Xyz</p>
                    </div>
                    <div className="time">
                        <p>Date & Time :- 23rd Sept. 2023 (6 am)</p>
                    </div>
                    <div>
                        <button className="regs_btn">Register now</button>
                    </div>


                </div>

                <div className="card_boundary">
                    <div className="heading">
                        <h3>How to be consistent during </h3><br />
                        <h3 className="break">preparation of GK / GS</h3>
                    </div>
                    <div className="webinar_image">
                        <img src="./images/webinar.svg" alt="webinar_img" className="webinar_img"></img>
                    </div>
                    <div className="webinar_holder_name">
                        <p>Name :- Xyz</p>
                    </div>
                    <div className="time">
                        <p>Date & Time :- 23rd Sept. 2023 (6 am)</p>
                    </div>
                    <div>
                        <button className="regs_btn">Register now</button>
                    </div>


                </div>

                <div className="card_boundary">
                    <div className="heading">
                        <h3>How to be consistent during </h3><br />
                        <h3 className="break">preparation of GK / GS</h3>
                    </div>
                    <div className="webinar_image">
                        <img src="./images/webinar.svg" alt="webinar_img" className="webinar_img"></img>
                    </div>
                    <div className="webinar_holder_name">
                        <p>Name :- Xyz</p>
                    </div>
                    <div className="time">
                        <p>Date & Time :- 23rd Sept. 2023 (6 am)</p>
                    </div>
                    <div>
                        <button className="regs_btn">Register now</button>
                    </div>


                </div>


            </div>
            <div className="more_button">
                <img src="./images/arrow.svg" className="more_webinar" alt="arrow-img"></img>
            </div>

        </>
    )
}
export default Upcoming_Webinar;