/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const ChefDetails = () => {
    const chefDetails = useParams();
    const [chefData, setChefData] = useState(null);

    useEffect(() => {
        fetch('https://chefs-corner-server-akil-tajwar.vercel.app/chefs')
            .then(res => res.json())
            .then(data => {
                const chefData = data.find(chef => chef.id === chefDetails.id);
                setChefData(chefData);
            })
    })
    if (!chefData) {
        return <div>Loading...</div>
    }

    return (
        <div className='mt-52 grid grid-cols-1 gap-5 justify-between w-3/4 mx-auto'>
            <div className='border-2 border-slate-200 mb-20 grid grid-cols-1 w-fit lg:w-3/5 mx-auto'>
                <img className='w-full col-span-2' src={chefData.photo} alt="" />
                <div>
                    <div className='p-3'>
                        <h3 className='font-bold text-3xl mb-4 text-[#78bf4d]'>{chefData.name}</h3>
                        <div className='w-full'>
                            <p className='text-justify'><span className='text-[#fc834b] font-semibold'>Bio : </span>{chefData.description}</p>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 lg:grid-cols-3 mt-4 border-t-2 p-3 border-slate-200'>
                            <div className='lg:text-left'><p><span className='text-[#fc834b] font-semibold'>Likes : </span>{chefData.likes}</p></div>
                            <div className='lg:text-center text-right'><p><span className='text-[#fc834b] font-semibold'>Experience : </span>{chefData.experience} Years</p></div>
                            <div className='lg:text-right text-left'><p><span className='text-[#fc834b] font-semibold'>Recepies : </span>{chefData.recepies_count} Items</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='font-bold text-3xl mb-4 text-[#78bf4d] text-center'>Recipes</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        chefData.recipe_details.map(recipe => <Recipe recipe={recipe} key={recipe.id}></Recipe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;