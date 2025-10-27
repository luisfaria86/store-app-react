import React, { useMemo } from 'react';
import Card from '../components/Card';
import { products } from "../utils/mockdata";
import { ProductsT } from '../types';
import Heading from '../components/Heading';

const Vegetables: React.FC = () => {
  const vegetables = useMemo(() => {
    return products.filter((product: ProductsT) => product.type === 'vegetable');
  }, []);

  return (
    <div className="p-4">
      <Heading text={"Here you will find all the vegetables we offer."} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5">
        {vegetables.map((vegetable: ProductsT) => (
          <Card
            key={vegetable.id}
            title={vegetable.name}
            price={vegetable.price_per_kg}
            image={vegetable.image}
            id={vegetable.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Vegetables;