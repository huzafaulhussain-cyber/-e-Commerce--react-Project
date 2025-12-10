import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation.jsx'
import Homepage from '../components/Homepage/Carousel/Homepage.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Product from '../components/Product/Product.jsx'
import Productdetail from '../components/Productdetail/Productdetail.jsx'
import Cart from '../components/Cart/Cart.jsx'
import Checkout from '../components/Checkout/Checkout.jsx'
import Order from '../components/Order/Order.jsx'
import OrderDetail from '../components/Order/OrderDetail.jsx'

const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation />

            </div>
            <div>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />} />
                    <Route path='/product/:productId' element={<Productdetail />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/account/order' element={<Order />} />
                    <Route path='/account/order/:orderId' element={<OrderDetail />} />
                </Routes>
            </div>


            <div>
                <Footer />

            </div>

        </div>
    )
}

export default CustomerRouters
