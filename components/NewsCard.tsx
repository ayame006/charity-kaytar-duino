'use client'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { newsCards } from '@/constants';
import Image from 'next/image';
import Button from './Button';

const NewsCard = () => {

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  
  return (
        <Slider {...settings}>
          {newsCards.map((item, index) => (
            <div key={index} className="w-[380px] h-[491px] mt-[54px]">
              <Image
                src={item.image}
                alt={item.title}
                width={380}
                height={240}
                className="rounded-2xl w-[380px] h-[240px] object-cover"
              />
              <div className="py-8">
                <h1 className="text-font-medium font-bold text-gray-dark w-[370px]">{item.title}</h1>
                <p className="text-font-small text-gray-dark py-4 w-[370px]">{item.description}</p>
                <Button type="button" title="Подробнее" variant="btn_card" />
              </div>
          </div>
          ))}
        </Slider>
  )
}

export default NewsCard
