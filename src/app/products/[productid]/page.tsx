import { Metadata } from "next";

type Props = {
  params: {
    productid: string;
  };
};

interface Title {
  title: string;
};

const getData = async () => {
  const todoId = Math.floor(Math.random() * (200 - 1 + 1)) + 1;

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
    cache: "no-store",
  });

  const data: Title = await res.json();
  return data.title;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  
  return {
    title: `${await getData()} - ${params.productid}`
  };
};
 const ProductDetails = ({ params }: Props) => {
  return (
    <h1>Details for product {params.productid}</h1>
  )
}

export default ProductDetails;

