"use client";

import { useEffect, useState } from "react";

import NewsCard from "@/components/NewsCard";
import Header from "@/components/Header";
import SkeletonCard from "@/components/SkeletonCard";

type Item = {
  title: string;
  image: string;
  url: string;
  source: {
    name: string;
  };
};

export default function Home() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoding] = useState(true);

  const skeletonAmount = new Array(10).fill("");

  const getNews = async () => {
    const res = await fetch(`/api/news`);
    const data = await res.json();
    setArticle(data.news.articles);
    setIsLoding(false);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <Header />

      <main className="flex gap-1.5 min-h-screen flex-col py-3 px-3 xl:px-96 text-sm sm:text-base bg-neutral-100">
        {article.map((item: Item, i) => {
          return <NewsCard key={i} title={item.title} source={item.source.name} image={item.image} url={item.url} />;
        })}

        {isLoading
          ? skeletonAmount.map((item, i) => {
              return <SkeletonCard key={i} />;
            })
          : ""}
      </main>
    </>
  );
}
