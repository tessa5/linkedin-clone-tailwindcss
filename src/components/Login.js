import React from 'react'

const Login = (props) =>{
    return (
        <div className="container p-0">
        <nav className="max-w-screen-sm m-auto px-3 py-4 flex items-center relative justify-between flex-nowrap">
            <a href='/' className="w-36 h-9">
                <img src='/images/linkedinImg.png' alt=''/>
            </a>
            <div>
                <a href='/' className="px-3 py-2 text-lg text-gray-700 hover:text-gray-800 font-medium mr-2 bg-slate-100 hover:bg-gray-300 rounded-md">Join now</a>
                <a href='/' className="shadow rounded-full text-lg text-sky-800 transition duration-150 ease-in-out font-bold py-2.5 px-4 hover:bg-sky-200">Sign in</a>
            </div>
        </nav>
        <section className="flex content-start relative flex-wrap items-center min-h-min w-full max-w-screen-lg pb-32 pt-10 px-14 m-auto">
            <div className="w-full">
                <h1 className="sm:w-1/2 font-medium mr-2 text-lg sm:text-3xl text-sky-800 mb-4">Welcome to your professional community</h1>
                <img src='/images/login-hero.svg' alt='' className="-z-10 w-3/4 h-3/5 "/>
            </div>
            <div className="mt-5 sm:mt-24 w-96">
                <button className="flex justify-center bg-white hover:bg-gray-200 items-center h-14 w-full rounded-full shadow-md z-0 align-middle text-lg text-gray-500 hover:text-gray-700">
                    <img src='/images/google.svg' alt='google' className="mr-1" /> Sign in with Google
                </button>
            </div>
        </section>
        </div>
    )
};

export default Login
