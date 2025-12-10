import React, { useState } from 'react'; 
import { Step, StepLabel, Stepper } from '@mui/material';


const steps = [
    'Order Placed',  
    'Order Confirmed',
    'Shipped',
    'Out for Delivery',  
    'Delivered'   
];

const OrderTraker = () => {
     const [activeStep, setActiveStep] = useState(2); 

    return (
        <div className='w-full'>
            <Stepper activeStep={activeStep} alternativeLabel>
                 {steps.map((stepLabelText, index) =>
                    <Step key={index}> 
                        <StepLabel sx={{ color: '#9155FD', fontSize: '14px' }}>
                            {stepLabelText}
                        </StepLabel>
                    </Step>
                )}
            </Stepper>
        </div>
    )
}

export default OrderTraker