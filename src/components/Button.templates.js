import Button from "./Button";

export const DefaultTemplate = (args, context) => {
  const { theme, ...props } = args;

  return <Button {...props} />;
};
