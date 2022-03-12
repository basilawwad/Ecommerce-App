import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import FormInput from './FormInput';

const AddressForm = () => {
  const methods = useForm();

  return (
    <div>
      <Typography variant='h6' gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit=''>
          <Grid container spacing={3}>
            <FormInput required name='firstName' label='First Name' />
            <FormInput required name='lasttName' label='Last Name' />
            <FormInput required name='address1' label='Adress' />
            <FormInput required name='email' label='Email' />
            <FormInput required name='city' label='city' />
            <FormInput required name='zip' label='ZIP/ Postal Code' />
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddressForm;
