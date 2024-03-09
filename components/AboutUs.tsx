import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="relative w-full h-96 flex" id="AboutUs">
      <div className="flex-1 relative">
        <Image
          src="/aboutus.jpg"
          alt="About us wallpaper"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
      </div>

      <div className="pl-10 py-6 absolute inset-0 flex items-left text-left text-white">
        <div className="max-w-md p-8">
          <h1 className="font-inter uppercase font-semibold text-4xl text-amber-800">About Us</h1>
          <p className="font-inter py-8 text-sm">
          In the fall of 2018, driven by a deep passion for craft brewing, We launched the brewery, "Hop Haven," in March 2019. 
          Overcoming challenges in ingredient sourcing and refining brewing techniques, the summer of 2020 marked our success with local acclaim and festival recognition. 
          This journey, a rollercoaster of creativity and community support, has shaped a thriving brewery, embodying the dream that started in the autumn of 2018.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


