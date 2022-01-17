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
            <h1 className="">Welcome to your professional community</h1>
            <img src='/images/login-hero.svg' alt=''/>
        </section>
        </div>
    )
};

export default Login
