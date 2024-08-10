import { Img, Section } from "@react-email/components";
import * as React from "react";

const LogoWithBackground = () => {
  return (
    <Section style={logoContainer}>
      <div style={backgroundImageContainer}>
        <Img
          src="/static/images/cd-template/background.png"
          alt="Background Image"
          style={backgroundImage}
        />
        <Img
          src="/static/images/cd-template/mainLogo.png"
          alt="CourierDost Logo"
          style={logo}
        />
      </div>
    </Section>
  );
};

const logoContainer = {
  position: "relative" as const,
  textAlign: "center" as const,

  zIndex: -1,
};

const backgroundImageContainer = {
  position: "relative" as const,
  display: "block",
};

const backgroundImage = {
  position: "absolute" as const,
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  height: "auto",
  zIndex: 0,
};

const logo = {
  display: "block",
  margin: "0 auto",
  width: "200px",
  position: "relative" as const,
  paddingTop: "3rem",
  zIndex: 1,
};

export default LogoWithBackground;
