import React, { useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Flex, Title } from "../../DefaultExport";

const Accordion = ({ children, isActive, title, isAccordion }) => {
  const ref = useRef(null);
  const [arrowClicked, setArrowClicked] = useState(isActive);
  return (
    <div className="flex flex-col gap-4 font-dm">
      {isAccordion ? (
        <div className="border-b border-border">
          <Flex
            className="justify-between cursor-pointer"
            onClick={() => setArrowClicked(!arrowClicked)}
          >
            <Title title={title} as="h2" className="text-xl font-bold" />
            <IoIosArrowUp
              className={`${
                arrowClicked ? "rotate-0" : "rotate-180"
              } text-2xl transition-all duration-300 `}
            />
          </Flex>
          <div
            className={`transition-all duration-300 grid  ${
              arrowClicked
                ? "grid-rows-[1fr] opacity-100 pt-5"
                : "grid-rows-[0fr] opacity-0 pt-0"
            }`}
          >
            <div
              ref={ref}
              className="flex flex-col gap-2 pb-3 overflow-hidden "
            >
              {children}
            </div>
          </div>
        </div>
      ) : (
        <>
          <Title title={title} as="h2" className="text-xl font-bold " />
          <div className="flex flex-col gap-2 ">{children}</div>
        </>
      )}
    </div>
  );
};

export default Accordion;
