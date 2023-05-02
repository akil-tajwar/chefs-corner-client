import React from 'react';

const Blog = () => {
    return (
        <div className='mt-52 mb-20 w-3/4 mx-auto'>
            <h1 className='text-center font-semibold text-4xl text-[#78bf4d]'>Question/Answer</h1>
            <div className='p-6'>
                <div className='pt-8'>
                    <b className='text-[#fc834b] font-bold'>Ques 1: What's the differences between uncontrolled and controlled components?</b>
                    <p className='pt-2'><b>Uncontrolled Components:</b> In uncontrolled components the input values are stored in the DOM, not in React state. With this component, we can read the input values from the DOM using a ref and then perform some action with those values. Uncontrolled components are often used in cases where we don't need to validate the input, or if you have a simple form with a few inputs. <br />
                    <b>Controlled Components: </b>In controlled components the input values are stored in React state, and any changes to the input values are handled by React. With this component, we can validate the input values, perform some action on each change, or manage the state of the input in a more complex way. Controlled components are often used in cases where we need to validate the input or if we have a complex form with many inputs.</p>
                </div>
                <div className='pt-8'>
                    <b className='text-[#fc834b] font-bold'>Ques 2: How to validate React props using PropTypes?</b>
                    <p className='pt-2'><b>Uncontrolled Components:</b> In uncontrolled components the input values are stored in the DOM, not in React state. With this component, we can read the input values from the DOM using a ref and then perform some action with those values. Uncontrolled components are often used in cases where we don't need to validate the input, or if you have a simple form with a few inputs. <br />
                    <b>Controlled Components: </b>In controlled components the input values are stored in React state, and any changes to the input values are handled by React. With this component, we can validate the input values, perform some action on each change, or manage the state of the input in a more complex way. Controlled components are often used in cases where we need to validate the input or if we have a complex form with many inputs.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;