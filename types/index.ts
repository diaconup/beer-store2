import { MouseEventHandler, ReactNode } from "react";

export interface CustomButtonProps {
    title: string
    containerStyles?: string
    handleClick?:
    MouseEventHandler<HTMLButtonElement>
    buttonType?: "button" | "submit" | "reset"
    children?: ReactNode;
}

export interface SearchManufacturerProps{
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}