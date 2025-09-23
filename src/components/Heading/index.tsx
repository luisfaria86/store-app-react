export interface HeadingProps {
  text: string
};

// Extended Heading to other type of sizes

const Heading = ({ text }: HeadingProps) => {
  return (
    <h1 className="text-3xl font-bold mb-5">{text}</h1>
  );
};

export default Heading;


