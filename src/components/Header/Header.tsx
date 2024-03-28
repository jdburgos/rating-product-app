import { FC } from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';

interface HeaderProps {
  onClickMenu: () => void;
}

export const Header: FC<HeaderProps>  = ({ onClickMenu }) => {
  return (
      <header className={styles.header}>
          <Link className={styles.logo} to="/"><img src="/shop.svg" alt="Rating product app"/></Link>
          <h1 className={styles.title}>Rating product app</h1>
          <img src="/menu-icon.svg" alt="Menu" className={styles['menu-button']} onClick={onClickMenu}/>
      </header>
  );
}