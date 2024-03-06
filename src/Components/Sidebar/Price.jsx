import React from "react";
import { Accordion, Input, Title } from "../../DefaultExport";

const Price = ({ handleChange }) => {
  return (
    <Accordion isAccordion={false} title="Price">
      <Input title="$0.00 - $9.99" value={10} handleChange={handleChange} />
      <Input title="$10.00 - $19.99" value={20} handleChange={handleChange} />
      <Input title="$20.00 - $29.99" value={30} handleChange={handleChange} />
    </Accordion>
  );
};

export default Price;
