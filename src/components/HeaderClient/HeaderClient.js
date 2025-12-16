'use client';

import { useState } from 'react';
import Logo from '@/components/Logo';
import SidebarToggleButton from '@/components/SidebarToggleButton';
import Sidebar from '@/components/Sidebar';
import styles from '../Header/Header.module.css';

function HeaderClient({ tags }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className={styles.wrapper}>
        <SidebarToggleButton
          isOpen={isSidebarOpen}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <Logo />
      </header>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        tags={tags}
      />
    </>
  );
}

export default HeaderClient;
