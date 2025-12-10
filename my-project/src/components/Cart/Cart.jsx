import React, { useState } from 'react';
 import CartTotal from './CartTotal';      
import CartItem from './CartItem';

const Cart = () => {
    
    const initialCartItems = [
        { id: 1, name: "Men Printed Cotton Blend Straight Kurta", brand: "Majestic Man", size: "L", seller: "Flogen", price: 1299, discountedPrice: 385, quantity: 1, discount: 70, imageUrl: "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" },
        { id: 2, name: "Men Solid Cotton Blend Straight Kurta", brand: "Sojanya", size: "M", seller: "Flogen", price: 850, discountedPrice: 425, quantity: 2, discount: 50, imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70" },
        { id: 3, name: "Men Embroidered Jacquard Straight Kurta", brand: "FUBAR", size: "M", seller: "Flogen", price: 2545, discountedPrice: 1400, quantity: 1, discount: 45, imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70" },
    ];

    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity < 1) return;  
        const updatedItems = cartItems.map(item =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedItems);
    };

    const handleRemoveItem = (itemId) => {
        const updatedItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedItems);
    };
 
    return (
         <div className='flex flex-col lg:flex-row justify-center lg:gap-8 p-4 sm:p-6 lg:px-10 xl:px-20'>

             <div className='lg:w-3/5 xl:w-2/3 mb-4 lg:mb-0'>
                 {cartItems.map(item => (
                     <CartItem 
                        key={item.id} 
                        item={item}
                        onQuantityChange={handleQuantityChange}
                        onRemove={handleRemoveItem}
                     />
                ))}

            </div>

             {/* Cart Total Container */}
             <div className='lg:w-2/5 xl:w-1/3'>
                <CartTotal items={cartItems} />
             </div>
            
        </div>
    )
}

export default Cart;