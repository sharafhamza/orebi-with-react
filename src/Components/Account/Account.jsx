import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";
import { Flex, DropDown, List, ListItem } from "../../DefaultExport";
const Account = ({ className }) => {
  const [userOpen, setUserOpen] = useState(false);
  return (
    <div className={className}>
      <span onClick={() => setUserOpen((prev) => !prev)}>
        <Flex className="cursor-pointer">
          <FaUser className="text-[20px]" />
          {userOpen ? <FaCaretUp /> : <FaCaretDown />}
        </Flex>
      </span>
      <DropDown
        className={` transition-all delay-[.3s] absolute top-10 right-14 ${
          userOpen
            ? "translate-x-0 !visible opacity-1"
            : "-translate-x-12 invisible opacity-0"
        } `}
      >
        <List
          className={` w-[200px] text-center
               `}
        >
          <ListItem className="text-bgBlack font-reguler hover:text-white transition-all hover:font-bold hover:bg-blackBg cursor-pointer py-4 text-sm bg-white border-b  rounded-t-r-[4px] border-border group">
            My Account
            <IoTriangleSharp className="absolute z-10 text-white -top-4 group-hover:text-blackBg  transition-all text-xl right-[0px]" />
          </ListItem>
          <ListItem className="text-bgBlack font-reguler hover:text-white transition-all hover:font-bold hover:bg-blackBg cursor-pointer py-4 text-sm bg-white ">
            Log Out
          </ListItem>
        </List>
      </DropDown>
    </div>
  );
};

export default Account;
