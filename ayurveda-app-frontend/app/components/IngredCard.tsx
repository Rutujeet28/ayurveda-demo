import Link from "next/link";

interface IngredCardProps {
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

export default function IngredCard({
  name,
  image,
  category,
  use,
  feature,
  description,
  iupacName,
  commonName,
  href,
}: IngredCardProps) {
  const cardContent = (
    <div className="group perspective-1000 w-full h-72 cursor-pointer">
      <div className="
        relative h-full w-full transition-all duration-700 
        [transform-style:preserve-3d] 
        group-hover:[transform:rotateY(180deg)]
      ">
      {/* FRONT SIDE */}
        <div className="
          absolute inset-0
          border border-gray-200 rounded-xl p-6 
          shadow-lg shadow-gray-300
          flex flex-col items-center justify-center
          [backface-visibility:hidden]
          bg-gradient-to-r from-[#E6F4FF] via-[#CCFFFF] to-[#E6F4FF]
          animate-gradient-x
        ">
          <img src={image} className="w-32 h-32 mb-4 object-contain" />
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600 mt-2">
            <span className="font-semibold">Scientific:</span> {iupacName}
          </p>
        </div>



        {/* BACK SIDE */}
        <div className="
          absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-100
          rounded-xl p-6 
          shadow-lg shadow-gray-200
          [transform:rotateY(180deg)]
          [backface-visibility:hidden]
          flex flex-col justify-center
        ">
          <p className="text-gray-800"><b>Category:</b> {category}</p>
          <p className="text-gray-800"><b>Use:</b> {use}</p>
          <p className="text-gray-800"><b>Feature:</b> {feature}</p>
          <p className="text-sm text-gray-700 mt-3">{description}</p>
        </div>
      </div>
    </div>
  );

  return href ? <Link href={href}>{cardContent}</Link> : cardContent;
}
