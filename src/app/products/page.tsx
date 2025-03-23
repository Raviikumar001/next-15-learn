import Link from "next/link";

export default function Products() {
  return (
    <div>
      <Link href="/"> Home</Link>
      <h1>Products</h1>``
      <h2>
        <Link href="products/1"> Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2"> Product 2</Link>
      </h2>
    </div>
  );
}
