import { Img, Section, Text } from "@react-email/components";
import * as React from "react";

const Step = ({ imageSrc, title, description }) => (
  <Section style={stepContainer}>
    <table style={table}>
      <tr>
        <td style={imageCell}>
          <Img src={imageSrc} alt={title} width="64" style={stepImage} />
        </td>
        <td style={textCell}>
          <Text style={stepTitle}>{title}</Text>
          <Text style={stepDescription}>{description}</Text>
        </td>
      </tr>
    </table>
  </Section>
);

const stepContainer = {
  border: "1px solid #c7c9d9",
  borderRadius: "16px",
  backgroundColor: "#ffffff",
  padding: "1rem",
  marginBottom: "1rem",
};

const table = {
  width: "100%",
  borderCollapse: "collapse" as const,
};

const imageCell = {
  width: "64px",
  verticalAlign: "center" as const,
};

const textCell = {
  paddingLeft: "1rem",
};

const stepImage = {
  display: "block",
  margin: "0 auto",
  aspectRadio: "1",
};

const stepTitle = {
  fontSize: "1.1rem",
  fontWeight: "600",
  margin: "0px",
  marginBottom: "0.25rem",
};

const stepDescription = {
  paddingLeft: "0.5rem",
  fontSize: "0.875rem",
  color: "#667085",
  margin: 0,
  lineHeight: "1.5",
};

export default Step;
