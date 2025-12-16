'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

function Sidebar({ isOpen, onClose, tags }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            className={styles.sidebar}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            role="dialog"
            aria-label="태그 네비게이션"
          >
            <h2 className={styles.title}>태그 목록</h2>
            <nav className={styles.nav}>
              {tags.length === 0 ? (
                <p className={styles.emptyMessage}>태그가 없습니다</p>
              ) : (
                tags.map(tag => (
                  <Link
                    key={tag.name}
                    href={`/tags/${encodeURIComponent(tag.name)}`}
                    onClick={onClose}
                    className={styles.tagLink}
                  >
                    <span className={styles.tagName}>{tag.name}</span>
                    <span className={styles.tagCount}>({tag.count})</span>
                  </Link>
                ))
              )}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
