import { styled } from "@mui/material";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
export interface ButtonCustomProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "success" | "error";
}

const ButtonSuccess = styled("button", {
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root],
})<ButtonCustomProps>(() => ({
  border: "1px solid green",
  background: "#ABEBC6",
  padding: "10px",
  color: "green",
  borderRadius: "5px",
}));
const ButtonError = styled("button", {
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root],
})<ButtonCustomProps>(() => ({
  border: "1px solid #78281F",
  background: "#F1948A",
  padding: "10px",
  color: "#78281F",
  borderRadius: "5px",
}));

export default (props: ButtonCustomProps) => {
  return props.variant === "success" ? (
    <ButtonSuccess {...props} />
  ) : (
    <ButtonError {...props} />
  );
};
