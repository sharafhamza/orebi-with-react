import React from "react";
import { Container, Flex, BannerBottomItem } from "../../DefaultExport";
const BannerBottom = () => {
  return (
    <div className="border-b font-dm border-border">
      <Container>
        <Flex className="flex-col gap-4 590:flex-row 590:justify-between py-[22px] 590:py-[0px]">
          <BannerBottomItem
            img="/public/Images/2.svg"
            alt="2"
            text="Two years warranty"
          />
          <BannerBottomItem
            img="/public/Images/truck.svg"
            alt="truck"
            text="Free shipping"
          />
          <BannerBottomItem
            img="/public/Images/round-arrow.png"
            alt="rouned arrow"
            text="Return policy in 30 days"
          />
        </Flex>
      </Container>
    </div>
  );
};

export default BannerBottom;
