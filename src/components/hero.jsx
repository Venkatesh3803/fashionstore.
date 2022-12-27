import React from 'react'
import "../styles/hero.css"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState } from 'react';
import { Link } from "react-router-dom"

const Hero = () => {
    const [slide, setSlide] = useState("")

    const Slider = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            title: "BEST SEASON SALE HOODIES",
            offer: "upto 30 Off%",
            button: "SHOP NOW",
            cat : "hoodies"
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "BEST SEASON SALE HOODIES",
            offer: "upto 40 Off%",
            button: "SHOP NOW",
            cat : "shirt"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1511700581478-6e648e5e262d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            title: "BEST SUMMER SALE ",
            offer: "upto 35 Off%",
            button: "SHOP NOW",
            cat : "shoes"
        },
    ]

    const handleSlide = (direction) => {
        if (direction === "left") {
            setSlide(slide > 0 ? slide - 1 : 2)
        } else {
            setSlide(slide < 2 ? slide + 1 : 0)
        }
    }

    return (
        <div className='overflow-hidden'>
            <div className='hero relative h-[75vh] md:h-[89vh]' style={{ transform: `translateX(-${slide * 100}vw)`, zIndex: "1" }} >
                {Slider.map((item) => {
                    return (
                        <>
                            <div className="w-full relative" key={item.id}>
                                <img className='w-full h-full object-cover ' src={item.image} alt="" />
                                <div className="absolute md:top-48 md:left-20 left-12 top-32 flex flex-col gap-3 md:gap-5">
                                    <span className='text-2xl font-serif text-white md:text-5xl'>{item.title}</span>
                                    <span className='text-xl text-red-500 md:text-4xl '>{item.offer}</span>
                                    <Link to={`../products/${item.cat}`}>
                                        <span className='border md:px-4 md:py-2 px-2 py-1 text-xs md:text-lg text-white md:mt-10 hover:bg-sky-400 cursor-pointer w-fit border-gray-600 rounded-md bg-sky-500'>{item.button}</span>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            <div className=" relative flex gap-6 md:bottom-28 bottom-20 justify-center">
                <AiOutlineLeft onClick={() => handleSlide("left")} className='border border-white md:p-4 md:text-6xl text-3xl cursor-pointer text-white' style={{zIndex:"2"}} />
                <AiOutlineRight onClick={() => handleSlide("right")} className='border border-white md:p-4 md:text-6xl text-3xl cursor-pointer text-white'style={{zIndex:"2"}} />
            </div>
        </div>
    )
}

export default Hero
