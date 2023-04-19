import type { ComponentProps } from "react";
import { cn } from "~/lib/utils";

export interface BadgeProps extends ComponentProps<'span'> { }

export function Badge({
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={cn(
        "bg-slate-700 text-gray-300 text-xs font-medium px-2 py-1 rounded",
        className,
      )}
    >
      {children}
    </span>
  )
}