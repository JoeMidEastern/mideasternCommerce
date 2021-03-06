import { Container } from "react-bootstrap";
import { Paper, Stepper, Step, StepLabel, Typography } from "@material-ui/core";
import { commerce } from "../../lib/commerce";
import React, { useState, useEffect } from "react";

import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Confirmation from "./Confirmation";

const steps = ["Shipping Address", "Payment Details"];

const Checkout = ({
  cartData,
  order,
  onCaptureCheckout,
  error,
  fetchTaxes,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [taxingZone, setTaxingZone] = useState({});

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cartData.id, {
          type: "cart",
        });

        setCheckoutToken(token);
      } catch (error) {
        console.log("ERROR ==> ", error);
      }
    };
    generateToken();
  }, [cartData]);

  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const backStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const PForm = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
        nextStep={nextStep}
      />
    );

  return (
    <Container>
      <Paper style={{ margin: "3rem 0" }}>
        <Typography style={{ marginTop: "3rem" }} variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper activeStep={activeStep}>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <Confirmation />
        ) : (
          checkoutToken && <PForm />
        )}
      </Paper>
    </Container>
  );
};

export default Checkout;
