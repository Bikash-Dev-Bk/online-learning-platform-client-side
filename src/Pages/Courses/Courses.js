import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {

    const courses = useLoaderData();

    return (
        <div className='course-container'>
            <div className=' p-10 '>
                <h3 className='mb-6 text-2xl'>All Courses </h3>
                {
                    courses.map(course => <p key={course.id}><Link to={`/courses/${course.id}`}>{course.name}</Link></p>)
                }
            </div>
            <div>
                <h2 className='text-center text-3xl pt-10 pb-4'>Popular Courses To Learn</h2>
                <div className='courses'>
                    {
                        courses.map(course => <Course key={course.id} course = {course}></Course>)
                    }
                </div>
            </div>
            
        </div>
        
    );
};

export default Courses;