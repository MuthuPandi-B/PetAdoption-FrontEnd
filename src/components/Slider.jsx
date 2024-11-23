import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const imageQuotes = [
  {
    src: '/public/assets/pet1.jpg',
    quote: 'The best therapist has fur and four legs.',
  },
  {
    src: '/public/assets/pet2.jpg',
    quote: 'Adopt, don’t shop!',
  },
  {
    src: '/public/assets/pet7.jpg',
    quote: 'Pets leave paw prints on your heart.',
  },
  {
    src: '/public/assets/pet4.jpg',
    quote: 'Happiness is a warm puppy.',
  },
  {
    src: '/public/assets/pet6.jpg',
    quote: 'Until one has loved an animal, a part of one’s soul remains unawakened.',
  },
  {
    src: '/public/assets/pet5.jpg',
    quote: 'Saving one dog will not change the world, but surely for that one dog, the world will change forever.',
  },
];

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-4/5 mx-auto py-10">
      <Slider {...settings}>
        {imageQuotes.map((item, index) => (
          <div key={index} className="text-center ">
            <img src={item.src} alt={`Slide ${index}`} className="md:w-full h-80 lg:w-1/2 mx-auto" />
            <p className="mt-4 text-xl italic text-gray-600">{item.quote}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
