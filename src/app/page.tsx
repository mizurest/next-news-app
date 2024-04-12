"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";

import NewsCard from "@/components/NewsCard";

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

  const today = new Date();
  const dayname = ["日", "月", "火", "水", "木", "金", "土"];

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
      <header className="h-20 w-full flex flex-col items-center justify-center bg-sky-700">
        <h1 className="text-xl font-bold text-white">今日のニュース</h1>
        <p className="text-xs text-neutral-200 mt-1">
          {today.getFullYear()}年{today.getMonth() + 1}月{today.getDate()}日 {dayname[today.getDay()]}曜日
        </p>
      </header>

      <main className="flex gap-1.5 min-h-screen flex-col py-3 px-3 xl:px-96 text-sm sm:text-base bg-neutral-100">
        {article.map((item: Item, i) => {
          
          return <NewsCard key={i} title={item.title} source={item.source.name} image={item.image} url={item.url} />;
        })}
      </main>
    </>
  );
}
