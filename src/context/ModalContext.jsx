'use client';

import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext({
  searchOpen: false,
  openSearch: () => {},
  closeSearch: () => {},
  notifyCategory: null,
  openNotify: () => {},
  closeNotify: () => {},
});

export function ModalProvider({ children }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifyCategory, setNotifyCategory] = useState(null);

  const openSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);
  const openNotify = (category = 'Product') => setNotifyCategory(category);
  const closeNotify = () => setNotifyCategory(null);

  return (
    <ModalContext.Provider
      value={{
        searchOpen,
        openSearch,
        closeSearch,
        notifyCategory,
        openNotify,
        closeNotify,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    return {
      searchOpen: false,
      openSearch: () => {},
      closeSearch: () => {},
      notifyCategory: null,
      openNotify: () => {},
      closeNotify: () => {},
    };
  }
  return context;
}
