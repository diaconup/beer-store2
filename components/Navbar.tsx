import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="flex justify-center items-center space-x-8 text-xs font-medium">
        <CustomButton
          title="Home"
          containerStyles="text-primary-black uppercase font-inter hover:text-stone-400"
          buttonType="button"
        />

        <CustomButton
          title="About"
          containerStyles="text-primary-black uppercase font-inter hover:text-stone-400"
          buttonType="button"
        />

        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Beer Logo"
            width={118}
            height={18}
            className=""
          />
        </Link>

        <CustomButton
          title="Menu"
          containerStyles="text-primary-black uppercase black font-inter hover:text-stone-400"
          buttonType="button"
        />

        <CustomButton
          title="Contact"
          containerStyles="text-primary-black uppercase font-inter hover:text-stone-400"
          buttonType="button"
        />
      </nav>
    </header>
  );
};

export default Navbar;
