import React from "react";
import "./CardCom.css";
// import { BiPodcast } from "react-icons/bi";
// import { SiMaterialdesign } from "react-icons/md";
import { SiMaterialdesign } from "react-icons/si";
import { BsArrowRightCircle } from "react-icons/bs";

const CardCom = () => {
  return (
    <>
      <div className="cardcom_top">
        <div className="cardcom_head">
          <h1>What all you get :-</h1>
        </div>
        <div className="card_model">
          <div className="full_card">
            <div className="card_hd">
              <h2>
                <SiMaterialdesign /> Studying Methodology :-
              </h2>
            </div>
            <div className="card_para">
              <p>- Concept and Application based learning</p>
              <p>- Interactive and engaging lecture</p>
              <p>- Integrated Approach focusing on competitive exams.</p>
            </div>
          </div>
          <div className="full_card">
            <div className="card_hd">
              <h2>
                {" "}
                <SiMaterialdesign /> Studying Methodology :-
              </h2>
            </div>
            <div className="card_para">
              <p>- Concept and Application based learning</p>
              <p>- Interactive and engaging lecture</p>
              <p>- Integrated Approach focusing on competitive exams.</p>
            </div>
          </div>
          <div className="full_card">
            <div className="card_hd">
              <h2>
                {" "}
                <SiMaterialdesign /> Studying Methodology :-
              </h2>
            </div>
            <div className="card_para">
              <p>- Concept and Application based learning</p>
              <p>- Interactive and engaging lecture</p>
              <p>- Integrated Approach focusing on competitive exams.</p>
            </div>
          </div>

          <div className="full_card">
            <div className="card_hd">
              <h2>
                <SiMaterialdesign /> Studying Methodology :-
              </h2>
            </div>
            <div className="card_para">
              <p>- Concept and Application based learning</p>
              <p>- Interactive and engaging lecture</p>
              <p>- Integrated Approach focusing on competitive exams.</p>
            </div>
          </div>
          <div className="full_card">
            <div className="card_hd">
              <h2>
                {" "}
                <SiMaterialdesign /> Studying Methodology :-
              </h2>
            </div>
            <div className="card_para">
              <p>- Concept and Application based learning</p>
              <p>- Interactive and engaging lecture</p>
              <p>- Integrated Approach focusing on competitive exams.</p>
            </div>
          </div>

          <div className="web_viewbtn_card">
            <button>
              View more
              <BsArrowRightCircle size="30px"
                style={{
                  position: "relative",
                  bottom: "20px",
                  right: "50px",
                  fontSize: "50px",
                }}
              />
            </button>
        </div>
        </div>

          
          
      </div>
    </>
  );
};

export default CardCom;
