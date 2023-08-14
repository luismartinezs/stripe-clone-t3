import Image from "next/image";
import { SectionWrapper } from "~/components/SectionWrapper";

type TImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const images: TImageProps[] = [
  {
    src: "/images/Deliveroo-Logo.png",
    alt: "Deliveroo logo",
    width: 150,
    height: 40,
  },
  {
    src: "/images/Booking.Com-logo.png",
    alt: "Deliveroo logo",
    width: 170,
    height: 40,
  },
  {
    src: "/images/La-redoute-brand-logo.png",
    alt: "Deliveroo logo",
    width: 60,
    height: 40,
  },
  {
    src: "/images/opentable-vector-logo.png",
    alt: "Deliveroo logo",
    width: 170,
    height: 40,
  },
  {
    src: "/images/1200px-ManoMano_2018.png",
    alt: "Deliveroo logo",
    width: 180,
    height: 40,
  },
  {
    src: "/images/ASOS_(retailer)-Logo.wine.png",
    alt: "Deliveroo logo",
    width: 100,
    height: 40,
  },
  {
    src: "/images/Catawiki_logo_new.png",
    alt: "Deliveroo logo",
    width: 150,
    height: 40,
  },
  {
    src: "/images/xero-logo.png",
    alt: "Deliveroo logo",
    width: 50,
    height: 40,
  },
];

export function LogosSection() {
  return (
    <SectionWrapper withGuides>
      <div className="grid grid-cols-2 gap-y-[40px] md:grid-cols-4">
        {images.map((img) => (
          <div
            key={img.src}
            className="relative flex h-[60px] items-center justify-center md:h-[80px]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              // fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
