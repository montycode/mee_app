import React, { useState, useEffect } from 'react'
import config from 'config'
import { authenticationService } from '@/Services'
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { Link } from 'react-router-dom'

export const CheckoutForm = () => {
  const [currentUser, setCurrentUser] = useState(authenticationService.currentUserValue);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const [email, setEmail] = useState(currentUser.user.email);
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch(`${config.apiUrl}/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({items: [{ id: "xl-tshirt" }]})
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: email,
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });
    if (payload.error) {
      setError(`Error de pago ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <form id="payment-form p-4" onSubmit={handleSubmit}>
      <div className="p-4">
        <label className="text-gray-900 font-semibold">Correo Electrónico</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="correo@mail.com"
          className="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        />
      </div>
      <div className="p-4">
        <label className="text-gray-900 font-semibold">Datos de Pago</label>
        <CardElement id="card-element" className="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" onChange={handleChange} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Show any error that happens when processing the payment */}
        {error && (
        <div className="p-4 col-span-1 md:col-span-2">
            <p className="text-center italic font-bold col-span-2 p-2 text-red-500">
                {error}
            </p>
        </div>
        )}
        <div className="p-4 col-span-1">
          <Link to='/booking'
            className="group w-full col-span-1 relative uppercase flex justify-center py-2 px-4 border border-black text-sm font-medium text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-3000">
            Regresar
          </Link>
        </div>
        <div className="p-4 col-span-1">
          <button
            disabled={processing || disabled || succeeded}
            id="submit"
            className="group w-full col-span-1 relative uppercase flex justify-center py-2 px-4 border border-black text-sm font-medium text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
          >
            <span id="button-text">
              {processing ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                "Realizar Pago"
              )}
            </span>
          </button>
        </div>
      </div>
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a
          href={`https://dashboard.stripe.com/test/payments`}
        >
          {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
    </form>
  );
}