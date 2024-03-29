import React from 'react';
import styles from './Button.module.css';
import fonts from '@/app/fonts';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, href }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-sm hover:text-white font-medium transition duration-200 text-sm lg:text-base ${styles.mainBtn} ${fonts.poppins.className}`}
    >
      {text}
    </button>
  );
};

export default Button;