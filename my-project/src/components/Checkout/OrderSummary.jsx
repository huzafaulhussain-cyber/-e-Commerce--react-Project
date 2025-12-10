import React from 'react';
import CartItem from '../Cart/CartItem';

const OrderSummary = ({ items, onQuantityChange, onRemove, handleNext }) => {

    const originalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalDiscountAmount = items.reduce((total, item) => total + (item.price - item.discountedPrice) * item.quantity, 0);
    const finalAmount = originalPrice - totalDiscountAmount;
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            <div className="w-full bg-white shadow-md rounded-xl p-5 space-y-6 border border-gray-200 max-h-[500px] overflow-y-auto">
                <div className="pb-5 border-b border-gray-300">
                    <p className="font-semibold text-gray-900 text-lg">Raam Shah</p>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        Mumbai, Gokuldham Market, Near Shivam Building, 400001
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Mumbai Maharashtra 400001</p>

                    <p className="text-sm font-medium text-gray-900 mt-3">Phone Number</p>
                    <p className="text-sm text-gray-700">9038429384</p>
                </div>
            </div>


           <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-8 lg-px-20 mt-5'>
  
                <div className='mb-4 w-full '>
                    {items.map(item => (
                        <CartItem 
                            key={item.id} 
                            item={item} 
                            onQuantityChange={onQuantityChange}
                            onRemove={onRemove}
                        />
                    ))}

                </div>

                <div className="w-full max-w-[400px]  h-full m-5 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <h1 className='text-zinc-500'>PRICE DETAILS</h1>

                    <div className='py-4 my-4 border-y border-zinc-200 font-medium'>
                        <div className='flex justify-between items-center mt-3'>
                            <p>Price({totalItems} {totalItems === 1 ? 'item' : 'items'})</p>
                            <p>${originalPrice.toFixed(0)}</p>
                        </div>

                        <div className='flex justify-between items-center mt-3'>
                            <p>Discount Price</p>
                            <p className='text-green-500'>-${totalDiscountAmount.toFixed(0)}</p>
                        </div>

                        <div className='flex justify-between items-center mt-3'>
                            <p>Delivery Charges</p>
                            <p className='text-green-500'>Free</p>
                        </div>
                    </div>

                    <div className='flex justify-between font-bold items-center mt-3'>
                        <p>Total Amount</p>
                        <p className='text-green-700'>${finalAmount.toFixed(0)}</p>
                    </div>

                    <button onClick={handleNext} className='w-full text-center bg-purple-700 p-2 mt-5 text-white rounded'>
                        Payment
                    </button>
                </div>

            </div>



        </div>
        
    )
}

export default OrderSummary;
