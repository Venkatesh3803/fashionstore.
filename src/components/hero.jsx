import React from 'react'
import "../styles/hero.css"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState } from 'react';
import { Link } from "react-router-dom"
import hero1 from "../images/hero1.jpg"
import hero2 from "../images/hero2.jpg"
import hero3 from "../images/hero3.jpg"

const Hero = () => {
    const [slide, setSlide] = useState("")

    const Slider = [
        {
            id: 1,
            image: hero3,
            title: "Find It All. Shop Online Today",
            offer: "upto 30 Off%",
            button: "SHOP NOW",
            cat : "men"
        },
        {
            id: 2,
            image: hero2,
            title: "Discover New Possibilities. Shop Now",
            offer: "upto 40 Off%",
            button: "SHOP NOW",
            cat : "shirt"
        },
        {
            id: 3,
            image: hero1,
            title: "Get More for Less - Shop Now and Save Big!",
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
