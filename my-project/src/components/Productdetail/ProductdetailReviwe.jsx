import { Rating } from "@mui/material";
import React from "react";
import ProductRatings from "./ProductRatings";
import { mens_kurta } from "../../Data/mens_kurta";
import CarouselCard from "../Homepage/Carousel/CarouselCard";
 
const ProductdetailReviwe = () => {
    return (
        <>
 
            <div className="mt-10 p-8 bg-white rounded-2xl  flex flex-col lg:flex-row justify-around items-center gap-10">

                {/* LEFT SIDE — REVIEW SECTION */}
                <div className="flex gap-4">

                    {/* Avatar */}
                    <div className="h-14 w-14 flex items-center justify-center bg-purple-500 text-white rounded-full text-xl font-semibold">
                        H
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-1">
                        <p className="font-bold text-lg">Huzaifa</p>
                        <p className="text-sm text-gray-500">April 5, 2027</p>

                        <Rating name="read-only" value={5} readOnly size="small" />

                        <p className="text-gray-700 mt-1">
                            Nice product, I like it too much!
                        </p>
                    </div>
                </div>

                {/* RATINGS BOX */}
                <div className="w-[350px]">
                    <ProductRatings />
                </div>



            </div>
            <div className="mt-15">
              {mens_kurta.slice(0, 3).map((item) => (
    <CarouselCard key={item.id} data={item} />
))}


            </div>
        </>

    );
};

export default ProductdetailReviwe;
