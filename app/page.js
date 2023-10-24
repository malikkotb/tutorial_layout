import FilterSearch from "../components/FilterSearch";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  return <main className="px-5 mt-[40px]">
    <FilterSearch />
    <h1 className="text-3xl font-bold mt-[60px] mb-5">All Blogs</h1>    
    <div className="flex flex-row flex-wrap gap-6 mt-3">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />

    </div>
  </main>;
}
