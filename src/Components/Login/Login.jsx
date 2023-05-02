import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mx-auto w-fit border-slate-200 border p-8 mt-52'>
            <h2 className='text-4xl text-center font-semibold mb-3'>Login</h2>
            <form>
                <div className='pb-2'>
                    <label htmlFor="email">Email</label><br />
                    <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="email" name="email" id="" required />
                </div>
                <div className='pb-2'>
                    <label htmlFor="password">Password</label><br />
                    <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="password" name="password" id="" required />
                </div>
                <button className='w-full bg-[#fc834b] p-2 mt-4 mb-3'>Login</button><br />
            </form>
            <p className='text-center'>--------- or ---------</p>
            <div className='flex gap-2 mb-3'>
                <button className='w-full bg-[#fc834b] p-2 mt-3'>Google</button>
                <button className='w-full bg-[#fc834b] p-2 mt-3'>Github</button>
            </div>
            <div className='text-center'>
                <small>New to Chef's Corner? <Link to='/signup' className='text-[#306d0a] font-semibold'>Create new account</Link></small>
            </div>
        </div>
    );
};

export default Login;