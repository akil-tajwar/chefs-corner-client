import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    })
    return (
        <div>
            <div className='h-screen bg-[url(/src/assets/slide_03.jpg)] bg-no-repeat text-center'>
                <h1 className='text-white text-5xl pt-96 mt-10 mb-8 font-bold'>Our chefs are very much experienced <br /> and skillfull. We can prepare any dish, that <br /> your heart truly desires.</h1>
                <button className='text-2xl rounded-3xl bg-[#78bf4d] text-[#20252b] font-semibold py-3 px-7'>View more</button>
            </div>
            <div>
                <h1 className='text-center font-semibold text-4xl text-[#78bf4d] mt-20 mb-8'>Chef Menu</h1>
                <div className='grid grid-cols-3 w-fit mx-auto gap-10 mb-20'>
                    {
                        chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;