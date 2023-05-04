/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Signup = () => {
    const [error, setError] = useState('');
    const {user, createUser} = useContext(AuthContext);

    const handelSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        setError('');
        if (password.length < 6 && password.length > 0) {
            setError('Password must have at least 6 characters');
            return;
        }
        else if(password.length === 0){
            setError('You can not submit an empty email or password field');
            return;
        }
        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })
    }
    return (
        <div>
            <div className='mx-auto w-fit border-slate-200 border p-8 mt-52 mb-4'>
                <h2 className='text-4xl text-center font-semibold mb-3'>Signup</h2>
                <form onSubmit={handelSignup}>
                    <div className='pb-2'>
                        <label htmlFor="email">Name</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="text" name="name" id="" required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="email">Email</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="email" name="email" id="" required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="password">Password</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="password" name="password" id="" required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="email">Photo URL</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="text" name="photo" id="" required />
                    </div>
                    <button className='w-full bg-[#fc834b] p-2 mt-4 mb-3'>Signup</button><br />
                </form>
                <div className='text-center'>
                    <small>Already have an account? <Link to='/login' className='text-[#306d0a] font-semibold'>Login</Link></small>
                </div>
            </div>
            <p className='text-red-800 text-center font-semibold  mb-20'>{error}</p>
        </div>
    );
};

export default Signup;