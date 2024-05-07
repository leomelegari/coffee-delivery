import { forwardRef, ForwardedRef, ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Mask = "CEP" | "MONEY" | undefined;

interface InputProps
  extends Omit<ComponentProps<"input">, "value" | "onChange"> {
  handleBlur?: () => void;
  mask?: Mask;
  children?: ReactNode;
}

export const Input = forwardRef(
  (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { handleBlur, mask, className, children, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div
        className={twMerge(
          "rounded-md bg-input ",
          "ring-1 ring-button focus-within:ring-1 focus-within:ring-purple-normal",
          className,
        )}
      >
        <input
          {...props}
          ref={ref}
          onBlur={handleBlur}
          // value={applyMask(props)}
          className={twMerge(
            "w-full bg-transparent p-3 text-sm text-text  outline-none placeholder:text-label",
            className,
          )}
        />
        {children}
      </div>
    );
  },
);
