import React from 'react'

const Header = () => {
    return (
        <div className="container bg-white border-b-2  border-gray-800 z-50 left-0 top-0 fixed w-full px-4">
            <div className="flex items-center my-auto">
                <a href='/home'>
                    <img className="ml-2" src='/images/home-logo.svg' alt='home-logo'/>
                </a>
            
            <div className="">
                <input
                    type="text"
                    placeholder="Search"
                />
            </div>
            </div>
        </div>
    )
}

export default Header;