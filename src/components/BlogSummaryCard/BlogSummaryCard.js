import React from 'react';
import Link from 'next/link';

import styles from './BlogSummaryCard.module.css';

function BlogSummaryCard({
  slug,
  title,
  publishedOn,
  abstract,
  tags,
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

      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map(tag => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}`}
              className={styles.tag}
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogSummaryCard;
