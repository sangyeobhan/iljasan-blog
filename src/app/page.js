import React from 'react';

import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';
import {getBlogPostList} from "@/helpers/file-helpers";

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
      <div className={styles.wrapper}>
        <h1 className={styles.mainHeading}>
          최신 글 목
        </h1>

        {blogPosts.map(({slug, ...delegated}) => (
            <BlogSummaryCard
                key={slug}
                slug={slug}
                {...delegated}
            />
        ))}
      </div>
  );
}

export default Home;
