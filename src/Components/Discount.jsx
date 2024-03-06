import React from "react";
import { Container, Flex, Image } from "../DefaultExport";
const Discount = () => {
  return (
    <Flex className="!flex-wrap gap-3 py-28">
      <div className="max-w-[48%]">
        <Image src="/public/Images/ad.png" />
      </div>
      <div className="max-w-[48%]">
        <Image className="mb-[5%]" src="/public/Images/ad2.png" />
        <Image src="/public/Images/ad3.png" />
      </div>
    </Flex>
  );
};

export default Discount;
