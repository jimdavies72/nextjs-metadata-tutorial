import React from 'react';
import { notFound } from 'next/navigation';

const ReviewDetail = (
  {params,
  }: {
    params: {productid: string, reviewid: string}
  }) => {
  if (parseInt(params.reviewid) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>Review {params.reviewid} for Product {params.productid}</h1>
    </div>
  );
};

export default ReviewDetail;
