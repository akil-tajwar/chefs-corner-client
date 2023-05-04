/* eslint-disable no-unused-vars */
import React from 'react';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#20252b] text-white p-8'>
                <div className='flex justify-between flex-col gap-20 lg:flex-row w-3/4 mx-auto'>
                    <div>
                        <div className='flex items-center mb-14'>
                            <img className='w-24' src="/src/assets/logo.png" alt="" />
                            <h2 className='font-semibold text-4xl'>Chef&apos;s Corner <span className='text-[#78bf4d]'>.</span></h2>
                        </div>
                        <div>
                            <ul className='mt-6 flex flex-col gap-2'>
                                <li className='flex gap-2 items-center'><MdLocationOn className='text-[#78bf4d] text-2xl' /><p>828 Curtis Ferry, New York, USA</p></li>
                                <li className='flex gap-2 items-center'><BsTelephoneFill className='text-[#78bf4d] text-xl' /><p>+8 (800) 238 3597 (admin)</p></li>
                                <li className='flex gap-2 items-center'><MdEmail className='text-[#78bf4d] text-2xl' /><p>chefscorner@gmail.com</p></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-semibold text-4xl mb-3 text-[#fc834b]'>Social Links</h2>
                        <p>You can find us from social links given below</p>
                        <div className='flex gap-3 mt-8'>
                            <FaFacebookSquare className='text-[#78bf4d] text-4xl' />
                            <RiInstagramFill className='text-[#78bf4d] text-4xl' />
                            <FaYoutube className='text-[#78bf4d] text-4xl' />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-4xl mb-8 font-semibold text-[#fc834b]'>Subscibe</h2>
                        <input className='p-1 mb-3 text-black pl-2' type="text" /><br />
                        <button className='bg-[#78bf4d] text-[#20252b] font-semibold py-1 px-3'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='bg-[#15171c] text-[#fc834b] p-3 text-center'>
                <p>© Chef&apos;s Corner 2023 | Created by <span>Akil Tajwar</span></p>
            </div>
        </div>
    );
};

export default Footer;