import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import Footer from "../components/Footer";
import LogoWithBackground from "../components/LogoWithBackground";
import Step from "../components/Step";

export const CourierDostEmail = () => (
  <Html>
    <Head />
    <Font
      fontFamily="Poppins"
      fallbackFontFamily="Verdana"
      webFont={{
        url: "https://fonts.gstatic.com/s/poppins/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
        format: "woff2",
      }}
      fontWeight={400}
      fontStyle="normal"
    />
    <Preview>Welcome to CourierDost - Start shipping in 3 easy steps</Preview>
    <Body style={main}>
      <Container style={container}>
        <LogoWithBackground />
        <Container style={contentSpacing}>
          <Container style={contentContainer}>
            <Section style={section}>
              <Text style={text}>Hey Sandeep 👋</Text>
              <Heading style={heading}>Welcome to CourierDost!</Heading>
              <Text style={text}>
                Thanks for joining us! We’re thrilled to have you on board.
                Let’s get started with your shipping needs in just three easy
                steps.
              </Text>
            </Section>
            <Step
              imageSrc="/static/images/courierDostTemplate/enterPickupRequests.png"
              title="1) Enter Pickup Requests"
              description="Parcel on the move! Receive updates until it reaches its destination."
            />
            <Step
              imageSrc="/static/images/courierDostTemplate/reviewAndSelectBids.png"
              title="2) Review and Select Bids"
              description="Relax, compare, choose. Your package, your price."
            />
            <Step
              imageSrc="/static/images/courierDostTemplate/trackYourShipments.png"
              title="3) Track Your Shipments"
              description="Parcel on the move! Receive updates until it reaches its destination."
            />
          </Container>
          <Footer />
        </Container>
      </Container>
    </Body>
  </Html>
);

export default CourierDostEmail;

const main = {
  margin: 0,
  padding: 0,
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
};
const contentSpacing = {
  padding: "0 3rem",
};

const contentContainer = {
  padding: "1rem 2rem",
  marginTop: "4rem",
  backgroundColor: "#fff",
  borderRadius: "20px",
  boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.08)",

  zIndex: 1,
};

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
