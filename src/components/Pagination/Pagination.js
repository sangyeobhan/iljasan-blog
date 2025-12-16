import Link from 'next/link';
import { generatePageNumbers } from '@/helpers/pagination-helpers';
import styles from './Pagination.module.css';

function Pagination({ currentPage, totalPages, baseUrl }) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = generatePageNumbers(currentPage, totalPages);

  return (
    <nav className={styles.pagination} aria-label="페이지네이션">
      {currentPage > 1 && (
        <Link href={`${baseUrl}?page=${currentPage - 1}`} className={styles.navButton}>
          ← 이전
        </Link>
      )}

      {pages.map((page, index) =>
        page === '...' ? (
          <span key={`ellipsis-${index}`} className={styles.ellipsis}>...</span>
        ) : (
          <Link
            key={page}
            href={page === 1 ? baseUrl : `${baseUrl}?page=${page}`}
            className={page === currentPage ? styles.currentPage : styles.pageLink}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </Link>
        )
      )}

      {currentPage < totalPages && (
        <Link href={`${baseUrl}?page=${currentPage + 1}`} className={styles.navButton}>
          다음 →
        </Link>
      )}
    </nav>
  );
}

export default Pagination;
