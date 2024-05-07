import {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ButtonHTMLAttributes,
} from "react";
import { twMerge } from "tailwind-merge";

type PaymentMethods = "Crédito" | "Débito" | "Dinheiro";

interface PaymentMethodButtonProps
  extends PropsWithoutRef<ButtonHTMLAttributes<HTMLButtonElement>> {
  icon: JSX.Element;
  title: PaymentMethods;
  setPaymentSelected: (title: string) => void;
  paymentSelected: string;
}

const PaymentMethodButton: ForwardRefExoticComponent<PaymentMethodButtonProps> =
  forwardRef(
    (
      {
        icon: Icon,
        title,
        setPaymentSelected,
        paymentSelected,
        className,
        ...props
      },
      ref,
    ) => {
      return (
        <button
          className={twMerge(
            "flex flex-1 items-center justify-center gap-3 rounded-md bg-button p-4 text-xs font-semibold text-text transition ease-in-out hover:bg-hover",
            paymentSelected === title &&
              "bg-purple-light ring-1 ring-purple-normal transition ease-in-out hover:bg-purple-200",
            className,
          )}
          {...props}
          type="button"
          ref={ref as React.Ref<HTMLButtonElement>} // Assert ref to be HTMLButtonElement
          onClick={() => setPaymentSelected(title)}
        >
          {Icon}
          <span>{title.toUpperCase()}</span>
        </button>
      );
    },
  );

export default PaymentMethodButton;
