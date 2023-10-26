'use client'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ourTeamImages } from '@/constants';
import Image from 'next/image';

const OurTeamSlide = () => {

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  
  return (
    <div>
        <Slider {...settings}>
          {ourTeamImages.map((slide, index) => (
            <div key={index} className="my-10">
              <Image src={slide.image} alt={slide.title} width={280} height={300} className="object-cover md:w-[280px] md:h-[300px] w-[301px] h-[330px] rounded-2xl mx-auto md:mx-0" />
              <div className='flex flex-col gap-4'>
                <h1 className='text-font-medium font-bold text-white pt-6 mx-auto md:mx-0'>{slide.title}</h1> 
                <p className="text-font-small text-white mx-auto md:mx-0">{slide.position}</p>
              </div>
            </div>
          ))}
        </Slider>
    </div>
  )
}

export default OurTeamSlide