import React from 'react'
import GooglePayButton from "@google-pay/button-react";

const Home = () => {
  return (

    <>
     <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"]
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId"
                }
              }
            }
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant"
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "1",
            currencyCode: "INR",
            countryCode: "IND"
          },
          shippingAddressRequired: false,
          callbackIntents: ["PAYMENT_AUTHORIZATION"]
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log("Success", paymentRequest);
        }}
        onPaymentAuthorized={(paymentData) => {
          console.log("Payment Authorised Success", paymentData);
          return { transactionState: "SUCCESS" };
        }}
        // onPaymentDataChanged={(paymentData) => {
        //   console.log("On Payment Data Changed", paymentData);
        //   return {};
        // }}
        existingPaymentMethodRequired="false"
        buttonColor="default"
        buttonType="short"
      />
    </>
   
  )
}

export default Home