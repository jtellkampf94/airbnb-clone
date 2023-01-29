import Image from "next/image";

interface SmallCardProps {
  img: string;
  location: string;
  distance: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ img, location, distance }) => {
  return (
    <div className="">
      <div className="relative h-16 w-16">
        <Image src={img} alt={location} layout="fill" className="rounded-lg" />
      </div>
    </div>
  );
};

export default SmallCard;
