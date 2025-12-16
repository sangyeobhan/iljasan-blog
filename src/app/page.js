import React from 'react';
import Link from 'next/link';

import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';
import {getBlogPostList} from "@/helpers/file-helpers";

async function Home() {
  const allPosts = await getBlogPostList();
  const recentPosts = allPosts.slice(0, 5);

  return (
      <div className={styles.wrapper}>
        <h1 className={styles.mainHeading}>
          최신 글 목록
        </h1>

        {recentPosts.map(({slug, ...delegated}) => (
            <BlogSummaryCard
                key={slug}
                slug={slug}
                {...delegated}
            />
        ))}

        {allPosts.length > 5 && (
          <div className={styles.viewAllContainer}>
            <Link href="/posts" className={styles.viewAllLink}>
              전체 글 보기 →
            </Link>
          </div>
        )}
      </div>
  );
}

export default Home;
