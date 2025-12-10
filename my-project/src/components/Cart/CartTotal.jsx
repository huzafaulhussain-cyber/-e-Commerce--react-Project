import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartTotal = ({ items, discountPercentage = 0 }) => {
    const navigate = useNavigate();
     
    // Calculate total original price before any discount
    const originalPrice = items.reduce((total, item) => {
        // item.price is the original MRP
        return total + (item.price * item.quantity); 
    }, 0);

    // Calculate total discount amount (Original Price - Discounted Price) * Quantity
    const totalDiscountAmount = items.reduce((total, item) => {
        // Calculate the actual discount per item
        const itemDiscount = (item.price - item.discountedPrice) * item.quantity;
        return total + itemDiscount;
    }, 0);

    
    // Calculate final payable amount
    const finalAmount = originalPrice - totalDiscountAmount;

    // Calculate total quantity of all items
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);


    
    return (
        // Price details container: Responsive width (full on mobile, max-width on desktop)
        <div className="w-full max-w-lg lg:max-w-md m-auto lg:m-0 p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <div>
                <h1 className='text-zinc-500 font-semibold border-b pb-2 mb-2'>PRICE DETAILS</h1>
            </div>

            <div className='py-4 my-4 border-y border-zinc-200 font-medium '>
                {/* Price Line */}
                <div className='flex justify-between items-center  mt-3'>
                    <p>Price({totalItems} {totalItems === 1 ? 'item' : 'items'})</p>
                    <p>${originalPrice.toFixed(0)}</p> 
                </div>
                {/* Discount Line */}
                <div className='flex justify-between items-center mt-3'>
                    <p>Discount Price</p>
                    <p className='text-green-500'>-${totalDiscountAmount.toFixed(0)}</p> 
                </div>
                 <div className='flex justify-between items-center mt-3'>
                    <p>Delivery Charges</p>
                    <p className='text-green-500'>Free</p>
                </div>

            </div>

            <div className=''>
                 <div className='flex justify-between font-bold items-center mt-3 text-xl'>
                    <p>Total Amount</p>
                    <p className='text-green-700'>${finalAmount.toFixed(0)}</p> 
                </div>
                 <button 
                    onClick={() => navigate('/checkout')} 
                    className='w-full text-center cursor-pointer bg-purple-700 p-3 mt-5 text-white rounded-lg hover:bg-purple-800 transition-colors duration-300'
                >
                    Check Out 
                </button>
            </div>
        </div>
    )
}

export default CartTotal;