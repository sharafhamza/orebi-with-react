import React from "react";
import { Image, Title, Flex } from "../../DefaultExport";
const BannerBottomItem = ({ img, alt, text }) => {
  return (
    <Flex className="gap-x-[17.5px] py-6 590:w-auto w-[250px] rounded-md border border-[#dfe6e9] 590:border-0 shadow-[rgba(99,_99,_99,_0.1)_0px_2px_8px_0px] 590:shadow-none justify-center">
      <Image src={img} alt={alt} />
      <Title as="p" title={text} className="text-sm 724:text-base" />
    </Flex>
  );
};

export default BannerBottomItem;
