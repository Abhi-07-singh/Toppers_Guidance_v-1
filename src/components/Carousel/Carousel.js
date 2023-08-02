import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "./Carousel.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1080 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
function Carousel1() {


    return (
        <div className="main_carousel_div" style={{zIndex:'-1'}}>
            <Carousel responsive={responsive} infinite={true}  autoPlay= {true}>
                {/* <div className="item_img_carousel"><img src="./images/carou1.svg"></img></div>
                <div className="item_img_carousel"><img src="./images/carou2.svg"></img></div>
                <div className="item_img_carousel"><img src="./images/carou1.svg"></img></div>
                <div className="item_img_carousel"><img src="./images/carou2.svg"></img></div> */}
                <div className="item">
                    <div>
                    <h1>India's 1st platform where one can Establish a</h1> <br></br>
                    <h1>connection with Toppers directly.</h1>

                    <p>Success is at your step now.</p>

                    <Link to="/login"><button className="btn">Get Registered now !</button></Link>
                    </div>
                    <div>
                        <img src="./images/carou3.svg" alt="vector_img" className="carou_img"></img>
                    </div>
                </div>
                <div className="item">
                    <div>
                    <h1>India's 1st platform where one can Establish a</h1> <br></br>
                    <h1>connection with Toppers directly.</h1>

                    <p>Success is at your step now.</p>

                    <Link to="/login"><button className="btn">Get Registered now !</button></Link>
                    </div>
                    <div>
                        <img src="./images/carou3.svg" alt="vector_img" className="carou_img"></img>
                    </div>
                </div>
                <div className="item">
                    <div>
                    <h1>India's 1st platform where one can Establish a</h1> <br></br>
                    <h1>connection with Toppers directly.</h1>

                    <p>Success is at your step now.</p>

                    <Link to="/login"><button className="btn">Get Registered now !</button></Link>
                    </div>
                    <div>
                        <img src="./images/carou3.svg" alt="vector_img" className="carou_img"></img>
                    </div>
                </div>
                
                



            </Carousel>
        </div>
    )
}
export default Carousel1;