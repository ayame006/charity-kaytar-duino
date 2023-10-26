'use client'
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { cards } from '@/constants';
import Image from 'next/image';
import Button from './Button';

const ProductCard = () => {
  const [isSliderEnabled, setIsSliderEnabled] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSliderEnabled(true);
      } else {
        setIsSliderEnabled(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-5">
      {isSliderEnabled ? (
        <Slider {...sliderSettings}>
          {cards.map((item, index) => (
            <div key={index} className="w-[380px] h-[450px] mt-[54px] mx-auto md:mx-0">
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
      ) : (
        cards.map((item, index) => (
          <div key={index} className="w-[380px] h-[411px] mt-[54px]">
            <Image
              src={item.image}
              alt={item.title}
              width={380}
              height={240}
              className="rounded-2xl w-[380px] h-[240px] object-cover"
            />
            <div className="py-8">
              <h1 className="text-font-medium font-bold text-gray-dark">{item.title}</h1>
              <p className="text-font-small text-gray-dark py-4">{item.description}</p>
              <Button type="button" title="Подробнее" variant="btn_card" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductCard;
