import { Heading, Section, Text } from "@react-email/components";
import * as React from "react";
import Step from "../components/Step";
import TemplateShell from "../components/TemplateShell";

export const CourierDostEmail = () => (
  <TemplateShell
    title="Welcome to CourierDost - Start shipping in 3 easy steps"
    content={
      <>
        <Section style={section}>
          <Text style={text}>Hey Sandeep 👋</Text>
          <Heading style={heading}>Welcome to CourierDost!</Heading>
          <Text style={text}>
            Thanks for joining us! We’re thrilled to have you on board. Let’s
            get started with your shipping needs in just three easy steps.
          </Text>
        </Section>
        <Step
          imageSrc="/static/images/enterPickupRequests.png"
          title="1) Enter Pickup Requests"
          description="Parcel on the move! Receive updates until it reaches its destination."
        />
        <Step
          imageSrc="/static/images/reviewAndSelectBids.png"
          title="2) Review and Select Bids"
          description="Relax, compare, choose. Your package, your price."
        />
        <Step
          imageSrc="/static/images/trackYourShipments.png"
          title="3) Track Your Shipments"
          description="Parcel on the move! Receive updates until it reaches its destination."
        />
      </>
    }
  />
);

export default CourierDostEmail;

const section = {
  padding: "1rem 0",
};

const text = {
  fontSize: "16px",
  color: "#101828",
  margin: "0.5rem 0",
};

const heading = {
  fontSize: "1rem",
  color: "#101828",
  fontWeight: "bold",
  marginTop: "2rem",
};
