import Image from 'next/image'
interface Partner {
  id: number;
  imageSrc: string;
  text1: string;
  text2: string;
  label: string;
}

export default function PartnersBox({ imageSrc, text1, text2 }: Partner) {
  return (
    <div className="w-[159px] h-[318px] flex flex-col gap-[33px] items-center md:w-[200px] md:h-[381px]">
      <Image src={imageSrc} alt="Logo" width={180} height={180}/>
      <p className="font-semibold text-base text-blue-primary">{text1}</p>
      <p className="font-medium text-sm text-dark">{text2}</p>
    </div>
  );
}