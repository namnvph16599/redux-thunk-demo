import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../ProductsSlice";

const Products = () => {
  const products = useSelector((data) => data.products.value);
  const dispatch = useDispatch();
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  },[]);
  return <div>{products?.map((item) => item.name)}</div>;
};

export default Products;
