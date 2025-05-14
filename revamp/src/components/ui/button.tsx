import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-subcontent font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-PRIMEblue focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-PRIMEblue text-PRIMEwhite shadow-xs hover:bg-[#002855]",
        destructive:
          "bg-PRIMEred text-PRIMEwhite shadow-xs hover:bg-[#a30000] focus-visible:ring-PRIMEred",
        outline:
          "border border-PRIMElightgray bg-PRIMEwhite text-PRIMEblue shadow-xs hover:bg-gray-100",
        secondary:
          "bg-PRIMEgray text-PRIMEwhite shadow-xs hover:bg-[#5a5f61]",
        ghost:
          "bg-transparent text-PRIMEblue hover:bg-blue-50 dark:hover:bg-blue-100",
        link: "text-PRIMEblue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 text-subcontent",
        sm: "h-8 rounded-md gap-1.5 px-3 text-subcontent",
        lg: "h-10 rounded-md px-6 text-content",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };