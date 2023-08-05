import React from "react";
import classes from "./Webinar.module.css";
import { BsChevronRight, BsArrowRightCircle } from "react-icons/bs";

const Webinar = () => {
  return (
    <>
      <div className={classes.webinar_top}>
        <div className={classes.upcoming_web}>
          <div className={classes.webinar_head}>
            <h1> Upcoming Webinars :- </h1>
          </div>
          <div className={classes.web_card}>
            <div class={classes.webinar_card}>
              <h5 class={classes.webinar-title}>
                How to be consistent during <br /> preparation of GK / GS
              </h5>
              <div class={classes.webinar-body}>
                <img src="./images/webinar.png" class={classes.webinar-img-middle} alt="webinar"/>
                <h6>Name : Jitendra Kumar</h6>
                <p>Date & Time : 23rd July sept.(6p.m)</p>
              </div>
              <div className={classes.web_btn}>
                <button>Register now<BsChevronRight style={{ color: "black", position: "relative", top: "2px" }}/></button>
              </div>
            </div>
            <div class={classes.webinar_card}>
              <h5 class={classes.webinar-title}>
                How to be consistent during <br /> preparation of GK / GS
              </h5>
              <div class={classes.webinar-body}>
                <img src="./images/webinar.png" class={classes.webinar-img-middle} alt="webinar"/>
                <h6>Name : Jitendra Kumar</h6>
                <p>Date & Time : 23rd July sept.(6p.m)</p>
              </div>
              <div className={classes.web_btn}>
                <button>Register now <BsChevronRight style={{ color: "black", position: "relative", top: "2px" }}/></button>
              </div>
            </div>
            <div class={classes.webinar_card}>
              <h5 class={classes.webinar-title}>
                How to be consistent during <br /> preparation of GK / GS
              </h5>
              <div class={classes.webinar-body}>
                <img src="./images/webinar.png" class={classes.webinar-img-middle} alt="webinar"/>
                <h6>Name : Jitendra Kumar</h6>
                <p>Date & Time : 23rd July sept.(6p.m)</p>
              </div>
              <div className={classes.web_btn}>
                <button>Register now<BsChevronRight style={{ color: "black", position: "relative", top: "2px" }}/></button>
              </div>
            </div>
          </div>
          <div className="web_viewbtn">
            <button>View more <BsArrowRightCircle style={{position: "relative",bottom: "20px",right: "64px",fontSize: "50px",}}/></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Webinar;
