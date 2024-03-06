import React from "react";
import Slider from "react-slick";
import { productData } from "../db/database";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Container, Card, Title } from "../DefaultExport";
function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={`!bg-arrowBg !flex !items-center !justify-center rounded-full text-white w-[64px] flex- h-[64px] absolute top-[30%] ${props.right} cursor-pointer right-[2%] z-10`}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <FaLongArrowAltRight className="text-2xl" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={`!bg-arrowBg !flex !items-center !justify-center rounded-full cursor-pointer text-white w-[64px] flex- h-[64px] absolute top-[30%] left-0 z-10`}
      style={{ ...style, display: "block", background: "#979797" }}
      onClick={onClick}
    >
      <FaLongArrowAltLeft className="text-2xl" />
    </div>
  );
}
const HomeProductSlider = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 940,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow right="!right-0" />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  const four = productData.slice(0, 6);
  return (
    <>
      <div className="relative mt-12 font-dm !max-w-full">
        <Title
          as="h2"
          className="mb-5 text-[39px] font-bold"
          title="New Arrivals"
        />
        <Slider {...settings}>
          {four.map((item) => (
            <Card
              className="!max-w-full"
              price={item.price}
              key={item.id}
              title={item.title}
              img={item.img}
              color={item.color}
              badge={item.badge}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HomeProductSlider;
