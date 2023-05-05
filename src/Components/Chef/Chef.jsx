/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id, name, photo, likes, recepies_count, experience } = chef;
    return (
        <div className='border border-slate-300 lg:w-fit w-11/12 mx-auto'>
            <img className='w-96' src={photo} alt="" />
            <div className='p-3'>
                <h3 className='font-semibold text-3xl mb-3 text-[#fc834b]'>{name}</h3>
                <p>Experience : {experience} years</p>
                <p>Recepies : {recepies_count}</p>
                <p>Likes : {likes}</p>
            </div>
            <Link to={`/${id}`}><button className='w-full mt-2 bg-[#78bf4d] p-3 text-white text-xl font-semibold'>View Recipes</button></Link>
        </div>
    );
};

export default Chef;