import { useState } from "react";
import { Outlet } from 'react-router-dom';
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import styles from './RootLayout.module.css';

export const RootLayout = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const onClickMenu = () => {
    setMenuStatus(prevState => !prevState)
  };

  return (
    <div className={styles['main-container']}>
      <Header onClickMenu={onClickMenu} />
      {menuStatus && <Sidebar onClickMenu={onClickMenu} />}
      <Outlet />
    </div>
  );
}
