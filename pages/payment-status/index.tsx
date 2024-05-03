import { useState, useEffect } from "react";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";

import { patch } from "../../services/axiosAPI";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import styles from "../styles.module.css";
import { useRouter } from "next/navigation";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);
const PaymentStatus = () => (
  <Elements stripe={stripePromise}>
    <PaymentStatusComponent />
  </Elements>
);

const PaymentStatusComponent = () => {
  const stripe = useStripe();
  const [message, setMessage] = useState<string>("");
  const [paymentIntentObj, setPaymentIntentObj] = useState<any>();

  const router = useRouter();

  const handleLogout = async () => {
    // await logout()
    router.push("/");
  };

  // useEffect(() => {
  //   if (!stripe) {
  //     return;
  //   }

  //   // Retrieve the "payment_intent_client_secret" query parameter appended to
  //   // your return_url by Stripe.js
  //   const clientSecret: any = new URLSearchParams(window.location.search).get(
  //     "payment_intent_client_secret"
  //   );

  //   // Retrieve the PaymentIntent
  //   stripe
  //     .retrievePaymentIntent(clientSecret)
  //     .then(({ paymentIntent }: any) => {
  //       // Inspect the PaymentIntent `status` to indicate the status of the payment
  //       // to your customer.
  //       //
  //       // Some payment methods will [immediately succeed or fail][0] upon
  //       // confirmation, while others will first enter a `processing` state.
  //       //
  //       // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
  //       setPaymentIntentObj(paymentIntent);
  //       switch (paymentIntent.status) {
  //         case "succeeded":
  //           setMessage("Success! Payment received.");
            

  //           break;

  //         case "processing":
  //           setMessage(
  //             "Payment processing. We'll update you when payment is received."
  //           );
  //           break;

  //         case "requires_payment_method":
  //           // Redirect your user back to your payment page to attempt collecting
  //           // payment again
  //           setMessage("Payment failed. Please try another payment method.");
  //           break;

  //         default:
  //           setMessage("Something went wrong.");
  //           break;
  //       }
  //     });
  // }, [stripe]);
  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className={styles.dark_navbar}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home
              </Typography>
              <Button color="inherit" onClick={() => router.push("/orders")}>
                  Orders
                </Button>
              <Button color="inherit" onClick={() => handleLogout()}>
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
    <div className="text-center mt-20" style={{marginTop:"20px"}}>
      <h4 className="font-bold capitalize text-2xl" style={{textTransform:"capitalize"}}>
        {/* <b>{paymentIntentObj?.status}</b> */}
        <b>Order Placed Successfully</b>
      </h4>
      <br />
      {message}{" "}
      <Link href="/home" className="underline  text-blue-600">
        Redirect to home in
      </Link>
    </div>
    </>
  );
};

export default PaymentStatus;
