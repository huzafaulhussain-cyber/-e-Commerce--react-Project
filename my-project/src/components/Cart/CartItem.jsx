import React, { useState } from 'react';

const PlusIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const MinusIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>;

function CartItem({ item, onQuantityChange, onRemove }) {

    return (
         <div className="w-full  my-3 p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-zinc-300">

             <div className="flex items-start gap-4 sm:gap-6">

                 <div className="w-20 h-20 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden rounded-lg">
                    <img
                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        src={item.imageUrl}
                        alt={item.name}
                    />
                </div>

                 <div className="flex flex-col gap-1 flex-grow">
                    <h1 className="text-gray-900 font-bold text-base sm:text-lg leading-snug">
                        {item.brand}
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base">
                        {item.name}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                        Size: <span className="font-semibold text-gray-700">{item.size}</span>
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                        Seller: <span className="text-indigo-600 font-medium hover:text-indigo-700">{item.seller}</span>
                    </p>

                     <div className="flex items-center gap-3 mt-1 sm:mt-2 flex-wrap">
                        <p className="text-lg font-bold text-gray-900">${item.discountedPrice}</p>
                        <p className="line-through text-gray-400 text-sm">${item.price}</p>
                        <p className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{item.discount}% off</p>
                    </div>

                </div>

            </div>

         
            <div className='flex flex-wrap items-center justify-between py-3 mt-4 border-t border-zinc-200'>

                 <div className='flex items-center gap-2 mb-2 sm:mb-0'>
                    <button
                        onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity === 1}
                        className={`p-1 border rounded-full text-gray-600 transition-all duration-150 ${item.quantity === 1 ? 'border-gray-200 text-gray-400 cursor-not-allowed' : 'border-gray-300 hover:text-purple-700 hover:border-purple-700'
                            }`}
                    >
                        <MinusIcon className="w-4 h-4" />
                    </button>

                    <span className='px-3 text-base font-medium text-gray-800 border-x border-zinc-200 h-6 flex items-center'>{item.quantity}</span>

                    <button
                        onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                        className="p-1 border border-gray-300 rounded-full text-gray-600 hover:text-purple-700 hover:border-purple-700 transition-all duration-150"
                    >
                        <PlusIcon className="w-4 h-4" />
                    </button>
                </div>

                 <div className='cursor-pointer' onClick={() => onRemove(item.id)}>
                    <p className='text-sm font-semibold text-red-500 hover:text-red-700 transition-colors duration-200'>
                        REMOVE
                    </p>
                </div>

            </div>

        </div>
    );
}

export default CartItem;