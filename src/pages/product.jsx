import React from 'react'
import { useLocation } from 'react-router-dom'
import Annocement from '../components/annocement'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Navber from '../components/navber'
import ProductList from '../components/productList'

const Product = () => {
    const location = useLocation()
    const gender = location.pathname.split("/")[2]

    return (
        <div className='relative backgroundgradient'>
            <Annocement />
            <Navber />
            
            <div className="lg:flex relative">
                <div className="flex lg:flex-col lg:gap-3 lg:mt-20 px-10 w-full" style={{ flex: "1" }}>
                    <div className="hidden lg:block">
                        <h1 className='text-lg mb-2 font-semibold'> products Category</h1>
                        <div className="flex gap-1">
                            <input type="checkbox" />
                            <label htmlFor="">All</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="checkbox" />
                            <label htmlFor="">Shirts</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="checkbox" />
                            <label htmlFor="">T-Shirts</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="checkbox" />
                            <label htmlFor="">Jeans</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="checkbox" />
                            <label htmlFor="">Hoodies</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="checkbox" />
                            <label htmlFor="">shoes</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="checkbox" />
                            <label htmlFor="">Accessories</label>
                        </div>
                    </div>
                    <div className="  flex-col self-start gap-1 hidden lg:block">
                        <span className='text-lg mb-2 font-semibold'>Range :-</span>
                        <div className="items-center flex gap-1">
                            <span>0</span>
                            <input type="range" max={10000} min={299} />
                            <span>10000</span>
                        </div>
                    </div>
                    <div className=" flex-col self-start gap-1 hidden lg:block">
                        <span className='text-lg mb-2 font-semibold'>Sort By</span>
                        <div className="flex gap-1">
                            <input type="radio" name='price' />
                            <label htmlFor="">sort by lowest price</label>
                        </div>
                        <div className="flex gap-1">
                            <input type="radio" name='price' />
                            <label htmlFor="">sort by highest price</label>
                        </div>
                    </div>
                </div>
                {/* responsive */}
                <div className="flex justify-between my-4 lg:flex-col lg:gap-3 px-5 md:px-32 w-full lg:hidden" style={{ flex: "1" }}>
                    <div className=" lg:hidden">
                        <label htmlFor="">Category:-</label>
                        <select name="" id="">
                            <option value="">Select</option>
                            <option value="">Shirts</option>
                            <option value="">T-Shirts</option>
                            <option value="">Jeans</option>
                            <option value="">Hoodeis</option>
                            <option value="">Shoes</option>
                            <option value="">Jackets</option>
                        </select>
                    </div>

                    <div className="  lg:hidden">
                        <select name="" id="">
                            <option value="">Sort by</option>
                            <option value="desc">Price High to Low</option>
                            <option value="inc">Price Low to High</option>
                        </select>
                    </div>
                </div>

                {/* responsive ends */}
                <div className="overflow-scroll h-screen" style={{ flex: "5" }}>
                    <ProductList  gender={gender} />
                </div>
            </div>

            <Banner />
            <Footer />
        </div>
    )
}

export default Product
