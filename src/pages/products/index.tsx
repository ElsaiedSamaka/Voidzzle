import React from 'react';
import { RootLayout } from 'shared';

const Products = () => {
  return <div>Products</div>;
};
Products.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
export default Products;
