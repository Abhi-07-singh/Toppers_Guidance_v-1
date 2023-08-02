import React from "react";
import "./Webinar.css";
import { BsChevronRight, BsArrowRightCircle } from "react-icons/bs";

const Webinar = () => {
  return (
    <>
      <div className="webinar_top">
        <div className="upcoming_web">
          <div className="webinar_head">
            <h1> Upcoming Webinars :- </h1>
          </div>
          <div className="web_card">
            <div class="webinar_card">
              <h5 class="webinar-title">
                How to be consistent during <br /> preparation of GK / GS
              </h5>
              <div class="webinar-body">
                <img src="./images/webinar.png" class="webinar-img-middle" alt="webinar"/>
                <h6>Name : Jitendra Kumar</h6>
                <p>Date & Time : 23rd July sept.(6p.m)</p>
              </div>
              <div className="web_btn">
                <button>Register now<BsChevronRight style={{ color: "black", position: "relative", top: "2px" }}/></button>
              </div>
            </div>
            <div class="webinar_card">
              <h5 class="webinar-title">
                How to be consistent during <br /> preparation of GK / GS
              </h5>
              <div class="webinar-body">
                <img src="./images/webinar.png" class="webinar-img-middle" alt="webinar"/>
                <h6>Name : Jitendra Kumar</h6>
                <p>Date & Time : 23rd July sept.(6p.m)</p>
              </div>
              <div className="web_btn">
                <button>Register now <BsChevronRight style={{ color: "black", position: "relative", top: "2px" }}/></button>
              </div>
            </div>
            <div class="webinar_card">
              <h5 class="webinar-title">
                How to be consistent during <br /> preparation of GK / GS
              </h5>
              <div class="webinar-body">
                <img src="./images/webinar.png" class="webinar-img-middle" alt="webinar"/>
                <h6>Name : Jitendra Kumar</h6>
                <p>Date & Time : 23rd July sept.(6p.m)</p>
              </div>
              <div className="web_btn">
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
