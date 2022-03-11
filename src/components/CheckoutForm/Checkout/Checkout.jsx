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
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import CompletedPage from '../CompletedPage';

const steps = ['Shipping address', 'Payment Details'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const Form = () => (activeStep == 0 ? <AddressForm /> : <PaymentForm />);
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
          {activeStep == steps.length ? <CompletedPage /> : <Form />}
        </Paper>
      </main>
    </div>
  );
};

export default Checkout;
