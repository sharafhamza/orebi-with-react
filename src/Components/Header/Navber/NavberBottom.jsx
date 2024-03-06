import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { IoTriangleSharp } from "react-icons/io5";
import { categoryData } from "../../../db/database";
import {
  CartIcon,
  Account,
  Container,
  DropDown,
  Flex,
  List,
  ListItem,
  SearchBox,
} from "../../../DefaultExport";
const NavberBottom = () => {
  const [categoryShow, setCategoryShow] = useState(false);

  return (
    <div className="bg-sectionBg py-4 sm:py-6 font-dm">
      <Container>
        <Flex className="justify-between">
          <DropDown className="relative">
            <Flex
              onClick={() => setCategoryShow((prev) => !prev)}
              className="hidden sm:flex items-center gap-2"
            >
              {categoryShow ? (
                <FaXmark className="cursor-pointer text-black text-xl" />
              ) : (
                <FaBarsStaggered className="cursor-pointer text-black text-xl" />
              )}
              <p className="cursor-pointer">Shop by Category</p>
            </Flex>

            <List
              className={` w-[263px] text-offWhite text-base transition-all delay-[.3s] ${
                categoryShow
                  ? "translate-x-0 !visible opacity-1 bg-blackBg"
                  : "translate-x-12 invisible opacity-0 bg-[rgba(255, 255, 255, 1)]"
              }  absolute top-10 left-0 rounded-l-[5px]`}
            >
              <IoTriangleSharp className="absolute z-10 text-blackBg -top-4 text-xl -left-0" />
              {categoryData.map((item, i) => (
                <ListItem
                  className="py-4 hover:text-white  cursor-pointer pl-3 transition-all hover:pl-6 font-reguler hover:font-bold border-dropBorder  border-b"
                  key={i}
                >
                  {item.name}
                </ListItem>
              ))}
            </List>
          </DropDown>
          <SearchBox />

          <Flex className="gap-x-4 relative">
            <Account className="hidden sm:block" />
            <CartIcon className="hidden sm:block" />
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default NavberBottom;
