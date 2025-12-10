import React from 'react';

const ratingsData = [
  { level: 'Excellent', count: 19259, color: 'bg-green-600', widthPercent: 45 },
  { level: 'Very Good', count: 19259, color: 'bg-green-700', widthPercent: 25 },
  { level: 'Good', count: 19259, color: 'bg-yellow-500', widthPercent: 18 },
  { level: 'Average', count: 19259, color: 'bg-yellow-800', widthPercent: 8 },
  { level: 'Poor', count: 19259, color: 'bg-red-600', widthPercent: 4 },
];

const ProductRatings = () => {
  const totalRatings = 42807;

  return (
    <div className="p-4 bg-white rounded-lg shadow w-full ">

      <h2 className="text-lg font-semibold mb-3 text-gray-800">
        Product Ratings
      </h2>

      <div className="space-y-3">
        {ratingsData.map((rating, index) => (
          <div key={index} className="flex items-center text-sm">
            <div className="w-24 text-gray-700 capitalize">
              {rating.level}
            </div>

            <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
              <div
                className={`h-2 rounded-full ${rating.color}`}
                style={{ width: `${rating.widthPercent}%` }}
              ></div>
            </div>

            <div className="w-16 text-right text-gray-600">
              {rating.count.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductRatings;
