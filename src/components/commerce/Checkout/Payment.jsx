import React from 'react'
import { PayPalButton } from 'react-paypal-button-v2';

const Payment = ({total_price}) => {
  return (
    <div>
        <PayPalButton
        amount={total_price/23000}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderId: data.orderID
            })
          });
        }}
        options={{
          clientId: "Abkwqbqb8lLm3MUbInjkqZyFuf73C3p_zA2JCqngH6Um-jWZMg4HuOhMKj3C_l3vuNckwwqKS1SDQI5q",
          currency: "USD"
        }}
      />
    </div>
  )
}

export default Payment