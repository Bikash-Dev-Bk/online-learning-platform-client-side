import React from "react";
import { useLoaderData } from "react-router-dom";
import './CheckOut.css';

const CheckOut = () => {
  const checkoutCourse = useLoaderData();
  console.log("inside checkout",checkoutCourse);

  return (
    <div className="checkOut-details-container">
      <h1 className="text-center my-4 text-2xl">Welcome to the checkout!</h1>
      <p className="text-center my-4 text-2xl">You are Looking for: <span className="text-bolder">{checkoutCourse.name}</span> Course</p>
      <img src={checkoutCourse.img} alt="" />
      
    </div>
  );
};

export default CheckOut;
