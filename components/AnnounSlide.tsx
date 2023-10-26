'use client'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { announImages } from '@/constants';
import Image from 'next/image';

const AnnounSlide = () => {

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  
  return (
    <Slider {...settings}>
          {announImages.map((item) => (
            <div className="w-[680px] h-[300px] mt-[54px] mb-20">
              <Image
                src={item.image}
                alt='#'
                width={680}
                height={300}
                className="rounded-2xl w-[680px] h-[300px] object-cover pl-5 mx-auto"
              />
          </div>
          ))}
      </Slider>
  )
}

export default AnnounSlide
