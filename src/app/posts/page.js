import { getBlogPostList } from '@/helpers/file-helpers';
import { getPaginatedPosts } from '@/helpers/pagination-helpers';
import BlogSummaryCard from '@/components/BlogSummaryCard';
import Pagination from '@/components/Pagination';
import styles from '../homepage.module.css';
import { BLOG_TITLE } from '@/constants';

export const metadata = {
  title: `전체 글 - ${BLOG_TITLE}`,
  description: '모든 블로그 게시물 목록'
};

async function PostsPage({ searchParams }) {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  const allPosts = await getBlogPostList();
  const { posts, totalPages, currentPage } = getPaginatedPosts(allPosts, page);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>전체 글 ({allPosts.length})</h1>

      {posts.map(({ slug, ...delegated }) => (
        <BlogSummaryCard key={slug} slug={slug} {...delegated} />
      ))}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          baseUrl="/posts"
        />
      )}
    </div>
  );
}

export default PostsPage;
