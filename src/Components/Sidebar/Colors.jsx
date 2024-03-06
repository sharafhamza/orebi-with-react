import React from "react";
import { Accordion, Flex, Input, Title } from "../../DefaultExport";

const Colors = ({ handleChange }) => {
  return (
    <Accordion isAccordion={true} isActive={true} title="Colors">
      <Flex className="flex flex-col !items-start gap-3">
        <Input
          title="Black"
          value="black"
          name="test1"
          color="black"
          handleChange={handleChange}
        />
        <Input
          title="Orange"
          value="orange"
          color="orange"
          handleChange={handleChange}
        />
        <Input
          title="Green"
          value="green"
          color="green"
          handleChange={handleChange}
        />
        <Input
          title="Grey"
          value="gray"
          color="#979797"
          handleChange={handleChange}
        />
        <Input
          title="Blue"
          value="blue"
          color="#1790C8"
          handleChange={handleChange}
        />
      </Flex>
    </Accordion>
  );
};

export default Colors;
