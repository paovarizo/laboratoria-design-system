import { styled } from "@mui/material";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
export interface ButtonCustomProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * Set the variant for the button.
   * @default 'M'
   */
  variant?: "register" | "login";
}

const ButtonRegister = styled("button", {
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root],
})<ButtonCustomProps>(() => ({
  border: "none",
  background: "#6C3483",
  padding: "10px",
  color: "white",
  borderRadius: "5px",
}));
const ButtonLogin = styled("button", {
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root],
})<ButtonCustomProps>(() => ({
  border: "1px solid #6C3483",
  background: "white",
  padding: "10px",
  color: "#6C3483",
  borderRadius: "5px",
}));

export default (props: ButtonCustomProps) => {
  switch (props.variant) {
    case "register": {
      return <ButtonRegister {...props} />;
      break;
    }
    case "login": {
      return <ButtonLogin {...props} />;
      break;
    }
    default: {
      console.log("Invalid choice");
      break;
    }
  }
};
