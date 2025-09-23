import React, { useMemo } from 'react';
import Card from '../components/Card';
import { products } from "../utils/mockdata";
import { ProductsT } from '../types';
import Heading from '../components/Heading';

const Fruits: React.FC = () => {
  const fruits = useMemo(() => {
    return products.filter((product: ProductsT) => product.type === 'fruit');
  }, []);

  return (
    <div className="p-4">
      <Heading text={"Here you will find all the fruits we offer."} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5">
        {fruits.map((fruit: ProductsT) => (
          <Card
            key={fruit.id}
            title={fruit.name}
            price={fruit.price_per_kg}
            image={fruit.image}
            id={fruit.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Fruits;