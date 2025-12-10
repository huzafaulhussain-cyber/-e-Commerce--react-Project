import React from 'react'
import OrderTraker from './OrderTraker'
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetail = () => {
  return (

    <div className='mb-10'>
      <div className="w-full max-w-7xl m-auto bg-white shadow-lg rounded-xl p-5 space-y-6 border border-gray-200 max-h-[500px] overflow-y-auto">
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


      <div className='my-20'>
        <OrderTraker activeStep={3} />
      </div>


      {[1, 1, 1, 1, 1, 1].map((item) =>
        <div className="w-full  h-full bg-white p-4 sm:p-5 rounded-lg shadow-lg border border-gray-100 flex items-start space-x-4 max-w-7xl mt-6 m-auto">

          <div style={{ flexShrink: 0 }}>
            <img
              src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
              alt="Women Bodycon Yellow Dress"
              className="h-30 w-26 object-cover rounded-md border border-gray-200"
            />
          </div>

          <div style={{ flexGrow: 1 }} className="flex justify-between mt-2 items-start">
            <div>
              <p className="text-gray-900 font-medium text-base leading-snug">
                Women Bodycon Yellow Dress
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Size: M
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Color:green
              </p>
              <p className="text-gray-900 font-xl text-base leading-snug">
                Seller:FALTOOO FASHTION
              </p>
              <p className="text-lg font-semibold text-gray-900">
                ₹499
              </p>
            </div>
            <div className="flex flex-col items-end space-y-2 mt-10">

              <div className="text-right flex items-center gap-3">
                <StarBorderIcon style={{ color: 'purple' }} />
                <a href='#' className="text-xl text-purple-800 mt-0.5">
                  Rate & Review Product
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>

  )
}

export default OrderDetail 