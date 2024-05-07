import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        "flex items-center justify-center gap-1 rounded-md p-2",
        className,
      )}
    >
      {children}
    </button>
  );
};
