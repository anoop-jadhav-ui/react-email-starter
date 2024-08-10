import { Section, Text, Link } from "@react-email/components";
import React from "react";

const footerStyles = {
  padding: "1.5rem 1rem",
  color: "#8A94A3",
  textAlign: "center" as const,
  lineHeight: "1.4",
  fontSize: "10px",
};

const linkStyle = {
  color: "rgb(0, 71, 143)",
  textDecoration: "none",
};

const Footer = () => (
  <Section style={footerStyles}>
    <Text style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>
      Thank you for choosing CourierDost!
    </Text>
    <Text style={{ marginBottom: "0.5rem" }}>
      📍 2A7, A Wing, Gundecha Onclave, Saki Naka Metro, Kherani Road, Andheri
      East, Mumbai
    </Text>
    <Text style={{ marginBottom: "0.5rem" }}>
      Visit us:{" "}
      <Link href="https://www.courierdost.com" style={linkStyle}>
        www.courierdost.com
      </Link>
    </Text>
    <Text>
      Connect with us:{" "}
      <Link
        href="https://www.facebook.com/people/CourierDost/61559195482509/?mibextid=ZbWKwL"
        style={linkStyle}
      >
        Facebook
      </Link>
      ,{" "}
      <Link
        href="https://www.instagram.com/courier.dost/?igsh=MW4yNHJyb3dqZGdpdA%3D%3D"
        style={linkStyle}
      >
        Instagram
      </Link>
      ,{" "}
      <Link
        href="https://www.linkedin.com/company/courierdost"
        style={linkStyle}
      >
        LinkedIn
      </Link>
    </Text>
  </Section>
);

export default Footer;
