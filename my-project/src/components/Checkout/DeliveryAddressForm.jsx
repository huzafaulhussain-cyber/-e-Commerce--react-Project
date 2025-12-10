import React from 'react'

const DeliveryAddressForm = () => {
    return (
        <div className="mt-10 flex flex-col lg:flex-row gap-8 justify-center">

            <div className="w-full max-w-lg bg-white shadow-md rounded-xl p-5  space-y-6 border border-gray-200 max-h-[500px] overflow-y-auto">

                <div className="pb-5 border-b border-gray-300">
                    <p className="font-semibold text-gray-900 text-lg">Raam Shah</p>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        Mumbai, Gokuldham Market,<br />
                        Near Shivam Building, 400001
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Mumbai Maharashtra 400001</p>

                    <p className="text-sm font-medium text-gray-900 mt-3">Phone Number</p>
                    <p className="text-sm text-gray-700">9038429384</p>
                </div>

                <div className="pb-2">
                    <p className="font-semibold text-gray-900 text-lg">Dev Dixit</p>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        Mumbai, Chincholi Bandar,<br />
                        Mind Space, 400001
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Mumbai Maharashtra 400001</p>

                    <p className="text-sm font-medium text-gray-900 mt-3">Phone Number</p>
                    <p className="text-sm text-gray-700">9087356787</p>
                </div>

            </div>

            <div className="w-full max-w-3xl bg-white p-7 shadow-md rounded-xl border border-gray-200">
                <form className="space-y-5">

                    <div className="flex flex-col md:flex-row gap-4">
                        <input type="text" placeholder="First Name *"
                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm" />
                        <input type="text" placeholder="Last Name *"
                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm" />
                    </div>

                    <textarea placeholder="Address *" rows="3"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm"></textarea>

                    <div className="flex flex-col md:flex-row gap-4">
                        <input type="text" placeholder="City *"
                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm" />
                        <input type="text" placeholder="State / Province / Region *"
                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <input type="text" placeholder="Zip / Postal Code *"
                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm" />
                        <input type="text" placeholder="Phone Number *"
                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm" />
                    </div>

                    <button type="submit"
                        className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 focus:ring-4 focus:ring-purple-300">
                        DELIVER HERE
                    </button>

                </form>
            </div>

        </div>

    )
}

export default DeliveryAddressForm