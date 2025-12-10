import React from 'react'
import { useNavigate } from 'react-router-dom';

const OrderCard = ({ order }) => {

    const getStatusInfo = (status) => {
        switch (status) {
            case 'ON_THE_WAY':
                return { text: `Expected Delivery On ${order.deliveryDate}`, color: 'text-yellow-600' };
            case 'DELIVERED':
                return { text: `Your Item Has Been Delivered`, color: 'text-green-600' };
            case 'CANCELLED':
                return { text: 'This order has been cancelled', color: 'text-red-600' };
            case 'RETURNED':
                return { text: 'This order has been returned', color: 'text-gray-600' };
            default:
                return { text: '', color: '' };
        }
    };

    const statusInfo = getStatusInfo(order.status);

    const navigate = useNavigate();

    const handleNavigate = () => {
         navigate(`/account/order/${order.id}`)
    }


    return (

        <div onClick={handleNavigate} className=" w-full h-auto bg-white p-4 sm:p-5 rounded-lg shadow-lg border border-gray-100 flex items-start space-x-4 max-w-full mx-auto">

            <div style={{ flexShrink: 0 }}>
                <img
                    src={order.imageUrl}
                    alt={order.title}
                    className="h-32 w-28 object-cover object-top rounded-md border border-gray-200"
                />
            </div>

            <div style={{ flexGrow: 1 }} className="flex justify-between mt-2 items-start">
                <div>
                    <p className="text-gray-900 font-medium text-base leading-snug">
                        {order.title}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                        Size: {order.size}
                    </p>
                </div>
                <p className="text-lg font-semibold text-gray-900">
                    ${order.discountedPrice}
                </p>
                <div className="flex flex-col items-end space-y-2 ml-4">
                    <div className={`text-sm flex items-center font-semibold ${statusInfo.color}`}>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{statusInfo.text}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OrderCard