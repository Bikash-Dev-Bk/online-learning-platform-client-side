import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CourseDetails.css';


const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div className=''>
            <div className='course-details-container '>
                <h3 className='text-center text-3xl mb-6'>Course details for {course.name}</h3>
                <img className='my-6' src={course.img} alt="" />
                <p className='text-justify my-6'>{course.info}</p>
                <button className="btn btn-active btn-primary ">Get premium access</button>
                
            </div>
        </div>
    );
};

export default CourseDetails;