/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
    const [disabled, setDisabled] = useState(false);
    const favorite = () => {
        toast.success('successfully added to your favorite list', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setDisabled(true);
    }
    const { r_name, ingredients, cooking_method, rating } = recipe
    return (
        <div>
            <div className='border-2 border-slate-200 text-justify equal-size mb-20'>
                <div className='p-3'>
                    <h2 className='text-2xl font-semibold text-[#78bf4d] mb-4'>{r_name}</h2>
                    <p className='mb-2'><span className='font-semibold text-[#fc834b]'>Recipe Ingredients : </span>{ingredients}</p>
                    <p className='mb-2'><span className='font-semibold text-[#fc834b]'>Cooking Method : </span>{cooking_method}</p>
                    <p className='mb-2'><span className='text-[#fc834b] font-semibold'>Rating : </span>{rating}</p>
                </div>
                <div className='flex items-end'>
                    <button disabled={disabled} onClick={favorite} className='text-white bg-[#fc834b] border-t-2 border-slate-200 text-xl w-full p-3 text-center font-semibold'>Favorite Recipe</button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Recipe;