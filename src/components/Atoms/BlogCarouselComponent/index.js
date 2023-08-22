'use client'

import { useState, useEffect, useRef } from 'react'

import { motion, useAnimation } from 'framer-motion'

const BlogCarouselComponent = () => {
  const carousel = useRef()
  const [width, setWidth] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 0) {
      controls.start({ x: 0 })
    } else if (info.offset.x < -width) {
      controls.start({ x: -width })
    }
  }

  return (
    <div className="md:hidden mt-[30px] w-full">
      <motion.div
        ref={carousel}
        className="cursor-grab overflow-hidden p-[30px]"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          className="md:hidden flex w-[900px] space-x-4"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 0 }}
          dragElastic={0.1}
        >
          <motion.div className="w-[600px] flex flex-col">
            <p className="font-normal text-xs text-gay-400">10 Out 2023</p>
            <h1 className="font-bold text-lg text-dark max-w-[202px] mt-[8px]">
              Qual a diferença enre varejo e atacado?
            </h1>
            <img
              src="/assets/foto-blog.png"
              alt="imagem"
              className="w-full h-[149px] mt-[25px]"
            />
          </motion.div>
          <motion.div className="w-[600px] flex flex-col">
            <p className="font-normal text-xs text-gay-400">10 Out 2023</p>
            <h1 className="font-bold text-lg text-dark max-w-[202px] mt-[8px]">
              Qual a diferença enre varejo e atacado?
            </h1>
            <img
              src="/assets/foto-blog.png"
              alt="imagem"
              className="w-full h-[149px] mt-[25px]"
            />
          </motion.div>
          <motion.div className="w-[600px] flex flex-col">
            <p className="font-normal text-xs text-gay-400">10 Out 2023</p>
            <h1 className="font-bold text-lg text-dark  mt-[8px]">
              Qual a diferença enre varejo e atacado?
            </h1>
            <img
              src="/assets/foto-blog.png"
              alt="imagem"
              className="w-full h-[149px] mt-[25px]"
            />
          </motion.div>
          <motion.div className="w-[600px] flex flex-col">
            <p className="font-normal text-xs text-gay-400">10 Out 2023</p>
            <h1 className="font-bold text-lg text-dark  mt-[8px]">
              Qual a diferença enre varejo e atacado?
            </h1>
            <img
              src="/assets/foto-blog.png"
              alt="imagem"
              className="w-full h-[149px] mt-[25px]"
            />
          </motion.div>
          <motion.div className="w-[600px] flex flex-col">
            <p className="font-normal text-xs text-gay-400">10 Out 2023</p>
            <h1 className="font-bold text-lg text-dark  mt-[8px]">
              Qual a diferença enre varejo e atacado?
            </h1>
            <img
              src="/assets/foto-blog.png"
              alt="imagem"
              className="w-full h-[149px] mt-[25px]"
            />
          </motion.div>
          <motion.div className="w-[600px] flex flex-col">
            <p className="font-normal text-xs text-gay-400">10 Out 2023</p>
            <h1 className="font-bold text-lg text-dark  mt-[8px]">
              Qual a diferença enre varejo e atacado?
            </h1>
            <img
              src="/assets/foto-blog.png"
              alt="imagem"
              className="w-full h-[149px] mt-[25px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default BlogCarouselComponent
