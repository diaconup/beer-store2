"use client";

import React from 'react';
import { CustomButtonProps } from '@/types';

const CustomButton = ({ title, containerStyles, handleClick, buttonType, children}: CustomButtonProps) => {
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
        {children !== undefined && <>{children}</>}
    </button>
  )
}

export default CustomButton