"use client";

import React from 'react';
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

const CustomButton = ({ title, containerStyles, handleClick, buttonType}: CustomButtonProps) => {
  return (
    <button 
        disabled={false}
        type={buttonType || 'button'}
        className={`custom-button ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton