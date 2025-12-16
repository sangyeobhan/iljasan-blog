import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {BLOG_TITLE} from '@/constants';

import styles from './Logo.module.css';

function Logo({mobileAlignment = 'left'}) {
  return (
      <Link
          href="/"
          className={styles.wrapper}
          data-mobile-alignment={mobileAlignment}
      >
        <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className={styles.logoImage}
            priority
        />
        <span className={styles.logoText}>{BLOG_TITLE}</span>
        <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className={styles.logoImage}
        />
      </Link>
  );
}

export default Logo;
