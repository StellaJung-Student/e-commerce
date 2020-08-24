import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { publishableKey as key } from '../../config';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Stella Clothing Ltd.'
      billingAddress
      shippingAddress
      image='http://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={key}
    />
  );
};

export default StripeCheckoutButton;
