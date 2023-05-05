/* eslint-disable no-unused-vars */
import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blog = () => {
    return (
        <div className='mt-52 mb-20 w-11/12 lg:w-3/4 mx-auto'>
            <div className='text-center'>
                <h1 className='font-semibold text-4xl text-[#78bf4d]'>Question/Answer</h1>
                <div>
                    <Pdf targetRef={ref} filename="My Blog.pdf">
                        {({ toPdf }) => <button className='bg-[#fc834b] px-3 py-1 text-white font-semibold mt-3' onClick={toPdf}>Download Pdf</button>}
                    </Pdf>
                    <div style={{width: 800, height: 500, position: "absolute", left: "-9999px", top: "-9999px"}} className='text-center pt-5' ref={ref}>
                        <h1 className='text-center text-3xl font-semibold text-[#fc834b] mb-2'>Blog Details</h1>
                        <p className='text-justify w-11/12 mx-auto'>the blog section includes four questions related to React, Node.js, and web development. The first two questions discuss the differences between uncontrolled and controlled components in React, and how to validate props using PropTypes. The third question focuses on the difference between Node.js and Express.js, which are both important tools for building web applications. Finally, the fourth question covers the concept of custom hooks in React, which are reusable functions that can be used to extract and reuse stateful logic in multiple components. By providing clear and informative answers to these questions, the blog section can help readers better understand the services and technologies offered by the chef hiring company.</p>
                    </div>
                </div>
            </div>
            <div className='p-6'>
                <div className='pt-8'>
                    <b className='text-[#fc834b] font-bold'>Ques 1: What&apos;s the differences between uncontrolled and controlled components?</b>
                    <p className='pt-2 text-justify'><b>Uncontrolled Components:</b> In uncontrolled components the input values are stored in the DOM, not in React state. With this component, we can read the input values from the DOM using a ref and then perform some action with those values. Uncontrolled components are often used in cases where we don&apos;t need to validate the input, or if you have a simple form with a few inputs. <br />
                        <b>Controlled Components: </b>In controlled components the input values are stored in React state, and any changes to the input values are handled by React. With this component, we can validate the input values, perform some action on each change, or manage the state of the input in a more complex way. Controlled components are often used in cases where we need to validate the input or if we have a complex form with many inputs.</p>
                </div>
                <div className='pt-8'>
                    <b className='text-[#fc834b] font-bold'>Ques 2: How to validate React props using PropTypes?</b>
                    <p className='pt-2 text-justify'>To use PropTypes in our React project, we will need to install the prop-types package from NPM. The command line is &apos;npm install prop-types&apos;. Then, we can import it into our component and define our prop types using the propTypes property. When a prop of the wrong type is passed to your component, we will see a warning in the console, which can help us catch errors early on in the development process.</p>
                </div>
                <div className='pt-8'>
                    <b className='text-[#fc834b] font-bold'>Ques 3: What&apos;s the difference between nodejs and express js?</b>
                    <p className='pt-2 text-justify'><b>Nodejs: </b>Node.js is a JavaScript runtime built on Chrome&apos;s V8 JavaScript engine, which allows developers to run JavaScript code on the server-side. Node.js provides a number of built-in modules that allow us to perform a variety of tasks. <br />
                        <b>Expressjs: </b>Express.js is a web application framework for Node.js that provides a higher-level set of features for building web applications and APIs. Express.js provides a simpler, more intuitive way to handle HTTP requests and responses.</p>
                </div>
                <div className='pt-8'>
                    <b className='text-[#fc834b] font-bold'>Ques 4: What is a custom hook, and why will you create a custom hook?</b>
                    <p className='pt-2 text-justify'>A custom hook is a reusable function in React that contains some stateful logic and can be shared between multiple components. Custom hooks enable developers to extract and reuse stateful logic that would otherwise have to be repeated in multiple components, leading to more concise and reusable code. <br />
                        Developers create custom hooks when they need to perform some common or repetitive logic in their components, such as fetching data from an API, handling form inputs, or managing state. Custom hooks allow developers to encapsulate this logic in a single place, making it easier to reuse across multiple components.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;