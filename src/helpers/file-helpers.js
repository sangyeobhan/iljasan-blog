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
