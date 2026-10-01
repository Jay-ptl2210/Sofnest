'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchModal from './SearchModal';
import NotifyModal from './NotifyModal';
import { ModalProvider, useModal } from '../context/ModalContext';

function ShellContent({ children }) {
  const { searchOpen, closeSearch, notifyCategory, closeNotify } = useModal();

  return (
    <div className="app-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />

      {searchOpen && <SearchModal onClose={closeSearch} />}
      {notifyCategory && <NotifyModal category={notifyCategory} onClose={closeNotify} />}
    </div>
  );
}

export default function AppShell({ children }) {
  return (
    <ModalProvider>
      <ShellContent>{children}</ShellContent>
    </ModalProvider>
  );
}
