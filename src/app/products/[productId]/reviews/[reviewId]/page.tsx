import { notFound, redirect } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProdocutReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const random = getRandomInt(2);
  const { productId, reviewId } = await params;

  if (random === 1) {
    throw new Error("Error loading review");
  }

  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/products");
  }

  return (
    <div>
      <h1>
        Product Review {productId} {reviewId}
      </h1>
    </div>
  );
}
