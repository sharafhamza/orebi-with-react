import React, { useState } from "react";
import { PiShoppingCart } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Flex, CartItem } from "../../DefaultExport";
import { IoTriangleSharp } from "react-icons/io5";
const Shop = ({ className }) => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div className={`${className} z-10`}>
      <span onClick={() => setCartOpen((prev) => !prev)}>
        <Flex className="cursor-pointer gap-1 relative mr-4">
          <span className="text-[18px] text-white w-5 h-5 text-center rounded-full absolute text-sm -top-3 bg-red-500 -right-4">
            2
          </span>
          <PiShoppingCart className="text-2xl" />
        </Flex>
      </span>

      <div
        className={`absolute top-[70px] sm:top-[45px] right-6 sm:right-4 w-[350px] transition-all border-border border delay-300 
                ${
                  cartOpen
                    ? "translate-x-0 !visible opacity-1"
                    : "-translate-x-12 invisible opacity-0"
                } bg-sectionBg justify-between flex-col gap-y-0 rounded-tr-[5px]`}
      >
        <IoTriangleSharp className="absolute z-10 text-sectionBg -top-4 group-hover:text-blackBg  transition-all text-xl right-[0px]" />
        <CartItem
          productImage="ar2.png"
          productName="Rolex watch"
          productPrize="$120.00"
          className="pt-4 pb-3 px-4"
        />
        <CartItem
          productImage="be1.png"
          productName="Bottle"
          productPrize="$20.00"
          className="pt-0 pb-4 px-4"
        />
        <div className="p-4 bg-white">
          <h3 className="text-[#767676] mb-4">
            Subtotal:
            <span className="font-bold text-blackBg ml-1">$44.00</span>
          </h3>
          <Link
            to="#"
            className="w-[148px] py-4 border border-blackBg inline-block text-center text-sm font-bold"
          >
            View Cart
          </Link>
          <Link
            to="#"
            className="w-[148px] py-4 border bg-blackBg text-white inline-block border-blackBg text-center ml-4 text-sm font-bold"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
