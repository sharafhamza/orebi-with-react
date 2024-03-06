import React from "react";
import { Input, Accordion } from "../../DefaultExport";
const Category = ({ handleChange }) => {
  return (
    <Accordion title="Category" isAccordion={false}>
      <Input value="all" title="All" />
      <Input handleChange={handleChange} value="men" title="Men" />
      <Input handleChange={handleChange} value="women" title="Women" />
      <Input handleChange={handleChange} value="furniture" title="Furniture" />
      <Input
        handleChange={handleChange}
        value="electronics"
        title="Electronics"
      />
      <Input handleChange={handleChange} value="bags" title="Bags" />
      <Input handleChange={handleChange} value="toys" title="Toys" />
    </Accordion>
  );
};

export default Category;
