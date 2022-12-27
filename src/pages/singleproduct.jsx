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
        <div>
            <img className='img' src="https://img.freepik.com/free-vector/fluid-pastel-background_53876-93216.jpg?w=1060&t=st=1671781697~exp=1671782297~hmac=30c025ee4e72a6ce79615379203857f66eae27df0d0cb550ee74f85b15017e75" alt="" />
            <Navber />
            <ProductDesign productData={productData} />
            <Banner />
            <Incentives />
            <Footer />
        </div>
    )
}

export default SingleProduct
