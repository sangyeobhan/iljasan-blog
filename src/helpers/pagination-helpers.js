const POSTS_PER_PAGE = 10;

export function getPaginatedPosts(posts, page = 1) {
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;

  return {
    posts: posts.slice(startIndex, endIndex),
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    currentPage: page,
    totalPosts: posts.length
  };
}

export function generatePageNumbers(currentPage, totalPages) {
  const pages = [];
  const delta = 2;

  pages.push(1);

  for (let i = Math.max(2, currentPage - delta);
       i <= Math.min(totalPages - 1, currentPage + delta);
       i++) {
    if (pages[pages.length - 1] !== i - 1) {
      pages.push('...');
    }
    pages.push(i);
  }

  if (totalPages > 1) {
    if (pages[pages.length - 1] !== totalPages - 1) {
      pages.push('...');
    }
    pages.push(totalPages);
  }

  return pages;
}
