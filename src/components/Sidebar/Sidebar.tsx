import { FC } from "react";
import { Link } from "react-router-dom";
import styles from './Sidebar.module.css';

interface SidebarProps {
    onClickMenu: () => void;
}

export const Sidebar: FC<SidebarProps>  = ({ onClickMenu }) => {
  return (
    <aside className={styles.sidebar}>
      <span className={styles['close-icon']} onClick={onClickMenu}>X</span>
      <nav className={styles.navigation}>
        <Link className={styles['navigation__link']} to="/" onClick={onClickMenu}>Home</Link>
        <Link className={styles['navigation__link']} to="/liked" onClick={onClickMenu}>Liked</Link>
      </nav>
    </aside>
  );
}
