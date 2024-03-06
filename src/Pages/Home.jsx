import React from "react";
import {
  Banner,
  BannerBottom,
  Product,
  Discount,
  Image,
  Container,
  Title,
} from "../DefaultExport";
import HomeProductSlider from "../Components/HomeProductSlider";
const Home = () => {
  return (
    <>
      <Banner />
      <BannerBottom />
      <Container>
        <Discount />
        <HomeProductSlider />
        <Product productNumber="4" className="mt-24" />
        <div className="my-32">
          <Image src="/public/Images/ad4.png" />
        </div>
        <Title
          as="h2"
          title="Special Offers"
          className="text-[39px] font-bold font-dm"
        />
        <Product productNumber="4" className="mt-6" />
      </Container>
    </>
  );
};

export default Home;
