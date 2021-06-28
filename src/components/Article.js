import React from 'react'
import MakeupOne from '../images/makeup1.jpg'
import BraidTwo from '../images/hair1.jpg'
import BraidOne from '../images/braid1.jpg'
import MakeupTwo from '../images/makeup2.jpg'


const Article = () => {
    return (
        <>
        <div class="antialiased bg-yellow-100 text-gray-900 font-sans p-6">
                <div class="container mx-auto">
                    <h2 className="md:text-6xl mb-14 text-center">Recent Articles</h2>
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                            <a href="/services" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                <div class="relative pb-48 overflow-hidden">
                                    <img class="absolute inset-0 h-full w-full object-cover" src={MakeupOne} alt="beauty" />
                                </div>
                                <div class="p-4">
                                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Skin Care</span>
                                        <h2 class="mt-2 mb-2  font-bold">10 Ways to care for your skin</h2>
                                        <p class="text-sm">Based in Kampala, The Boss Look is a beauty salon offering a wide range of beauty, nail and waxing services.</p><br/>
                                        <p class="text-sm">Based in Kampala, The Boss Look is a beauty salon offering a wide range of beauty, nail and waxing services.</p>
                                </div>
                                <div class="p-4 border-t border-b font-bold text-xs text-gray-700">
                                    <span class="flex items-center">
                                        <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> Read Article
                                    </span>        
                                </div>
                            </a>
                        </div>

                        <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                            <a href="/services" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                <div class="relative pb-48 overflow-hidden">
                                    <img class="absolute inset-0 h-full w-full object-cover" src={BraidTwo} alt="nail" />
                                </div>
                                <div class="p-4">
                                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Hair</span>
                                    <h2 class="mt-2 mb-2  font-bold">10 Ways to style you box braids</h2>
                                    <p class="text-sm">Based in Kampala, The Boss Look is a beauty salon offering a wide range of beauty, nail and waxing services.</p><br/>
                                        <p class="text-sm">Based in Kampala, The Boss Look is a beauty salon offering a wide range of beauty, nail and waxing services.</p>
                                </div>
                                <div class="p-4 border-t border-b font-bold text-xs text-gray-700">
                                    <span class="flex items-center">
                                        <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> Read Article
                                    </span>        
                                </div>
                            </a>
                        </div>

                        <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                            <a href="/services" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                <div class="relative pb-48 overflow-hidden">
                                    <img class="absolute inset-0 h-full w-full object-cover" src={BraidOne} alt="Braid" />
                                </div>
                                <div class="p-4">
                                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Hair</span>
                                    <h2 class="mt-2 mb-2  font-bold">Hairstyles for Summer</h2>
                                    <p class="text-sm">Based in Kampala, The Boss Look is a beauty salon offering a wide range of beauty, nail and waxing services.</p><br/>
                                    <p class="text-sm">Based in Kampala, The Boss Look is a beauty salon offering a wide range of beauty, nail and waxing services.</p>
                                </div>
                                <div class="p-4 border-t border-b font-bold text-xs text-gray-700">
                                    <span class="flex items-center">
                                        <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> Read Article
                                    </span>        
                                </div>
                            </a>
                        </div>

                        <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                            <a href="/services" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                <div class="relative pb-48 overflow-hidden">
                                    <img class="absolute inset-0 h-full w-full object-cover" src={MakeupTwo} alt="massage" />
                                </div>
                                <div class="p-4">
                                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Skin Care</span>
                                    <h2 class="mt-2 mb-2  font-bold">7 Ways to get rid of acne.</h2>
                                    <p class="text-sm">Based in Kampala, The Boss Look is a beauty salon offering a wide range of beauty, nail and waxing services.</p><br/>
                                    <p class="text-sm">Based in Kampala, The Boss Look is a beauty salon offering a wide range of beauty, nail and waxing services.</p>
                                </div>
                                <div class="p-4 border-t border-b text-xs font-bold text-gray-700">
                                    <span class="flex items-center">
                                        <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> Read Article
                                    </span>        
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Article
