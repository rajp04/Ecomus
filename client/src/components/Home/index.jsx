import TopBar from '../TopBar'
import Header from '../Header'
import { FaChevronRight } from "react-icons/fa";
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { BsLightningChargeFill } from "react-icons/bs";
import Footer from '../Footer';
import Categories from './Categories';
import Testimonial from './Testimonial';
import ShopGram from './ShopGram';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LookBook from './LookBook';
import Seller from './Seller';

const slides = [
  {
    image: 'https://themesflat.co/html/ecomus/images/slider/fashion-slideshow-03.jpg',
    title: 'Glamorous Glam',
    description: "From casual to formal, we've got you covered",
  },
  {
    image: 'https://themesflat.co/html/ecomus/images/slider/fashion-slideshow-02.jpg',
    title: 'Simple Style',
    description: "From casual to formal, we've got you covered",
  },
  {
    image: 'https://themesflat.co/html/ecomus/images/slider/fashion-slideshow-01.jpg',
    title: 'Glamorous Glam',
    description: "From casual to formal, we've got you covered",
  },
];

function Home() {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const items = Array(7).fill("Spring Clearance Event: Save Up to 70%");

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 6,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      {/* TopBar */}
      <TopBar />
      <div className="relative lg:h-[120vh] md:h-[100vh] h-[80vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              } absolute top-0 left-0 lg:h-[120vh] md:h-[100vh] h-[80vh] w-[100%]`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          >
            {/* Header */}
            <Header />
            <div className="flex py-32 items-center sm:ms-10 ms-3 transition-all duration-150">
              <div className="space-y-5">
                <h1 className="lg:text-[80px] w-[30%] md:text-[44px] text-[34px]">{slide.title}</h1>
                <p className="text-[20px] md:flex hidden">{slide.description}</p>
                <div className="flex items-center bg-black rounded-sm w-fit md:px-7 px-2 md:py-1">
                  <Button className="home-banner-color">Shop collection</Button>
                  <FaChevronRight className="home-banner-color" />
                </div>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-3 w-3 rounded-full ${index === currentSlide ? 'bg-black' : 'bg-gray-300'
                    }`}
                  style={{ transition: 'background-color 0.3s' }}
                />
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Marquee */}
      <div className="py-6 bg-[#fcffb2] overflow-hidden">
        <div className="flex items-center text-2xl font-medium marquee">
          {items.map((item, index) => (
            <div key={index} className="flex items-center me-12">
              <BsLightningChargeFill className="me-3 text-2xl" />
              <h1>{item}</h1>
            </div>
          ))}
          {items.map((item, index) => (
            <div key={`duplicate-${index}`} className="flex items-center me-12">
              <BsLightningChargeFill className="me-3 text-2xl" />
              <h1>{item}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <Categories />

      {/* Seller */}
      <Seller />

      {/* LookBook */}
      <LookBook />

      {/* Testimonial */}
      <Testimonial />

      {/* Brand Logo */}
      <div className="my-10 border rounded-xl w-[95%] m-auto">
        <Slider {...settings}>
          <div className='border-r flex items-center justify-center py-7'>
            <img
              src="https://themesflat.co/html/ecomus/images/brand/brand-01.png"
              alt="Brand 1"
              className="w-auto"
            />
          </div>
          <div className='border-r flex items-center justify-center py-7'>
            <img
              src="https://themesflat.co/html/ecomus/images/brand/brand-02.png"
              alt="Brand 2"
              className="w-auto"
            />
          </div>
          <div className='border-r flex items-center justify-center py-7'>
            <img
              src="https://themesflat.co/html/ecomus/images/brand/brand-03.png"
              alt="Brand 3"
              className="w-auto"
            />
          </div>
          <div className='border-r flex items-center justify-center py-7'>
            <img
              src="https://themesflat.co/html/ecomus/images/brand/brand-04.png"
              alt="Brand 4"
              className="w-auto"
            />
          </div>
          <div className='border-r flex items-center justify-center py-7'>
            <img
              src="https://themesflat.co/html/ecomus/images/brand/brand-05.png"
              alt="Brand 5"
              className="w-auto"
            />
          </div>
          <div className='border-r flex items-center justify-center py-7'>
            <img
              src="https://themesflat.co/html/ecomus/images/brand/brand-06.png"
              alt="Brand 6"
              className="w-auto"
            />
          </div>
        </Slider>
      </div>

      {/* Shop Gram */}
      <ShopGram />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home