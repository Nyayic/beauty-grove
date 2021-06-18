import React from 'react'
import ImageOne from '../images/throw-pillow.jpg'

const Content = () => {
    return (
        <>
        <div className="flex item-center px-10">
            <div className="menu-card">
                <img src={ImageOne} alt="beauty" className="h-full rounded mb-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Throw Pillow</h2>
                    <p className="mb-2"> Red, Long lasting</p>
                    <span>$16</span>
                </div>
            </div>
            
            <div className="menu-card">
                <img src={ImageOne} alt="beauty" className="h-full rounded mb-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Throw Pillow</h2>
                    <p className="mb-2"> Red, Long lasting</p>
                    <span>$16</span>
                </div>  
            </div>
            <div className="menu-card">
                <img src={ImageOne} alt="beauty" className="h-full rounded mb-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Throw Pillow</h2>
                    <p className="mb-2"> Red, Long lasting</p>
                    <span>$16</span>
                </div>  
            </div>
            <div className="menu-card">
                <img src={ImageOne} alt="beauty" className="h-full rounded mb-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Throw Pillow</h2>
                    <p className="mb-2"> Red, Long lasting</p>
                    <span>$16</span>
                </div>  
            </div>
        </div>
     </>
    )}
export default Content;
