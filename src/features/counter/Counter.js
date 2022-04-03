import React, { useState } from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((data) => data.counter.value);
  console.log(count);
  return <div>Counter : {count}</div>;
};

export default Counter;
