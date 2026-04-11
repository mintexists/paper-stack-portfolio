// place files you want to import through the `$lib` alias in this folder.

import clsx, { type ClassValue } from "clsx";
import { createContext } from "svelte";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const [getContainerContext, setContainerContext] = createContext<
  () => HTMLElement
>();
