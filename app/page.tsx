import ArticleList from "./components/ArticleList";
import { server } from "./config";
import { Article } from "./types/Article";

const Home = async () => {
  // const res = await fetch(`${server}/api/articles`);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=6`);
  const articles: Article[] = await res.json();

  return (
    <main>
      <ArticleList articles={articles} />
    </main>
  );
};

export default Home;
