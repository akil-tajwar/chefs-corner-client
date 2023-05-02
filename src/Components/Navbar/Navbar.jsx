import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-[#20252b] text-white p-5'>
            <div className='flex justify-between w-11/12 mx-auto'>
                <div className='flex items-center'>
                    <img className='w-24' src="/src/assets/logo.png" alt="Company Logo" />
                    <h2 className='font-semibold text-4xl'>Chef's Corner</h2>
                </div>
                <div className='flex gap-8 items-center'>
                    <Link className='hover:text-[#78bf4d] font-semibold' to='/'>Home</Link>
                    <Link className='hover:text-[#78bf4d] font-semibold' to='/blog'>Blog</Link>
                    <Link className='hover:text-[#78bf4d] font-semibold' to='/signup'>Signup</Link>
                    <Link className='hover:text-[#78bf4d] font-semibold' to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;