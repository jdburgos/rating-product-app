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
        <Link className={styles['menu-link']} to="/">Home</Link>
        <Link className={styles['menu-link']} to="/liked">Liked</Link>
      </nav>
    </aside>
  );
}
