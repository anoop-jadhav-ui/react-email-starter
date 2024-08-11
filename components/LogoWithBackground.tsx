import { Img, Section } from "@react-email/components";
import * as React from "react";

const LogoWithBackground = () => {
  return (
    <Section style={logoContainer}>
      <Img
        src="/static/images/bgWithLogo.png"
        alt="Background Image with Logo"
        style={{
          textAlign: "center" as const,
          width: "100%",
          height: "auto",
          zIndex: -1,
        }}
      />
    </Section>
  );
};

const logoContainer = {
  position: "relative" as const,
  textAlign: "center" as const,
};

export default LogoWithBackground;
