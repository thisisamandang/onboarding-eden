import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none w-full",
  {
    variants: {
      variant: {
        default: "bg-[#664DE5] text-white",
      },
      size: {
        default: "h-9 px-4 py-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = ({ className, variant, size, children, ...props }) => {
  const buttonRef = React.createRef<HTMLButtonElement>();
  const Comp = "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={buttonRef}
      {...props}
    >
      {children}
    </Comp>
  );
};

Button.displayName = "Button";

export { Button };
