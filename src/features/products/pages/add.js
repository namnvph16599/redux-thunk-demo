import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addProducts } from "../ProductsSlice";

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(addProducts({ id: 5, name: "Products 5" }));
          navigate("/products");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Add;
