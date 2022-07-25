import React from "react";

interface HomeButtonCardProps {
    children: React.ReactNode;
    imgSrc?: string;
    imgAlt?: string;
    icon?: JSX.Element;
}

export const HomeButtonCard: React.FC<HomeButtonCardProps> = ({ icon, children, imgSrc, imgAlt }) => {
    return (
        <button className="flex justify-between items-center bg-primary hover:bg-primaryhover text-white w-full px-8 py-3 rounded-lg">
            {children}
            <img className="w-9 h-90" src={imgSrc} alt={imgAlt} />
            {icon ? icon : null}
        </button>
    );
}