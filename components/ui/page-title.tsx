import React from "react";
import { cn } from "@/lib/utils";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const PageTitle = React.forwardRef<HTMLParagraphElement, TitleProps>(
  ({ className, as, ...props }, ref) => {
    const Component = as ?? "h1";

    return (
      <>
        <Component
          ref={ref}
          className={cn("my-6 text-3xl font-bold", className)}
          {...props}
        />
      </>
    );
  },
);
PageTitle.displayName = "PageTitle";

export { PageTitle };
