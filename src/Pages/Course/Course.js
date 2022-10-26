import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = (props) => {
  console.log(props);
  const { name, img, price, ratting } = props.course;
  return (
    <div className="course">
      <img src={img} alt="" />
      <div className="course-info">
        <h3 className="text-2xl mb-3">Course Name: {name}</h3>
        <div className="flex justify-between">
          <p>Price: {price}</p>
          <p>Ratting: {ratting} stars</p>
        </div>
        <Link to={`/courses/${props.course.id}`}>
          <button className="btn rounded-full  normal-case text-2xl mt-2 text-center">
            Course Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Course;
