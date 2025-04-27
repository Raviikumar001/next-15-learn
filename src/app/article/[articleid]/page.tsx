"use client";
import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleid: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleid } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <div>
      <h1>News article {articleid}</h1>
      <p>Reading in {lang}</p>

      <div>
        <Link href={`/article/${articleid}?lang=${lang}`}>English</Link>
        <Link href={`/article/${articleid}?lang=en`}>French</Link>
        <Link href={`/article/${articleid}?lang=en`}>Spanish</Link>
      </div>
    </div>
  );
}
