import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, ...props}: PropsWithChildren<ButtonProps>) => {
  return <button type="button" {...props}>{children}</button>
}
export default Button