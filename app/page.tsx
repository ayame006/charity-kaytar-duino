import Hero from '@/components/Hero'
import Image from 'next/image'
import AnnounSlide from '@/components/AnnounSlide'
import Button from '@/components/Button'
import ProductCard from '@/components/ProductCard'
import Form from '@/components/Form'
import { aboutUsImages } from '@/constants'
import OurTeamSlide from '@/components/OurTeamSlide'
import NewsCard from '@/components/NewsCard'
import Features from '@/components/Features'
import Contacts from '@/components/Contacts'

export default function Home() {
  return (
    <main className='relative overflow-hidden'>
      <Hero />

      <div className='max-container padding-container'>
        <h1 className='text-font-large text-primary-green font-bold font-caveat'>О нас</h1>
        <p className='sm:text-font-medium text-font-small text-gray-dark max-w-[1440px] pt-8'>Добро пожаловать в Кайтар Дуйно – место, где добро, забота и вдохновение соединяются ради лучшего будущего. Мы – коллектив людей, убежденных в том, что совместные усилия могут создать положительные изменения в мире.
        Наш фонд был основан с целью создания положительных социальных изменений и поддержки тех, кто находится в трудных ситуациях. Мы стремимся к тому, чтобы каждый человек чувствовал себя важным и поддержанным, независимо от обстоятельств.</p>

        <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-5 pt-10'>
            {
              aboutUsImages.map((item) => (
                <Image key={item.id} src={item.image} alt='#' width={380} height={240} className="mx-auto md:mx-0 rounded-2xl" />
              ))
            }
        </div>
      </div>


      <div className='bg-primary-green mt-[170px]'>
        <div className='max-container padding-container'>
          <h1 className='text-font-large text-white font-bold font-caveat pt-[90px]'>Наша команда</h1>
          <p className='sm:text-font-medium text-font-small text-white max-w-[1440px] pt-8'>Команда Кайтар Дуйно – это группа энтузиастов, которые разделяют общую страсть к созданию позитивных изменений в мире. Мы считаем, что каждый внесенный вклад имеет значение, и наша цель состоит в том, чтобы объединить наши усилия для достижения общих целей.</p>
          
          <OurTeamSlide />
        </div>
      </div>
      
      <div className='max-container padding-container mt-[170px]'>
        <h1 className='text-font-large text-primary-green font-caveat'>Проекты</h1>
          <ProductCard />
      </div>

      <Features />
      
      <div className='xl:w-[1280px] w-full rounded-2xl padding-container max-container bg-primary-green mt-5 py-4'>
        <div className='flex flex-wrap justify-between'>
          <h2 className='sm:text-secondary-large text-[32px] text-white font-caveat pt-5'>Дарите добро! Ваше <br /> пожертвование меняет миры</h2>
          <Image src='/property.png' alt='img' width={227} height={252} className='w-[130px] h-[145px] sm:w-[227px] sm:h-[192px] relative top-5' />
          <div className='flex flex-col gap-5 pt-8'>
            <p className='text-white text-font-small'>Пожертвуйте сейчас и помогите <br /> создать лучшее будущее</ p>
            <Button type="button" title="Дарить добро" variant="btn_white" />
          </div>
        </div>
      </div>

      
      <div className='max-container padding-container mt-[170px]'>
        <h1 className='text-font-large text-primary-green font-caveat'>Новости и события</h1>
        <NewsCard />
      </div>
      
      <div className='bg-primary-green mt-[170px]'>
        <div className='max-container padding-container'>
            <h1 className='text-font-large text-white font-bold font-caveat pt-[90px]'>Анонсы</h1>
            <AnnounSlide />
          </div>
      </div>

      <Form />

      <div className='max-container padding-container mt-[170px]'>
        <h1 className='text-font-large text-primary-green font-caveat'>Контакты</h1>
        <Contacts />
      </div>

    </main>
  )
}
