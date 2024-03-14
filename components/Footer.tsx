'use client';
import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  const handleSubscribeClick = () => {
    window.location.reload();
    router.push('/');
  };

  return (
    <footer
      id="footer"
      className="relative"
      style={{ width: '100%', height: '300px', overflow: 'hidden' }}
    >
      <div className="absolute inset-0">
        <Image
          src="/beerwallpaper.jpg"
          alt="Beer wallpaper"
          layout="fill"
          objectFit="cover"
          className="blur-[1px] brightness-75"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <p className="text-white text-2xl font-inter uppercase font-semibold">
          We make every beer.
        </p>
        <p className="text-xs font-inter mb-4 uppercase font-semibold text-orange-500 ">
          Subscribe to our newsletter.
        </p>
        <div className="bg-opacity-40 bg-black border-2 border-white p-4 max-w-md w-full">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="newsletter"
          ></label>
          <div className="flex items-center border rounded-md">
            <input
              type="email"
              id="newsletter"
              placeholder="Your email..."
              className="w-full p-2 bg-inherit text-white border border-inherit outline-none"
            />
            <CustomButton
              title="Subscribe"
              containerStyles="text-orange-500 w-40 font-inter uppercase font-bold text-sm hover:text-white ease-in duration-300"
              buttonType="submit"
              handleClick={handleSubscribeClick}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
