import React from "react";
import { Flex, Title } from "../../DefaultExport";
import { FaHeart } from "react-icons/fa";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { BsCart3 } from "react-icons/bs";

const Card = ({ price, title, img, color, className, badge }) => {
  return (
    <div
      className={`relative ${
        className && className
      } !overflow-hidden group font-dm max-w-full 440:max-w-[48%] 724:max-w-[32%] 1440:max-w-[370px] `}
    >
      <Title
        as="h4"
        className={`${
          badge &&
          "justify-center flex items-center text-sm font-bold text-white w-[92px] h-[35px] bg-blackBg absolute top-3 left-3"
        }`}
        title={badge}
      />
      <img
        className="w-full max-h-full 440:max-h-[48%] 724:max-h-[32%] 1440:max-h-[370px]"
        src={img}
      />
      <Flex className="justify-between mt-6 mb-2">
        <Title
          as="h2"
          className="text-xl font-bold text-blackBg"
          title={`${title}`}
        />
        <Title
          as="h4"
          className="text-base text-menuColor"
          title={`$${price}`}
        />
      </Flex>
      <Title as="h4" className="text-base text-menuColor" title={color} />
      <Flex className="flex-col !items-end w-full gap-4 bg-white py-10 absolute group-hover:bottom-16 left-0 -bottom-full transition-all duration-300 group-hover:opacity-100 opacity-0 ">
        <Flex className="justify-end gap-3">
          <Title
            as="p"
            className="text-base text-menuColor"
            title="Add to Wish List"
          />

          <FaHeart />
        </Flex>
        <Flex className="justify-end gap-3">
          <Title as="p" className="text-base text-menuColor" title="Compare" />
          <HiMiniArrowPathRoundedSquare />
        </Flex>
        <Flex className="justify-end gap-3">
          <Title
            as="p"
            className="text-base text-menuColor"
            title=" Add to Cart"
          />

          <BsCart3 />
        </Flex>
      </Flex>
    </div>
  );
};

export default Card;
