import gold from "../assets/gold.webp";
import silver from "../assets/silver.webp";
import bronze from "../assets/bronze.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: bronze, alt: "meh" },
    4: { src: silver, alt: "recommended" },
    5: { src: gold, alt: "exceptional" },
  };

  return <Image {...emojiMap[rating]} boxSize="25px" objectFit="cover" />;
};

export default Emoji;
