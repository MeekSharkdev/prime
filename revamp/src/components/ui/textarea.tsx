import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full min-h-16 rounded-md border border-PRIMElightgray bg-PRIMEwhite px-4 py-2 text-subcontent text-PRIMEgray placeholder:text-PRIMEgray/70 shadow-xs transition-all outline-none focus-visible:ring-2 focus-visible:ring-PRIMEblue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };