"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";

import NewsCard from "@/components/NewsCard";
import Header from "@/components/Header";

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
  const [isLoading, setIsLoding] = useState(false)

  console.log(isLoading)

  const getNews = async () => {
    const res = await fetch(`/api/news`);
    const data = await res.json();
    setArticle(data.news.articles);
    setIsLoding(true)
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    // console.log(article.length);
  }, [article]);

  return (
    <>
      <Header />

      <main className="flex gap-1.5 min-h-screen flex-col py-3 px-3 xl:px-96 text-sm sm:text-base bg-neutral-100">
        {article.map((item: Item, i) => {
          return <NewsCard key={i} title={item.title} source={item.source.name} image={item.image} url={item.url} />;
        })}
      </main>
    </>
  );
}
