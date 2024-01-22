import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utils";

const labelVariants = cva("text-sm font-medium block mb-1 text-sm");

const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<"label"> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <label ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = "Label";

export { Label };
