import React from 'react'
import Footer from '../components/footer'
import Navber from '../components/navber'
import Hero from "../components/hero"
import Category from '../components/category'
import Feature from '../components/feature'
import Trending from '../components/trending'
import Annocement from '../components/annocement'
import Banner from '../components/banner'
import Incentives from '../components/incentives'


const Homepage = () => {
    return (
        <div>
            <div className='homebg'>
                <Annocement />
                <Navber />
                <Hero />
                <Feature Featured ="Featured"/>
                <Category />
                <Trending Trending ="Trending"/>
                <Banner />
                <Incentives />
                <Footer />
            </div>
        </div>
    )
}

export default Homepage
