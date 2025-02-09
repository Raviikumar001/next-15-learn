
export  default async function ProdocutReview({params,}: {
    params: Promise<{productId: string, reviewId: string}>;
}) {
    const {productId, reviewId} = await params;
    return (
        <div>
            <h1>Product Review {productId} {reviewId}</h1>
        </div>
    );
}