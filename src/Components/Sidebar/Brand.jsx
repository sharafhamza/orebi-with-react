import React from "react";
import { Input } from "../../DefaultExport";
import Accordion from "../Accordion/Accordion";
const Brand = ({ handleChange }) => {
  return (
    <Accordion isActive={true} title="Brand" isAccordion={true}>
      <Input handleChange={handleChange} value="samsung" title="Samsung" />
      <Input handleChange={handleChange} value="boat" title="Boat" />
      <Input handleChange={handleChange} value="jdl" title="JDL" />
      <Input handleChange={handleChange} value="xiomi" title="Xiomi" />
    </Accordion>
  );
};
export default Brand;
