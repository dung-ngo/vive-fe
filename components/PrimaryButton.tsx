import { ButtonHTMLAttributes } from 'react';

const PrimaryButton = ({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className="vive-primary-button" {...props}></button>;
};

export default PrimaryButton;
