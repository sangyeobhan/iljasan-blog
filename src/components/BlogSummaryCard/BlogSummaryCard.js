import React from 'react';
import Link from 'next/link';

import styles from './BlogSummaryCard.module.css';

function BlogSummaryCard({
  slug,
  title,
  publishedOn,
  abstract,
}) {
  const href = `/${slug}`;
  const date = new Date(publishedOn);
  const humanizedDate = `작성일: ${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

  return (
    <div className={styles.wrapper}>
      <Link href={href} className={styles.title}>
        {title}
      </Link>
      <time dateTime={publishedOn}>{humanizedDate}</time>
    </div>
  );
}

export default BlogSummaryCard;
