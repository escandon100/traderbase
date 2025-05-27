import React from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./mainPage.scss"



const MainPage = () => {

    return (
        <div className="mainPage">
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true} 
                speed={3000}
            >
            <SwiperSlide>
                <div className=" slide slide1">
                    <div className="slideText">
                        <h1>Regulated Mining Platform | Forex Broker Options</h1>
                        <h1>BY THE MFSA OVER 7 YEARS</h1>
                        <h1>Start trading wih a reliable Mining broker !</h1>
                        <img src="regulation-ns.png" alt="" />
                        <img src="regulation-eu.png" alt="" />
                        <button>JOIN NOW</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide slide2">
                    <div className="slideText">
                        <h1>Trade Mining | Forex anytime , anywhere</h1>
                        <h1>MORE THAN 100 ASSETS AVAILABLE FOR TRADING</h1>
                        <button>JOIN NOW</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide slide3">
                    <div className="slideText">
                        <h1>Smart ibnvestments start with a strong foundation</h1>
                        <h1>LEARN THE ROPES WITH OUR TEAM OF FINANCIAL EXPERTS</h1>
                        <h1>Live webinars , video tutorials , ebooks and professional tools</h1>
                        <button>JOIN NOW</button>
                    </div> 
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
    )



}


export default MainPage