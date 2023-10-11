import Button from "./Button";

export const DefaultTemplate = (args) => {
  const { ...props } = args;

  return <Button {...props}>Button Example</Button>;
};
