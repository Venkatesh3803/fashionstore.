import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Navber from '../components/navber'
import ProductDesign from '../components/productDesign'
import { fetchingSinglePost } from '../redux/productSlice'
import Incentives from '../components/incentives'

const SingleProduct = () => {
    const productData = useSelector((state) => state.products.product)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchingSinglePost({ id }))
    }, [dispatch, id])

    return (
        <div className='backgroundgradient'>
            <Navber />
            <ProductDesign productData={productData} />
            <Banner />
            <Incentives />
            <Footer />
        </div>
    )
}

export default SingleProduct
