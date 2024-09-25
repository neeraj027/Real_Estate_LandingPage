import React from 'react';

const Button = ({
  bgcolor = 'secondary',
  text = 'Button',
  textColor = 'light',
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`bg-${bgcolor} text-${textColor} px-5 py-2 hover:bg-primary transition-all duration-300 hover:border-light border hover:text-light`}>
      {text}
    </button>
  );
};

export default Button;
