import React from 'react'
import { AiFillFacebook, AiFillTwitterCircle, AiFillGoogleCircle } from "react-icons/ai";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navber from '../components/navber';
import { loginUser } from '../redux/authSlice';
import Annocement from '../components/annocement';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const Login = () => {
    const user = useSelector((state) => state.user.user)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }

    const reSet = () => {
        setEmail("")
        setPassword("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser({ email, password }))
        reSet()
    }
    if (user) {
        <Navigate to={"/"} />
    }


    return (
        <>
            <Annocement />
            <Navber />

            <div className="flex justify-center items-center lg:h-screen">
                <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-5xl w-[90%] h-[670px] md:h-[460px] m-2">
                    <div className="h-[90%] w-full md:w-3/4">
                        <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
                            <h1 className="font-semibold text-gray-600">DAILY BLOGS</h1>
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mt-10 md:mt-14 space-y-6 md:space-y-8">
                            <div className="">
                                <input type="email" placeholder="Email" name="email" required value={email} onChange={handleChange}
                                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" />
                            </div>
                            <div className="">
                                <input type="password" placeholder="Password" required name='password' value={password} onChange={handleChange}
                                    className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]" />
                            </div>
                            <div className="flex space-x-2 -ml-28 md:-ml-40  lg:-ml-52">
                                <input className="" type="checkbox" id="checkbox" name="checkbox" />
                                <h3 className="text-sm font-semibold text-gray-400 -mt-1 cursor-pointer">Remember Me</h3>
                            </div>
                            <div className="text-center mt-7">
                                <button type='submit'
                                    className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600  font-medium ">login</button>
                            </div>
                        </form>
                        <div className="text-center my-6">
                            <p className="text-sm font-medium text-gray-400 hover:text-blue-500 hover:underline">Forgot
                                Password ?</p>
                        </div>
                    </div>
                    <div className="h-[100%] w-full md:w-2/4  bg-center  bg-cover rounded-lg relative">
                        <img className='w-full h-full object-cover p-4 relative' src={"https://images.pexels.com/photos/13077981/pexels-photo-13077981.jpeg"} alt="" />
                        <div className="flex gap-5 p-5 text-4xl mx-auto absolute top-32 left-20 ">
                            <p>
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
                            <h1 className="">Dont have an account ?</h1>
                            <Link to={'/register'}>
                                <h3 className="underline underline-offset-4 tracking-wide hover:text-blue-400">Signup </h3>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Login
