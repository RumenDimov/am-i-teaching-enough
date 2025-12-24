import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="flex items-start space-x-3">
        <div className="relative flex items-center justify-center flex-shrink-0">
          <input
            type="checkbox"
            ref={ref}
            id={checkboxId}
            className="peer sr-only"
            {...props}
          />
          <label
            htmlFor={checkboxId}
            className={cn(
              "flex h-7 w-7 sm:h-6 sm:w-6 cursor-pointer items-center justify-center rounded border-2 border-gray-300 bg-white transition-all",
              "peer-checked:border-primary peer-checked:bg-primary",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2",
              "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
              "active:scale-95",
              className
            )}
          >
            <Check
              className={cn(
                "h-4 w-4 sm:h-4 sm:w-4 text-white opacity-0 transition-opacity",
                "peer-checked:opacity-100"
              )}
            />
          </label>
        </div>
        {label && (
          <label
            htmlFor={checkboxId}
            className="cursor-pointer text-sm sm:text-sm font-medium leading-relaxed text-text-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
