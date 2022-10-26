import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='question-answer-container pt-5'>
            <h1>Here is some Questions and Answer for you.</h1>
            <div className='question-container'>
                <div className='question-answer'>
                    <h3>Question-1: What is the purpose of react router?</h3>
                    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
                <div className='question-answer'>
                    <h3>Question-2: How does Context API works?</h3>
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is primarily used when some data needs to be accessible by many components at different nesting levels. <br></br>For example, consider a Page component that passes a user and avatarSize prop several levels down so that deeply nested Link and Avatar components can read it. It might feel redundant to pass down the user and avatarSize props through many levels if in the end only the Avatar component really needs it. It’s also annoying that whenever the Avatar component needs more props from the top, you have to add them at all the intermediate levels too.</p>
                </div>
                <div className='question-answer'>
                    <h3>Question-3: Write something  about useRef() hook?</h3>
                    <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                    <br />
                    useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;