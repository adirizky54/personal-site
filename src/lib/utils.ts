import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple class values into one.
 *
 * @param inputs - a list of class values.
 * @returns a single class value.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
