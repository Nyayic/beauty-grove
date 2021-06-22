import React from 'react'
import MakeupOne from '../images/makeup1.jpg'
import BrideOne from '../images/bride1.jpg'
import NailOne from '../images/nail1.jpg'
import BraidOne from '../images/braid1.jpg'
import BraidTwo from '../images/braid3.jpg'
import Retach from '../images/hair1.jpg'

const Services = () => {
    return (
        <>
        <div className="flex item-center px-10 bg-yellow-100">
            <div className="flex flex-col justify-center items-center bg-yellow-100 h-screen font-roboto py-20 px-10">
                <img src={MakeupOne} alt="beauty" className="h-full rounded mb-2 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Simple Make up</h2>
                    <p className="mb-2"> Red, Long lasting</p>
                    <span>$16</span>
                </div>
            </div>
            
            <div className="flex flex-col justify-center items-center bg-yellow-100 h-screen font-roboto py-20 px-10">
                <img src={BrideOne} alt="beauty" className="h-full rounded mb-2 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Bridal Make up</h2>
                    <p className="mb-2"> Red, Long lasting</p>
                    <span>$16</span>
                </div>  
            </div>
            <div className="flex flex-col justify-center items-center bg-yellow-100 h-screen font-roboto py-20 px-10">
                <img src={NailOne} alt="beauty" className="h-full rounded mb-2 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Nail Fixing</h2>
                    <p className="mb-2"> Red, Long lasting</p>
                    <span>$16</span>
                </div>  
            </div>
         
        </div>

        <div className="flex item-center px-10 bg-yellow-100">
            <div className="flex flex-col justify-center items-center bg-yellow-100 h-screen font-roboto py-20 px-10">
                <img src={BraidOne} alt="beauty" className="h-full rounded mb-2 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Dreadlocks</h2>
                    <p className="mb-2"> Red, Long lasting</p>
                    <span>$16</span>
                </div>
            </div>
            
            <div className="flex flex-col justify-center items-center bg-yellow-100 h-screen font-roboto py-20 px-10">
                <img src={BraidTwo} alt="beauty" className="h-full rounded mb-2 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Box Braiding</h2>
                    <p className="mb-2"> Red, Long lasting</p>
                    <span>$16</span>
                </div>  
            </div>
            <div className="flex flex-col justify-center items-center bg-yellow-100 h-screen font-roboto py-20 px-10">
                <img src={Retach} alt="beauty" className="h-full rounded mb-2 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Hair Retach</h2>
                    <p className="mb-2"> Red, Long lasting</p>
                    <span>$16</span>
                </div>  
            </div>
           
        </div>
        </>
    )
}
export default Services
