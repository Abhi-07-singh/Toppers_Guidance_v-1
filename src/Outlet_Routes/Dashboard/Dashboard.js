import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '../../components/Card/Card';
const responsive = {
  superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
  },
  desktop: {
      breakpoint: { max: 3000, min: 1080 },
      items: 3
  },
  tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
  }
};
const Dashboard = () => {
  return (
    <>
        <div className="main_carousel_div" style={{zIndex:'-1'}}>
            <Carousel responsive={responsive} infinite={true}  autoPlay= {true}>
                {/* <div className="item_img_carousel"><img src="./images/carou1.svg" alt='img1'></img></div>
                <div className="item_img_carousel"><img src="./images/carou2.svg" alt='img2'></img></div>
                <div className="item_img_carousel"><img src="./images/carou1.svg" alt='img3'></img></div>
                <div className="item_img_carousel"><img src="./images/carou2.svg" alt='img4'></img></div> */}
               <Card />
                
                



            </Carousel>
        </div>
    </>
  )
}

export default Dashboard;
