// Styles
import './styles.css'

//next
import Image from 'next/image'

//Components
import BlogAnotherPublicationsComponent from '@/components/Atoms/BlogAnotherPublicationsComponent'
import BlogSocialLinksSection from '@/components/Atoms/BlogSocialLinksSection'
import BlogCarouselComponent from '@/components/Atoms/BlogCarouselComponent'

const BlogPublicationSection = () => {
  return (
    <section className="blog-section">
      <div className="box-via-ensina">
        <Image
          className="md:w-[165px] md:h-[55px]"
          src="/logos/logo-via-certa-ensina.svg"
          alt="logo"
          width={116}
          height={39}
        />
      </div>

      <div className="mt-[70px] w-full flex flex-col mx-[0 24px] gap-[110px] md:flex-row md:justify-center">
        <div className="hot-news-section">
          <p className="hot-news-data">10 Out 2023</p>
          <h1 className="hot-news-text">
            Qual a diferença entre varejo e atacado? 5 exemplos pra você
            entender na prática.
          </h1>
          <Image
            className="w-full mt-[60px]"
            src="/assets/foto-blog.png"
            alt="logo"
            width={390}
            height={350}
          />
          <div>
            <p className="hot-news-paragraph">
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
              ipsum dolor sit amet, consectetur Lorem ipsum...
            </p>
            <p className="hot-news-learn-more">Ler mais</p>
          </div>
        </div>

        <div className="another-publications-section">
          <h1 className="another-publications-text">Outras publicações</h1>

          <BlogAnotherPublicationsComponent />

          <BlogCarouselComponent />

          <BlogSocialLinksSection />
        </div>
      </div>
    </section>
  )
}

export default BlogPublicationSection
