import ArticleList from "./components/ArticleList";
import { server } from "./config";
import { Article } from "./types/Article";

const fetchArticles = async (): Promise<Article[]> => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=6`);
  const res = await fetch(`${server}/api/articles`);
  return res.json();
};

// Generate Static Site - SSG
// export const generateStaticParams = async () => {
//   const articles = await fetchArticles();
//   return articles.map(article => ({
//     id: article.id.toString(),
//   }));
// };

const Home = async () => {
  const articles: Article[] = await fetchArticles();

  return (
    <main>
      <p className="center">{ new Date().toLocaleTimeString() }</p>
      <ArticleList articles={articles} />
    </main>
  );
};

export default Home;
