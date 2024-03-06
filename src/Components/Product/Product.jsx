import React from "react";
import { Card, Container, Flex, Pagination } from "../../DefaultExport";
import { productData } from "../../db/database";

const Product = ({ productNumber, className }) => {
  const firstfour = productData.slice(0, productNumber);

  return (
    <div className={className}>
      <Flex className="flex-wrap justify-between gap-2 ">
        {firstfour.map((item) => (
          <Card
            price={item.price}
            key={item.id}
            title={item.title}
            img={item.img}
            color={item.color}
            badge={item.badge}
          />
        ))}
      </Flex>
    </div>
  );
};

export default Product;
