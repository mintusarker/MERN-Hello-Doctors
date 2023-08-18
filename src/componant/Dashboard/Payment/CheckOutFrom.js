import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutFrom = ({ booking }) => {

    const { price, patient, email } = booking;
    // console.log(price);

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        };

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        };

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        if (error) {
            console.log(error);
            setCardError(error.message)
        }

        else {
            setCardError('');
        };


        setSuccess('');

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        };

        if (paymentIntent.status === 'succeeded') {
            setSuccess('Congrats! your payment completed');
            setTransactionId(paymentIntent.id)
        };

        console.log("paymentIntent", paymentIntent);
        console.log("paymentIntent", paymentIntent.id);


    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-sm btn-success my-3' disabled={!stripe || !clientSecret}>
                    Pay
                </button>

            </form>

            <p>{cardError}</p>
            {
                success && <div>
                    <p className='text-green-600'>{success}</p>
                    <p className='font-semibold'>Your transaction id: <span className='text-rose-600'>{transactionId}</span></p>
                </div>
            }

        </>


    );
};

export default CheckOutFrom;