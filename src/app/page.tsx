import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2> hi! Welcome</h2>
      <Link href="/blog">Blog</Link>
      <Link href="/products">products </Link>
    </>
  );
}
