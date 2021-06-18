import React from 'react'
import {Link} from 'react-router-dom'

const Hero = () => { 
    return (
        <div className="bg-yellow-100 h-screen justify-center items-center flex flex-col">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl  font-black mb-14">
             Beauty Grove
            </h1>
            <Link className="py-6 px-10 bg-yellow-400 rounded-full 
                text-3xl hover:bg-yellow-200 transition duration-300 ease-in-out flex items-center animate-bounce">
                Shop Now!
                <svg 
                    className="w-6 h-6 ml-4"
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-5 w-5" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                <path 
                    fill-rule="evenodd" 
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
                    clip-rule="evenodd" 
                />
                </svg>
            </Link>
        </div>
    )
}

export default Hero;
