import { useState, type PropsWithChildren } from "react";

import type { ITaskVariant } from "../types/task.type";

import { SidebarContext } from "../context/sidebarContext";

export const SidebarContextProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedVariant, setSelectedVariant] =
    useState<ITaskVariant>("default");

  const handleIsOpen = (isOpen: boolean, variant?: ITaskVariant) => {
    if (variant) setSelectedVariant(variant);

    setIsOpen(isOpen);
  };

  return (
    <SidebarContext
      value={{
        isOpen,
        selectedVariant,
        close: () => handleIsOpen(false),
        open: (variant: ITaskVariant) => handleIsOpen(true, variant),
        toggle: (variant: ITaskVariant) => handleIsOpen(!isOpen, variant),
      }}
    >
      {children}
    </SidebarContext>
  );
};
