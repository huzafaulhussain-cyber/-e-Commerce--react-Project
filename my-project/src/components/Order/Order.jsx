import React, { useState, useEffect } from 'react'
import OrderCard from './OrderCard'

const initialOrders = [
    { id: 1, title: "Men Printed Cotton Blend Straight Kurta", size: "M", price: 1299, discountedPrice: 385, imageUrl: "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70", status: 'ON_THE_WAY', deliveryDate: 'Mar 03' },
    { id: 2, title: "Men Solid Cotton Blend Straight Kurta", size: "L", price: 850, discountedPrice: 425, imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70", status: 'DELIVERED', deliveryDate: 'Feb 28' },
    { id: 3, title: "Men Embroidered Jacquard Straight Kurta", size: "M", price: 2545, discountedPrice: 1400, imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70", status: 'CANCELLED', deliveryDate: 'Feb 25' },
    { id: 5, title: "Men Self Design Cotton Blend Straight Kurta", size: "M", price: 900, discountedPrice: 650, imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/i/v/x/xxl-br-ad-kt-105-adwyn-peter-original-imagj4zyd2q7t6cg.jpeg?q=70", status: 'DELIVERED', deliveryDate: 'Feb 15' },
    { id: 4, title: "Men Solid Pure Cotton Straight Kurta", size: "S", price: 799, discountedPrice: 499, imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/j/a/r/l-poch521835-peter-england-original-imag7jg47g7cxhg3-bb.jpeg?q=70", status: 'RETURNED', deliveryDate: 'Feb 20' },
];

const orderStatuses = [
    { label: 'On The Way', value: 'ON_THE_WAY' },
    { label: 'Delivered', value: 'DELIVERED' },
    { label: 'Cancelled', value: 'CANCELLED' },
    { label: 'Returned', value: 'RETURNED' },
];

const Order = () => {
    const [orders, setOrders] = useState(initialOrders);
    const [filteredOrders, setFilteredOrders] = useState(initialOrders);
    const [activeFilters, setActiveFilters] = useState([]);

    const handleFilterChange = (status) => {
        const newFilters = activeFilters.includes(status)
            ? activeFilters.filter(f => f !== status)
            : [...activeFilters, status];
        setActiveFilters(newFilters);
    };

    useEffect(() => {
        if (activeFilters.length === 0) {
            setFilteredOrders(orders);
        } else {
            const newFilteredOrders = orders.filter(order => activeFilters.includes(order.status));
            setFilteredOrders(newFilteredOrders);
        }
    }, [activeFilters, orders]);

    return (

        <div className='flex gap-10 mb-10 px-20 justify-center'>

            <div className="w-full h-full max-w-xs bg-white p-5 rounded-lg shadow-xl border border-gray-100">

                <h2 className="text-xl font-bold text-gray-900 pb-3">Filters</h2>
                {/* Galti 1 theek ki: hr ko self-close kiya */}
                <hr className="border-gray-300 mb-5" />

                <h3 className="text-sm font-semibold tracking-wider text-gray-700 uppercase mb-3">ORDER STATUS</h3>

                <div className="space-y-3">
                    {orderStatuses.map(status => (
                        <div key={status.value} className="flex items-center">
                            <input 
                                id={status.value} 
                                name="order-status" 
                                type="checkbox" 
                                checked={activeFilters.includes(status.value)}
                                onChange={() => handleFilterChange(status.value)}
                                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer" 
                            />
                            <label htmlFor={status.value} className="ml-3 text-sm text-gray-700 cursor-pointer">
                                {status.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className='space-y-5 w-full flex flex-col'>
                {filteredOrders.map((order) => <OrderCard key={order.id} order={order} />)}
            </div>

        </div>




    )
}

export default Order