import {
  Body,
  Container,
  Font,
  Head,
  Html,
  Preview,
} from "@react-email/components";
import * as React from "react";
import LogoWithBackground from "../components/LogoWithBackground";
import Footer from "./Footer";

export const TemplateShell = ({
  content,
  title,
}: {
  content: React.ReactNode;
  title: string;
}) => (
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
    <Preview>{title}</Preview>
    <Body style={main}>
      <Container style={container}>
        <LogoWithBackground />
        <Container style={contentSpacing}>
          <Container style={contentContainer}>{content}</Container>
          <Footer />
        </Container>
      </Container>
    </Body>
  </Html>
);

export default TemplateShell;

const main = {
  margin: 0,
  padding: 0,
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
};

const contentSpacing = {
  padding: "0 1rem 1rem 1rem",
};

const contentContainer = {
  position: "relative" as const,

  padding: "1rem 2rem",
  marginTop: "-3rem",
  backgroundColor: "#fff",
  borderRadius: "20px",
  boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.08)",

  zIndex: 1,
};
