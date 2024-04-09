import React from 'react'
import ProductsCard from './ProductsCard'

const ProductsList = ( {data} ) => {
  console.log(data);
  return (
  <>
  {
    data?.map((item, index) => (
      <ProductsCard item={item} key={index}/>
    ))
  }
  </>
  );
};

export default ProductsList