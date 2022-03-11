import React, { useState } from 'react';
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button
} from '@material-ui/core';

const steps = ['Shipping address', 'Payment Details'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div>
      <main>
        <Paper>
          <Typography variant='h4'>Checkout</Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </main>
    </div>
  );
};

export default Checkout;
