import React from "react";
import { HomeButtonCardProps } from "../../../utlis/interfaces";

export const HomeButtonCard: React.FC<HomeButtonCardProps> = ({ icon, children, imgSrc, imgAlt }) => {
    return (
        <button className="flex justify-between font-semibold items-center bg-primary hover:bg-primaryhover text-white w-full px-8 py-3 rounded-lg">
            {children}
            {imgSrc && <img className="w-9 h-10 object-cover" src={imgSrc} alt={imgAlt} />}
            {icon ? icon : null}
        </button>
    );
}