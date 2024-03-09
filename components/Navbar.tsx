'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

  const navbarStyles = isScrolled
    ? 'w-full fixed top-0 bg-white shadow-md z-10'
    : 'w-full absolute z-10';

  const buttonStyles = 'text-primary-black uppercase font-inter hover:text-stone-400 duration-300 ease-in'

  return (
    <header className={navbarStyles}>
      <nav className="flex justify-center items-center space-x-8 text-xs font-medium">
        
        <CustomButton
          title="Home"
          containerStyles={buttonStyles}
          buttonType="button"
          handleClick={() => scrollToElement('main')}
        />

        <CustomButton
          title="About"
          containerStyles={buttonStyles}
          buttonType="button"
          handleClick={() => scrollToElement('AboutUs')}
        />

        <Link href="/" className="flex justify-center items-center">
          <Image src="/logo.png" alt="Beer Logo" width={118} height={18} />
        </Link>

        <CustomButton
          title="Menu"
          containerStyles={buttonStyles}
          buttonType="button"
          handleClick={() => scrollToElement('discover')}
        />

        <CustomButton
          title="Contact"
          containerStyles={buttonStyles}
          buttonType="button"
          handleClick={() => scrollToElement('footer')}
        />
      </nav>
    </header>
  );
};

export default Navbar;
