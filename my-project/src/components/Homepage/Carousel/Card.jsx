import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ product }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/product/${product.id}`)
    }

  return (
    <div onClick={handleNavigate}  className="w-72 m-6 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group">
      
      <div className="w-full h-56 overflow-hidden">
        <img
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
          src={product.imageUrl}
          alt="Product Image"
        />
      </div>

      <div className="p-5 flex flex-col gap-2">
        <p className="text-lg font-bold text-gray-900 tracking-wide">
          {product.brand}
        </p>
        <p className="text-sm text-gray-500 line-clamp-2 truncate w-64">
          {product.title}
        </p>

        <button className="mt-4 w-full py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 active:scale-95 transition-all duration-200">
          View More
        </button>
      </div>
    </div>
  )
}

export default Card
