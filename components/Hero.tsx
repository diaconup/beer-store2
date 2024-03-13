'use client';

import React, { useEffect, useState } from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';

const Hero = () => {
  const handleScroll = () => {};

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 4);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const scrollToElement = (elementId: string) => {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const images = [
    '/halfbeer1.png',
    '/halfbeer2.png',
    '/halfbeer3.png',
    '/halfbeer4.png',
  ];

  return (
    <div className="hero bg-zinc-100 h-dvh relative" id="main">
      <div className="flex-1 pb-32 padding-x text-center bg-zinc-100 justify-center">
        <p className="hero__subtitle ">Here is what we found out</p>

        <h1 className="hero__title ">The best beer deserves </h1>
        <h1 className="hero__title">The best bottle</h1>

        <CustomButton
          title="View more"
          containerStyles="border border-stone-400 text-stone-400 mt-10 px-3 font-size-10 hover:border-black hover:text-black z-10 duration-300 ease-in"
          handleClick={() => scrollToElement('AboutUs')}
        />
      </div>

      <div className="hero__image-container pt-10 justify-center absolute bottom-0 w-full">
        <div className="hero__image flex justify-center bottom-0">
          <Image src={images[currentImage]} alt="" width={100} height={100} />
          <Image
            src={images[(currentImage + 1) % 4]}
            alt=""
            width={100}
            height={100}
          />
          <Image
            src={images[(currentImage + 2) % 4]}
            alt=""
            width={100}
            height={100}
          />
          <Image
            src={images[(currentImage + 3) % 4]}
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
