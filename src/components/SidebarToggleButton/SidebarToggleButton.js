'use client';

import styles from './SidebarToggleButton.module.css';

function SidebarToggleButton({ isOpen, onClick }) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      aria-label={isOpen ? '사이드바 닫기' : '사이드바 열기'}
      aria-expanded={isOpen}
    >
      {isOpen ? '✕' : '☰'}
    </button>
  );
}

export default SidebarToggleButton;
