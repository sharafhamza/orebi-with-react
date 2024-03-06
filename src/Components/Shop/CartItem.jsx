import React from "react";
import { Flex } from "../../DefaultExport";
import { FaXmark } from "react-icons/fa6";

const CartItem = ({ className, productName, productPrize, productImage }) => {
  return (
    <>
      <Flex className={`gap-4 ${className} text-sm font-bold justify-between`}>
        <Flex>
          <img
            className="w-[90px] mr-5"
            src={`/public/Images/${productImage}`}
            alt="watch"
          />
          <span>
            <h3>{productName}</h3>
            <h4 className="mt-2">{productPrize}</h4>
          </span>
        </Flex>
        <FaXmark className="text-xl" />
      </Flex>
    </>
  );
};

export default CartItem;
