import type { ComponentProps } from "react";
import type { ButtonVariants } from "./Button.style";

import { buttonIconStyle, buttonStyle } from "./Button.style";
import { cn } from "~/lib/utils";

export interface ButtonProps extends ButtonVariants, ComponentProps<'button'> {
  /** Set the icon component of button */
  icon?: JSX.Element;
}

export function Button({
  variant = "primary",
  size = "default",
  uppercase,
  block,
  icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        buttonStyle({
          variant,
          size,
          uppercase,
          block,
        }),
        props.className,
      )}
    >
      {(icon) && (
        <span
          className={cn(
            typeof children !== 'undefined' ? "-ml-1 mr-2" : undefined,
            buttonIconStyle({
              size,
            }),
          )}
        >
          {icon}
        </span>
      )}
      <span>{children}</span>
    </button>
  )
}