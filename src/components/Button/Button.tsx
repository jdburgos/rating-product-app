import { FC } from 'react';

interface ButtonProps {
  icon: string;
  onClick: () => void;
  altText: string;
  type: string;
}

export const Button: FC<ButtonProps> = ({ icon, onClick, altText, type }) => {
  const className = type === 'primary' ? 'primary' : 'secondary';

  return (
    <button onClick={onClick} className={className}>
      <img src={icon} alt={altText} />
    </button>
  );
}
