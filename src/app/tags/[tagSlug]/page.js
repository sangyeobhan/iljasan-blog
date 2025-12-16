import { getBlogPostsByTag } from '@/helpers/file-helpers';
import { getPaginatedPosts } from '@/helpers/pagination-helpers';
import BlogSummaryCard from '@/components/BlogSummaryCard';
import Pagination from '@/components/Pagination';
import styles from '../../homepage.module.css';
import { BLOG_TITLE } from '@/constants';

export async function generateMetadata({ params }) {
  const { tagSlug } = await params;
  const tag = decodeURIComponent(tagSlug);

  return {
    title: `태그: ${tag} - ${BLOG_TITLE}`,
    description: `${tag} 태그가 달린 게시물 목록`
  };
}

async function TagPage({ params, searchParams }) {
  const { tagSlug } = await params;
  const { page: pageParam } = await searchParams;

  const tag = decodeURIComponent(tagSlug);
  const page = Number(pageParam) || 1;

  const allPosts = await getBlogPostsByTag(tag);
  const { posts, totalPages, currentPage } = getPaginatedPosts(allPosts, page);

  if (allPosts.length === 0) {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.mainHeading}>태그: {tag}</h1>
        <p>이 태그에 해당하는 게시물이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>태그: {tag}</h1>
      <p style={{ marginBottom: '2rem', color: 'var(--color-text)', opacity: 0.7 }}>
        {allPosts.length}개의 게시물
      </p>

      {posts.map(({ slug, ...delegated }) => (
        <BlogSummaryCard key={slug} slug={slug} {...delegated} />
      ))}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          baseUrl={`/tags/${tagSlug}`}
        />
      )}
    </div>
  );
}

export default TagPage;
