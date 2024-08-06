import { server } from "@/app/config";
import { Article } from "@/app/types/Article";
import type { Metadata } from "next";
import Link from "next/link";
import React from 'react'

interface ArticlePageProps {
  params: {
    id: string;
  };
}

const fetchArticle = async (id: string): Promise<Article> => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const res = await fetch(`${server}/api/articles/${id}`);
  return res.json();
};

export const generateMetadata = async ({ params }: ArticlePageProps): Promise<Metadata> => {
  const article = await fetchArticle(params.id);

  return {
    title: article.title,
    description: article.body,
  };
};

// Generate Static Site - SSG
// export const generateStaticParams = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const articles: Article[] = await res.json();

//   return articles.map(article => ({
//     id: article.id.toString(),
//   }));
// };

const ArticlePage: React.FC<ArticlePageProps> = async ({ params }) => {
  const article = await fetchArticle(params.id);

  return (
    <>
      <p>{ new Date().toLocaleTimeString() }</p>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  );
};

export default ArticlePage
