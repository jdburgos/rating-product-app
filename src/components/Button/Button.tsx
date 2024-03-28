import { FC } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  icon: string;
  onClick: () => void;
  altText: string;
  type: string;
}

export const Button: FC<ButtonProps> = ({ icon, onClick, altText, type }) => {
  const baseClasses = styles.button;
  const stateClasses = type === 'primary' ? styles.primary : styles.secondary;
  const classes = `${baseClasses} ${stateClasses}`;

  return (
    <button onClick={onClick} className={classes}>
      <img className={styles['button__img']} src={icon} alt={altText} />
    </button>
  );
}
