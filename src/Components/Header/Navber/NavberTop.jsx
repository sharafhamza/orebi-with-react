import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Image,
  Container,
  ListItem,
  Flex,
  List,
  CartIcon,
} from "../../../DefaultExport";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { menuItemData } from "../../../db/database";

const NavberTop = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Container className="font-dm">
      <Flex className="py-6 !justify-between">
        <Flex>
          <FaBars
            className="724:hidden  cursor-pointer text-2xl mr-3"
            onClick={() => setMenuOpen((prev) => !prev)}
          />
          <Image src="/public/Images/Logo.png" alt="logo" />
        </Flex>

        <Flex className="gap-3 ml-auto">
          <Link to="#">
            <Flex className="gap-x-2 sm:hidden block">
              <FaRegUserCircle className="text-[22px]" />
              <p className="text-base">Login</p>
            </Flex>
          </Link>
          <CartIcon className="sm:hidden block" />
        </Flex>
        <List className="font-dm text-primary text-base 724:block hidden">
          <Flex className="gap-10">
            {menuItemData.map((item, i) => (
              <ListItem
                key={i}
                className="font-reguler first:font-bold hover:font-bold transition-all first:text-black cursor-pointer text-sm text-menuColor"
              >
                <Link to={item.link}>{item.name}</Link>
              </ListItem>
            ))}
          </Flex>
        </List>
        <List className={`block 724:hidden`}>
          <div
            className={`absolute top-0 right-0 w-full transition-all delay-300 h-screen bg-overly ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          ></div>
          <Flex
            className={`font-dm text-sm gap-8 flex-col transition-all delay-300 ${
              menuOpen ? "translate-x-0 visible" : "-translate-x-full invisible"
            }  w-9/12 h-screen  !items-start bg-blackBg  absolute top-0 left-0 pl-7 pt-7 text-white z-10`}
          >
            <img src="/public/Images/whitelogo.png" />
            <FaXmark
              onClick={() => setMenuOpen((prev) => !prev)}
              className="absolute top-3 -right-10 border border-white w-8 h-8 text-white p-1"
            />
            {menuItemData.map((item, i) => (
              <ListItem
                key={i}
                className="font-bold hover:font-bold transition-all  cursor-pointer"
              >
                {item.name}
              </ListItem>
            ))}
          </Flex>
        </List>
      </Flex>
    </Container>
  );
};

export default NavberTop;
