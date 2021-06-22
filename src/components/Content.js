import React from 'react'
import ImageOne from '../images/throw-pillow.jpg'

const Content = () => {
    return (
        <>
        <div className="item-center px-20 pt-10 text-5xl bg-yellow-50">
            Featured Services
        </div>

        <div className="flex item-center px-10 bg-yellow-50"> 
            <div className="menu-card">
                <img src={ImageOne} alt="beauty" className="h-full rounded mb-10 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl">Bridal Make up</h2>
                    
                </div>
            </div>
          
            <div className="menu-card">
                <img src={ImageOne} alt="beauty" className="h-full rounded mb-10 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl">Birthday Party Make up</h2>
                    
                </div>  
            </div>
            <div className="menu-card">
                <img src={ImageOne} alt="beauty" className="h-full rounded mb-10 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl">Hairstyles</h2>
                   
                </div>  
            </div>
        </div>

        <div className="item-center px-20 pt-10 text-5xl bg-yellow-100">
            <h2>Featured Saloons</h2>
        </div>
        <div className="flex item-center px-10 bg-yellow-100">
            <div className="flex flex-col justify-center items-center bg-yellow-100 h-screen font-mono py-40 px-10">
                <img src={ImageOne} alt="beauty" className="h-full rounded mb-10 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-0">Sparkles Saloon</h2>
                    <p className="mb-0"> Bugolobi, Lugogo Mall, Naalya</p>
                    <span>5 Stars</span>
                </div>
            </div>
          
            <div className="flex flex-col justify-center items-center bg-yellow-100 h-screen font-mono py-40 px-10">
                <img src={ImageOne} alt="beauty" className="h-full rounded mb-10 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-0">Head Masters</h2>
                    <p className="mb-0"> Bukoto Street</p>
                    <span>5 stars</span>
                </div>  
            </div>
            <div className="flex flex-col justify-center items-center bg-yellow-100 h-screen font-mono py-40 px-10">
                <img src={ImageOne} alt="beauty" className="h-full rounded mb-10 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-0">Teo Bridal Saloon</h2>
                    <p className="mb-0"> Kansanga</p>
                    <span>4.5 stars</span>
                </div>  
            </div>
        </div>
     </>
    )}
export default Content;
