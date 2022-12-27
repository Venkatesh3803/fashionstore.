
import React from 'react'
import { Link } from 'react-router-dom'

const Successpage = () => {
    return (
        <div className='flex flex-col justify-center bg-purple-100 items-center h-screen border border-gray-400 rounded-2xl'>
            <div className=" border border-gray-400 rounded-2xl p-10">
                <h1 className='text-3xl font-bold'>Successfully placed order</h1>
                <h1 className='text-gray-500 font-semibold'>OrderId :- <span>1231231654645</span></h1>
            </div>
            <Link to={"/"}>
                <p>
                    <span className='text-blue-600 border-b border-blue-600 '>continue Shopping...</span>
                </p>
            </Link>
        </div>
    )
}

export default Successpage

