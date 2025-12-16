import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import React from "react";

function normalizeSlug(slug) {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

export async function getBlogPostList() {
  const fileNames = await readDirectory('/content');

  const blogPosts = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(
        `/content/${fileName}`
    );

    const {data: frontmatter} = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace('.mdx', ''),
      ...frontmatter,
    });
  }

  return blogPosts.sort((p1, p2) =>
      p1.publishedOn < p2.publishedOn ? 1 : -1
  );
}

export const loadBlogPost = React.cache(
    async function loadBlogPost(slug) {
      const normalizedSlug = normalizeSlug(slug);
      const rawContent = await readFile(
          `/content/${normalizedSlug}.mdx`
      );

      const {data: frontmatter, content} =
          matter(rawContent);
      return {frontmatter, content};
    }
);

export async function getAllTags() {
  const posts = await getBlogPostList();
  const tagSet = new Set();

  posts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => tagSet.add(tag));
    }
  });

  return Array.from(tagSet).sort();
}

export async function getTagsWithCount() {
  const posts = await getBlogPostList();
  const tagMap = new Map();

  posts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
      });
    }
  });

  return Array.from(tagMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export async function getBlogPostsByTag(tag) {
  const posts = await getBlogPostList();
  return posts.filter(post =>
    post.tags &&
    Array.isArray(post.tags) &&
    post.tags.includes(tag)
  );
}

function readFile(localPath) {
  return fs.readFile(
      path.join(process.cwd(), localPath),
      'utf8'
  );
}

function readDirectory(localPath) {
  return fs.readdir(
      path.join(process.cwd(), localPath)
  );
}
