import React, { useState } from "react";
import {
  Bredcrumb,
  Card,
  Container,
  Flex,
  Product,
  Pagination,
  Sidebar,
} from "../DefaultExport";
import { productData } from "../db/database";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = productData.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  // checkbox filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filterData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filtering Items
    if (selected) {
      filteredProducts = filteredProducts = filteredProducts.filter(
        ({ category, color, brand, title, price }) =>
          category === selected ||
          color === selected ||
          price === selected ||
          brand === selected ||
          title === selected
      );
    }
    return filteredItems.map(({ img, title }) => (
      <Card key={Math.random()} title={title} img={img} />
    ));
  }
  const result = filterData(productData, selectedCategory, query);
  return (
    <>
      <Container className="">
        <Bredcrumb title="Product" />
        <Flex className="!items-start justify-between">
          <Sidebar
            handleChange={handleChange}
            handleInputChange={handleInputChange}
          />
          <div className="w-full lg:w-[78%]">
            <Product />
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Shop;
