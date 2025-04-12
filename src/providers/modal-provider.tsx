"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { set } from "zod";

interface ModalProviderProps {
  children: React.ReactNode;
}
/**
 * ModalProvider context provides a mechanism to manage modal state throughout the application.
 * It allows components to open modals and fetch data when needed.
 *
 * @component
 * @example
 * // To use this context in a component:
 * const { setOpen } = useModal();
 * setOpen(<YourModalComponent />, fetchDataFunction);
 */
export type ModalData = {};

type ModalContextType = {
  data: ModalData;
  isOpen: boolean;
  setOpen: (modal: React.ReactNode, fectchdata?: () => Promise<any>) => void;
  setClose: () => void;
};

/**
 * ModalContext is a React Context that provides modal state and operations.
 * This context enables components to open, close, and interact with modals.
 *
 * @property {ModalData} data - Data associated with the current modal
 * @property {boolean} isOpen - Whether the modal is currently open
 * @property {Function} setOpen - Opens a modal with optional data fetching
 * @property {Function} setClose - Closes the currently open modal
 */
export const ModelContext = createContext<ModalContextType>({
  data: {},
  isOpen: false,
  setOpen: (modal: React.ReactNode, fectchdata?: () => Promise<any>) => {},
  setClose: () => {},
});

/**
 * Custom hook for accessing the Modal context.
 * This hook provides access to modal operations like opening and closing.
 *
 * @returns {ModalContextType} Modal context with data and methods
 * @throws {Error} If used outside of a ModalProvider
 *
 * @example
 * // In a component:
 * const { setOpen, setClose } = useModal();
 * // Open a modal
 * setOpen(<MyModal />, fetchMyData);
 */

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<ModalData>({});
  const [showingModal, setShowingModal] = useState<React.ReactNode>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const setOpen = async (
    modal: React.ReactNode,
    fetchData?: () => Promise<any>
  ) => {
    if (modal) {
      if (fetchData) {
        const fetchedData = await fetchData();
        setData({ ...data, ...(fetchedData || {}) });
      }
      setShowingModal(modal);
      setIsOpen(true);
    }
  };

  const setClose = () => {
    setIsOpen(false);
    setData({});
  };
  if (!isMounted) return null;

  return (
    <ModelContext.Provider value={{ data, isOpen, setOpen, setClose }}>
      {children}
      {showingModal}
    </ModelContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModelContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export default ModalProvider;
