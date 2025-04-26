import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2> hi! Welcome</h2>
      <Link href="/blog">Blog</Link>
      <Link href="/products">products </Link>
      <Link href="/article/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/article/breaking-news-123?lang=fr">Read in French</Link>
    </>
  );
}
