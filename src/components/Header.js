import React from 'react'

const Header = () => {
    return (
        <div className="container bg-white border-b-2  border-gray-800 z-50 left-0 top-0 fixed w-full px-4">
            <div className="flex items-center my-auto">
                <a href='/home'>
                    <img className="ml-2" src='/images/home-logo.svg' alt='home-logo'/>
                </a>
            </div>
            <div className="search grow relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-sky-100 border border-sky-100 hover:border-sky-400 rounded-md leading-7 text-center w-56 pl-2 pr-10 font-bold"
                />
            
            <div className="searchIcon flex items-center w-10 absolute left-2 z-10 top-2 ">
                <img src='/images/search-icon.svg' alt='search-icon'/>
            </div>
            </div>
        </div>
    )
}

export default Header;