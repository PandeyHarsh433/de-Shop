import React from "react";
import ProductCard from "./ProductCard";
import Wrapper from "./../components/Wrapper";
import Carousel from "react-grid-carousel";

const Products = ({ products, category }) => {
  const responsive = [{}];
  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight uppercase bold">
            {category}
          </div>
        </div>

        {/* Slider for Products */}
        <Carousel cols={3} rows={1} gap={10} loop>
          {products.map((product) => (
            <Carousel.Item key={product.id}>
              <div>
                <ProductCard product={product} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Wrapper>
    </div>
  );
};

export default Products;
