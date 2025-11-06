import { createContext } from "react";

import type { ITaskVariant } from "../types/task.type";

export interface SidebarContextState {
  isOpen: boolean;
  selectedVariant: ITaskVariant;
  close: () => void;
  open: (variant: ITaskVariant) => void;
  toggle: (variant: ITaskVariant) => void;
}

export const SidebarContext = createContext<SidebarContextState>(
  {} as SidebarContextState,
);
