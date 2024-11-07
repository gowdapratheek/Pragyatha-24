import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div className='text-center h-screen bg-black pt-28'>
                <p>{error.message}</p>
                <p className='text-[100px] font-bold text-white'>Oops</p>
                <p className='text-[30px] text-white'>You are on the <span className='text-[30px] font-bold'>wrong path..</span></p>
                <p className='text-[40px] text-white'>OR</p>
                <p className='text-[30px] text-white'>Something went <span className='font-bold'>WRONG</span></p>
                <div className='m-10'>
                    <Link to='/' className='bg-pink-700 p-4 text-white rounded-xl'>Go to Home Page</Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
