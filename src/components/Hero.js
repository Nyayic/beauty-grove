import React from 'react'
import {Link} from 'react-router-dom'

const Hero = () => { 
    return (
        <div className="bg-yellow-100 h-screen justify-center items-center flex flex-col">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl  font-black mb-14">
             Beauty Grove
            </h1>
            <h2 className="md:text-6xl mb-14">Book Salon Services from One Place</h2>
            <Link to="/services" className="py-6 px-10 bg-yellow-400 rounded-full 
                text-3xl hover:bg-yellow-200 transition duration-300 ease-in-out flex items-center">
                Book a Service 
            </Link>
        </div>
    )
}

export default Hero;
