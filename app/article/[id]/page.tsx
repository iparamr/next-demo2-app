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
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
};

export const generateMetadata = async ({ params }: ArticlePageProps) => {
  const article = await fetchArticle(params.id);

  return {
    title: article.title,
    description: article.body,
  };
};

const ArticlePage: React.FC<ArticlePageProps> = async ({ params }) => {
  const article = await fetchArticle(params.id);

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  );
};

export default ArticlePage
