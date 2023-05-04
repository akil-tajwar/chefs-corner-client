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
            <div className='h-fit bg-[url(/src/assets/slide_03.jpg)] bg-no-repeat text-center'>
                <h1 className='text-white text-5xl pt-72 mt-10 mb-8 font-bold'>Our chefs are very much experienced <br /> and skillfull. We can prepare any dish, that <br /> your heart truly desires.</h1>
                <button className='text-2xl mb-72 rounded-3xl bg-[#78bf4d] text-[#20252b] font-semibold py-3 px-7'>View more</button>
            </div>
            <div>
                <h1 className='text-center font-semibold text-4xl text-[#fc834b] mt-20 mb-8'>Chef Menu</h1>
                <div className='grid lg:grid-cols-3 grid-cols-1 w-fit mx-auto gap-10 mb-20'>
                    {
                        chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                    }
                </div>
            </div>
            <div>
                <h1 className='text-center font-semibold text-4xl text-[#fc834b] mb-8'>FAQ Section</h1>
                <div className='lg:w-1/2 w-11/12 mx-auto flex flex-col gap-5'>
                    <div className='w-full mx-auto border-2 border-slate-200'>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium flex justify-between">
                                <div>
                                    What types of chefs do you offer?
                                </div>
                                <div>
                                    +
                                </div>
                            </div>
                            <div className="collapse-content">
                                <p>We offer a wide variety of chefs, including executive chefs, sous chefs, pastry chefs, private chefs, and more. Our chefs have experience in a range of cuisines, from traditional to fusion to modern, and we work with each client to find the best match for their needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mx-auto border-2 border-slate-200'>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium flex justify-between">
                                <div>
                                    How do you vet your chefs?
                                </div>
                                <div>
                                    +
                                </div>
                            </div>
                            <div className="collapse-content">
                                <p>We have a rigorous vetting process for our chefs to ensure that they meet our high standards for quality and professionalism. This includes checking references, verifying education and experience, and conducting background checks. We only work with chefs who have a proven track record of success in the industry.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mx-auto border-2 border-slate-200'>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium flex justify-between">
                                <div>
                                    Can you accommodate special dietary needs?
                                </div>
                                <div>
                                    +
                                </div>
                            </div>
                            <div className="collapse-content">
                                <p>Absolutely. Our chefs are trained to work with a range of dietary restrictions and preferences, including vegetarian, vegan, gluten-free, and more. We work closely with clients to understand their specific needs and create customized menus that meet their requirements.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mx-auto border-2 border-slate-200'>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium flex justify-between">
                                <div>
                                    What is the process for hiring a chef?
                                </div>
                                <div>
                                    +
                                </div>
                            </div>
                            <div className="collapse-content">
                                The process for hiring a chef begins with a consultation with one of our team members. During this consultation, we&apos;ll discuss your needs and preferences, including the type of cuisine you&apos;re interested in, the size of your party, and any dietary restrictions or preferences. From there, we&apos;ll match you with a chef who meets your criteria and work with you to finalize the details of your event. Our goal is to make the process as seamless and stress-free as possible for our clients.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-center font-semibold text-4xl text-[#fc834b] mt-20 mb-8'>Why Chef&apos;s Corner?</h1>
                <div className='h-fit bg-[url(/src/assets/background-form.jpg)] bg-no-repeat'>
                    <div className='flex lg:gap-x-32 gap-5 flex-col lg:flex-row w-fit mx-auto lg:py-64 py-5'>
                        <div className='text-center text-2xl font-semibold border-2 bg-white border-[#fc834b] w-60 h-60 mx-auto p-3'>
                            <BsFillTrophyFill className='mx-auto text-7xl text-[#78bf4d] mb-2 pt-4' /><h3 className='font-bold'>We are the winners of 50 <br /> competetions</h3>
                        </div>
                        <div className='text-center text-2xl font-semibold border-2 bg-white border-[#fc834b] w-60 h-60 mx-auto p-3'>
                            <IoIosPeople className='mx-auto text-7xl text-[#78bf4d] mb-2 pt-4' /><h3 className='font-bold'>Our chefs are professional <br /> and skillful</h3>
                        </div>
                        <div className='text-center text-2xl font-semibold border-2 bg-white border-[#fc834b] w-60 h-60 mx-auto p-3'>
                            <GiSandsOfTime className='mx-auto text-7xl text-[#78bf4d] mb-2 pt-4' /><h3 className='font-bold'>We always give fastest and best services</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;