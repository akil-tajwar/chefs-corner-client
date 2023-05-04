/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);
    console.log(user);
    const handleLogout = () => {
        logout()
        .then(() => {})
        .catch(error => console.log(error))
    }
    return (
        <div className='bg-[#20252b] text-white p-5 fixed w-full top-0'>
            <div className='flex flex-col lg:flex-row justify-between w-11/12 mx-auto'>
                <div className='flex gap-4 items-center justify-center'>
                    <img className='w-24' src="/src/assets/logo.png" alt="Company Logo" />
                    <h2 className='font-semibold text-4xl'>Chef&apos;s Corner <span className='text-[#78bf4d]'>.</span></h2>
                </div>
                <div className='flex gap-8 items-center justify-center'>
                    <Link className='hover:text-[#78bf4d] font-semibold' to='/'>Home</Link>
                    <Link className='hover:text-[#78bf4d] font-semibold' to='/blog'>Blog</Link>
                    {
                        user ? <span className='hover:text-[#78bf4d] font-semibold cursor-pointer' onClick={handleLogout}>Logout</span> : <Link className='hover:text-[#78bf4d] font-semibold' to='/signup'>Signup</Link>
                    }
                    {
                        user ? <img className='rounded-full w-10 border-2 border-[#78bf4d]' src={user.photoURL} title={user.displayName} alt="user photo" /> : <Link className='hover:text-[#78bf4d] font-semibold' to='/login'>Login</Link>  
                    }                 
                </div>
            </div>
        </div>
    );
};

export default Navbar;