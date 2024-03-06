import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
  let [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "9%",
          transform: "translateY(-40%)",
        }}
      >
        <ul
          style={{
            margin: "0px",
            gap: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                padding: "10px 0",
                borderRight: "3px solid #262626",
              }
            : {
                width: "30px",
                color: "transparent",
                padding: "10px 0",
                borderRight: "3px solid white",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "6%",
                transform: "translateY(-40%)",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  gap: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "30px",
                      color: "#262626",
                      padding: "10px 0",
                      borderRight: "3px solid #262626",
                    }
                  : {
                      width: "30px",
                      color: "transparent",
                      padding: "10px 0",
                      borderRight: "3px solid white",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },

      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div
              style={{
                background: "rgba(40, 36, 36, 0.2)",
                width: "auto",
                borderRadius: "40px",
                transform: "translateY(-40%)",
                position: "absolute",
                bottom: "10%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <ul
                className="bannerDot"
                style={{
                  margin: "0px",
                  gap: "0px",
                  display: "flex",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "18px",
                      height: "8px",
                      borderRadius: "30%",
                      background: "#fff",
                    }
                  : {
                      background: "#7f7e7e",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                    }
              }
            ></div>
          ),
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="/public/Images/banner.png" />
      </div>
      <div>
        <img src="/public/Images/banner2.png" className="" />
      </div>
      <div>
        <img src="/public/Images/banner3.png" className="" />
      </div>
    </Slider>
  );
};

export default Banner;
