import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(function () {
      resolve(`Iphone ${title}`);
    });
  });

  return {
    title: `Product ${id}`,
  };
};

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;

  return (
    <div>
      <h1> details about the Products {productId}</h1>
    </div>
  );
}
