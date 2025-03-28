import { notFound } from "next/navigation";


export  default async function ProdocutReview({params,}: {
    params: Promise<{productId: string, reviewId: string}>;
}) {
    const {productId, reviewId} = await params;

    if(parseInt(reviewId) > 1000) {
        notFound();
    }

    return (
        <div>
            <h1>Product Review {productId} {reviewId}</h1>
        </div>
    );
}