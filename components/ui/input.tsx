import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftAddon?: React.ReactElement;
  rightAddon?: React.ReactElement;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftAddon, rightAddon, error, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-11 w-full items-center rounded-md border-2 bg-card px-3 text-sm shadow-sm outline-none transition-colors placeholder:text-muted-foreground invalid:text-destructive disabled:cursor-not-allowed has-[:disabled]:cursor-not-allowed has-[:disabled]:bg-secondary/50 group-aria-[invalid=true]:border-destructive",
          error && "border-destructive",
          className,
        )}
      >
        {leftAddon && <div className="border-r-2 pr-2">{leftAddon}</div>}
        <input
          className={cn(
            "h-full w-full bg-transparent text-lg outline-none disabled:cursor-not-allowed disabled:opacity-90",
            leftAddon && "ml-3",
          )}
          type={type}
          ref={ref}
          {...props}
        />
        {rightAddon && <div className="pl-2">{rightAddon}</div>}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
