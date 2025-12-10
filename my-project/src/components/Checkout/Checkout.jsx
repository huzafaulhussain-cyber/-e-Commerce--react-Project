import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';
import PaymentPage from './PaymentPage';
 
const steps = ['Login', 'Delivery', 'Order Summary', 'Payment'];

const initialCartItems = [
    { id: 1, name: "Men Printed Cotton Blend Straight Kurta", brand: "Majestic Man", size: "L", seller: "Flogen", price: 1299, discountedPrice: 385, quantity: 1, discount: 70, imageUrl: "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" },
    { id: 2, name: "Men Solid Cotton Blend Straight Kurta", brand: "Sojanya", size: "M", seller: "Flogen", price: 850, discountedPrice: 425, quantity: 2, discount: 50, imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70" },
    { id: 3, name: "Men Embroidered Jacquard Straight Kurta", brand: "FUBAR", size: "M", seller: "Flogen", price: 2545, discountedPrice: 1400, quantity: 1, discount: 45, imageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70" },
];

const LoginPage = () => <div>Login Page</div>;
 
export default function Checkout() {

    const [activeStep, setActiveStep] = useState(0);
    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleNext = () => setActiveStep((prev) => prev + 1);
    const handleBack = () => setActiveStep((prev) => prev - 1);

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

    const renderStepPage = () => {
        if (activeStep === 0) return <LoginPage />;
        if (activeStep === 1) return <DeliveryAddressForm />;
        if (activeStep === 2) return <OrderSummary items={cartItems} onQuantityChange={handleQuantityChange} onRemove={handleRemoveItem} handleNext={handleNext} />;
        if (activeStep === 3) return <PaymentPage />;
    };

    return (
<div className="px-5 md:px-10 lg:px-20 py-10">

            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4 }}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>

                    <Box sx={{ flex: '1 1 auto' }} />

                     {activeStep !== steps.length - 1 && (
                        <Button onClick={handleNext}>
                            Next
                        </Button>
                    )}

                     {activeStep === steps.length - 1 && (
                        <Button>
                            Finish
                        </Button>
                    )}
                </Box>

                <Box sx={{ mt: 4 }}>
                    {renderStepPage()}
                </Box>
            </Box>

        </div>
    );
}
