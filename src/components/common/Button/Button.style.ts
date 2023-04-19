import { cva, type VariantProps } from "cva";

export const buttonStyle = cva(
  "group flex h-min items-center justify-center text-center font-medium shadow-sm transition ease-in-out",
  {
    variants: {
      variant: {
        primary:
          "border border-transparent text-white bg-teal-600 hover:bg-teal-700",
        default:
          "border border-slate-600 bg-slate-800 text-white hover:bg-slate-700",
        white:
          "focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-gray-100 focus-visible:outline-white",
      },
      size: {
        small: "px-3 py-1.5 text-sm",
        default: "px-4 py-2.5 text-base",
        large: "px-6 py-3 text-lg",
      },
      shape: {
        default: "rounded-md",
        rounded: "rounded-full",
      },
      uppercase: {
        true: "uppercase tracking-wider",
        false: null,
      },
      block: {
        true: "w-full",
        false: null,
      },
    },
    defaultVariants: {
      variant: "primary",
      shape: "default",
      size: "default",
      block: false,
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonStyle>;

export const buttonIconStyle = cva("", {
  variants: {
    size: {
      small: "w-3.5 h-3.5",
      default: "w-4 h-4",
      large: "w-6 h-6",
    },
  },
  defaultVariants: {
    size: "default",
  },
});
