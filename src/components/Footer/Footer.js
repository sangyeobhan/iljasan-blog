import React from 'react';
import { Mail, GitHub } from 'react-feather';

import DecorativeSwoops from './DecorativeSwoops';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.wrapper}>
      <DecorativeSwoops />
      <div className={styles.content}>
        <div className={styles.links}>
          <a
            href="mailto:sangyeobhandev@gmail.com"
            className={styles.iconLink}
            aria-label="Email"
          >
            <Mail size="1.5rem" />
          </a>
          <a
            href="https://github.com/sangyeobhan"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="GitHub"
          >
            <GitHub size="1.5rem" />
          </a>
        </div>
        {/*
          NOTE: If you'd like to build your blog on top
          of this code, the license requires that you leave
          this paragraph untouched. Check out LICENSE.md
          for more information.
        */}
        <p className={styles.attribution}>
          Blog template created by{' '}
          <a href="https://www.joshwcomeau.com/">
            Josh W. Comeau
          </a>
          . Check out{' '}
          <a href="https://www.joyofreact.com/">
            The Joy of React
          </a>{' '}
          to learn how to build dynamic React apps like
          this one!
        </p>
      </div>
    </div>
  );
}

export default Footer;
