import React from 'react';
import { useDispatch } from 'react-redux';
import { HomeButtonCardProps } from '../../../utlis/interfaces';

export const HomeButtonCard: React.FC<HomeButtonCardProps> = ({
  onClick,
  icon,
  children,
  imgSrc,
  imgAlt,
}) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => onClick}
      className="flex justify-between font-semibold items-center bg-primary hover:bg-primaryhover text-white w-full px-8 py-3 rounded-lg"
    >
      {children}
      {imgSrc && (
        <img className="w-9 h-10 object-cover" src={imgSrc} alt={imgAlt} />
      )}
      {icon ? icon : null}
    </button>
  );
};
