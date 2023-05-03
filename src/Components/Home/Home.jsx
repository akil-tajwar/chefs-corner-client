/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import { BsFillTrophyFill } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
import { GiSandsOfTime } from 'react-icons/gi';

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
                <h1 className='text-center font-semibold text-4xl text-[#fc834b] mt-20 mb-8'>Chef Menu</h1>
                <div className='grid grid-cols-3 w-fit mx-auto gap-10 mb-20'>
                    {
                        chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                    }
                </div>
            </div>
            <div>
                <h1 className='text-center font-semibold text-4xl text-[#fc834b] mt-20 mb-8'>Why Chef&apos;s Corner?</h1>
                <div className='h-screen bg-[url(/src/assets/background-form.jpg)] bg-no-repeat'>
                    <div className='flex gap-x-32 w-fit mx-auto pt-72'>
                        <div className='text-center text-2xl pt-8 font-semibold border-2 bg-white border-[#fc834b] w-60 h-60 m-auto p-3'>
                            <BsFillTrophyFill className='mx-auto text-7xl text-[#78bf4d] mb-2 pt-4' /><h3 className='font-bold'>We are the winners of 50 <br /> competetions</h3>
                        </div>
                        <div className='text-center text-2xl pt-8 font-semibold border-2 bg-white border-[#fc834b] w-60 h-60 m-auto p-3'>
                            <IoIosPeople className='mx-auto text-7xl text-[#78bf4d] mb-2 pt-4' /><h3 className='font-bold'>Our chefs are professional <br /> and skillful</h3>
                        </div>
                        <div className='text-center text-2xl pt-8 font-semibold border-2 bg-white border-[#fc834b] w-60 h-60 m-auto p-3'>
                            <GiSandsOfTime className='mx-auto text-7xl text-[#78bf4d] mb-2 pt-4' /><h3 className='font-bold'>We always give fastest and best services</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <h3 className='text-2xl text-center'>Hello</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <h3 className='text-2xl text-center'>Hello</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <h3 className='text-2xl text-center'>Hello</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <h3 className='text-2xl text-center'>Hello</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;