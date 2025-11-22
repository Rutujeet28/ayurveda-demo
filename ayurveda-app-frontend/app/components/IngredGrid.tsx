import IngredCard from "./IngredCard";

interface Product {
  name: string;
  image: string;
  category: string;
  use: string;
  feature: string;
  description: string;
  iupacName: string;
  commonName: string;
  href?: string;
}

interface IngredGridProps {
  products: Product[];
}

export default function IngredGrid({ products }: IngredGridProps) {
  return (
    <div className="grid grid-cols-4 gap-8 mt-4">
      {products.map((item, index) => (
        <IngredCard
          key={index}
          name={item.name}
          image={item.image}
          category={item.category}
          use={item.use}
          feature={item.feature}
          description={item.description}
          iupacName={item.iupacName}
          commonName={item.commonName}
          href={item.href}
        />
      ))}
    </div>
  );
}
