import React from 'react'
import { AiFillFacebook, AiFillTwitterCircle, AiFillGoogleCircle } from "react-icons/ai";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navber from '../components/navber';
import Annocement from '../components/annocement';
import { registerUser } from '../redux/authSlice';
import { useDispatch } from "react-redux"


const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()


    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "username") {
            setUsername(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }

    const reSet = () => {
        setEmail('')
        setUsername('')
        setPassword('')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUser({ email, username, password }))
        reSet()
    }

    return (
        <>
            <Annocement />
            <Navber />
            <div>
                <div className="flex my-14 md:my-5 justify-center items-center h-screen">
                    <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-5xl w-[90%] m-2">
                        <div className="h-[90%] w-full md:w-3/4">
                            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
                                <h1 className="font-semibold text-gray-600">DAILY BLOGS</h1>
                            </div>
                            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mt-10 md:mt-14 space-y-6 md:space-y-8">
                                <div className="">
                                    <input type="text" placeholder="Email" name="email" required onChange={handleChange} value={email}
                                        className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" />
                                </div>
                                <div className="">
                                    <input type="text" placeholder="User Name" name='username' required onChange={handleChange} value={username}
                                        className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" />
                                </div>
                                <div className="">
                                    <input type="password" placeholder="Password" name='password' required minLength={6} onChange={handleChange} value={password}
                                        className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" />
                                </div>
                                <div className="text-center mt-7">
                                    <button
                                        type='submit'
                                        className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600  font-medium ">Sign Up</button>
                                </div>
                            </form>
                        </div>
                        <div className="h-[100%] w-full md:w-2/4  bg-center  bg-cover rounded-lg relative">
                            <img className='w-full h-full p-4 object-cover relative' src={"https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" />
                            <div className="flex gap-5 p-5 text-4xl mx-auto absolute top-32 left-20 ">
                                <p >
                                    <AiFillFacebook className='text-blue-700' />
                                </p>
                                <p>
                                    <AiFillTwitterCircle />
                                </p>
                                <p >
                                    <AiFillGoogleCircle />
                                </p>
                            </div>
                            <div className="text-white text-base font-semibold absolute top-44 left-24 text-center my-10  space-y-2">
                                <h1 className="">Already have an account ?</h1>
                                <Link to={'/login'}>
                                    <h3 className="underline underline-offset-4 tracking-wide hover:text-blue-400">Log In </h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Register
