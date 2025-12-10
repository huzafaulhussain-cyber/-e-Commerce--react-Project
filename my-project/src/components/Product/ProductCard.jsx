import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/product/${product.id}`)
    }
    return (
        <div onClick={handleNavigate} className="w-[320px] bg-white rounded-2xl shadow-xl hover:shadow-2xl m-5 transition-all duration-300 overflow-hidden group cursor-pointer">

            <div className="w-full h-[280px] overflow-hidden">
                <img
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    src={product.imageUrl}
                    alt={product.title}
                />  
            </div>

            <div className="p-5 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-gray-900 truncate">
                    {product.brand}
                </h3>

                <p className="text-sm text-gray-500 line-clamp-2 ">
                    {product.title}
                </p>

                <p className="text-sm text-gray-500 line-clamp-2">
                    {product.color}
                </p>
             
                <div className="flex items-center justify-start gap-3 mt-2">
                    
                    <p className="text-xl font-extrabold text-indigo-600">
                        ${product.discountedPrice}
                    </p>

                    <p className="text-ms line-through  text-zinc-600">
                        ${product.price}
                    </p>

                    <p className="text-sm font-extrabold text-green-600">
                        {product.discountPersent}%Off
                    </p>

                   
                    
                </div>
            </div>

        </div>

    )
}

export default ProductCard
