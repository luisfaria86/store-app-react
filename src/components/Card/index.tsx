import { Link } from "react-router-dom";

export interface CardProps {
  title: string;
  price: string;
  image: string;
  id: string
  origin?: string;
}

const Card = ({ title, price, image, origin, id }: CardProps) => {
  return (
    <Link to={`/product/${id}`}>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={image} alt='product-img' width="300" height={200} />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{price} €/kg</p>
                <span className="text-sm font-light">{origin}</span>
            </div>
        </div>
    </Link>

    );
};

export default Card;