import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, getProducts } from "./ProductsSlice";

const Products = () => {
  const products = useSelector((data) => data.products.value);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      {products?.map((item) => item.name)}
      <button
        onClick={() => {
          dispatch(addProducts({ id: 3, name: "Products 3" }));
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Products;
