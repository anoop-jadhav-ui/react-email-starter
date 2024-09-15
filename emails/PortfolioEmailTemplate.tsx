import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const PortfolioEmailTemplate = ({
  name = "{{name}}",
  email = "{{email}}",
  message = "{{message}}",
}) => (
  <Html>
    <Head />
    <Preview>New message received on your portfolio</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img
            alt="Portfolio Logo"
            src="http://api.anoopjadhav.in/images/portfolioAppLogo.png"
            width={200}
            height={50}
            style={{
              textAlign: "center",
            }}
          />
        </Section>
        <Hr style={hr} />
        <Container style={content}>
          <Text style={heading}>New Message Received!</Text>
          <Section style={labelDataItem}>
            <Text style={title}>Name</Text>
            <Text style={value}>{name}</Text>
          </Section>
          <Section style={labelDataItem}>
            <Text style={title}>Email</Text>
            <Text style={value}>{email}</Text>
          </Section>
          <Section style={labelDataItem}>
            <Text style={title}>Message</Text>
            <Text style={messageContent}>{message}</Text>
          </Section>
          <Button
            style={button}
            href="https://console.firebase.google.com/project/prod-aj-portfolio/overview"
          >
            View Dashboard
          </Button>
        </Container>
        <Hr style={hr} />
        <Section>
          <Text style={footerText}>
            This message was sent from your portfolio contact form. For more
            information, visit your{" "}
            <a href="https://console.firebase.google.com/project/prod-aj-portfolio/overview">
              dashboard
            </a>
            .
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default PortfolioEmailTemplate;

const main = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
  backgroundColor: "#fafafa",
  color: "#18181b",
  padding: "16px",
};

const container = {
  margin: "auto",
  padding: "0",
  maxWidth: "600px",
};

const logoContainer = {
  display: "flex",
  justifyContent: "center",
  textAlign: "center" as const,
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#27272a",
  marginBottom: "32px",
};

const content = {
  padding: "0 0 16px 0",
  textAlign: "left" as const,
};

const hr = {
  borderColor: "#d4d4d8",
  margin: "16px 0",
};

const labelDataItem = {
  marginBottom: "16px",
};

const title = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#27272a",
  margin: "0 0 4px 0",
};

const value = {
  fontSize: "16px",
  color: "#27272a",
  margin: "0",
};

const messageContent = {
  fontSize: "14px",
  color: "#52525b",
  backgroundColor: "#f9f9f9",
  padding: "12px",
  margin: "6px 0 0 0",
  borderRadius: "4px",
  border: "1px solid #e5e7eb",
  marginBottom: "8px",
};

const button = {
  backgroundColor: "hsla(0, 90%, 65%, 100%)",
  borderRadius: "4px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  padding: "12px",
  display: "inline-block",
};

const footerText = {
  fontSize: "14px",
  color: "#71717a",
};
