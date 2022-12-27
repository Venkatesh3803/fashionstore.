import React from 'react'

const Banner = () => {
    return (
        <div className='bg-transparent flex flex-col md:gap-10 gap-6 justify-center items-center border-t border-gray-600 py-20'>
            <h1 className='md:text-4xl text-2xl font-serif font-semibold '>NEWS LETTERS</h1>
            <span className='md:text-lg text-sm font-serif '>Always in touch with for your favorite products</span>
            <div className="">
                <input type="text" placeholder='Your Email..' className='md:px-5 md:py-2 md:w-80 text-sm px-2 py-1 rounded-md focus:outline-none border border-gray-600  '/>
                <button className='md:px-3 md:py-2 text-sm px-2 py-1 bg-sky-400 hover:bg-sky-500 rounded-md'>Subscribe</button>
            </div>
        </div>
    )
}

export default Banner
