export interface HeadingProps {
  text: string;
  className?: string;
}

const Heading = ({ text, className = '' }: HeadingProps) => {
  return (
    <h1 className={`text-3xl font-bold mb-5 dark:text-white ${className}`}>{text}</h1>
  );
};

export default Heading;


