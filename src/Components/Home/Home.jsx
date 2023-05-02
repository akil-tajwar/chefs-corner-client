import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='h-screen bg-[url(/src/assets/slide_03.jpg)] bg-no-repeat text-center'>
                <h1 className='text-white text-5xl pt-96 mt-10 mb-8 font-bold'>Our chefs are very much experienced <br /> and skillfull. We can prepare any dish, that <br /> your heart truly desires.</h1>
                <button className='text-2xl rounded-3xl bg-[#78bf4d] text-[#20252b] font-semibold py-3 px-7'>View more</button>
            </div>
        </div>
    );
};

export default Home;