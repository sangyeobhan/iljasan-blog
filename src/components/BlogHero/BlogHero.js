import React from 'react';
import clsx from 'clsx';

import styles from './BlogHero.module.css';

function BlogHero({
  title,
  publishedOn,
  className,
  ...delegated
}) {
  const date = new Date(publishedOn);
  const humanizedDate = `작성일: ${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>
          <time dateTime={publishedOn}>
            {humanizedDate}
          </time>
        </p>
      </div>
    </header>
  );
}

export default BlogHero;
