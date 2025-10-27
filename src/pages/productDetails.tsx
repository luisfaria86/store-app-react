import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../utils/mockdata';
import { ProductsT } from '../types';

const ProductDetails: React.FC = () => {
   const { id } = useParams<{ id: string }>();

   const product = useMemo(() => {
     if (!id) return undefined;
     return products.find((p: ProductsT) => p.id === id);
   }, [id]);

  if (!product) {
    return <p>Product not found!</p>;
  }
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <p className="text-lg">Price: €{product.price_per_kg} per kg</p>
      <p className="text-lg">Origin: {product.origin}</p>
      <p className="text-sm">Description: {product.origin}</p>
    </div>
  );
};

export default ProductDetails;