//next
import Image from 'next/image'

const BlogSocialLinksSection = () => {
  return (
    <div className="flex flex-col mt-[47px]">
    <hr className="" />
    <h1 className="font-semibold text-2xl text-black text-center mt-[40px]">
      Achou interessante? Compartilha!
    </h1>
    <div className="flex gap-[40px] mt-[40px] justify-center items-center md:justify-start">
      <Image
        className="md:h-[25px] md:w-[25px]"
        src="/icons/icon-instagram.svg"
        alt="logo"
        width={32}
        height={32}
      />
      <Image
        className="md:h-[25px] md:w-[25px]"
        src="/icons/icon-instagram.svg"
        alt="logo"
        width={32}
        height={32}
      />
      <Image
        className="md:h-[25px] md:w-[25px]"
        src="/icons/icon-instagram.svg"
        alt="logo"
        width={32}
        height={32}
      />
    </div>
  </div>
  )
}

export default BlogSocialLinksSection
