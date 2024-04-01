import { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { useProductContext } from "@/contexts/ProductContext";
import styles from './RootLayout.module.css';

export const RootLayout = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const { setProducts } = useProductContext();

  useEffect(() => {
    const initialProducts = [
      {
        id: "a7416f2d-1d42-4792-ba61-c54889cd6d66",
        name: "Magic Keyboard",
        description: "Description for Magic Keyboard",
        image: "https://picsum.photos/id/668/500",
      },
      {
        id: "3506bbef-e2da-4535-a0bb-e50d5be28b87",
        name: "Kindle",
        description: "Description for Kindle",
        image: "https://picsum.photos/id/367/500",
      },
      {
        id: "2efaf9e9-1508-4f6f-9734-effd187baa3f",
        name: "Magic Keyboard v2",
        description: "Description for Magic Keyboard v2",
        image: "https://picsum.photos/id/366/500",
      },
      {
        id: "187eaa5f-ac60-4ad0-b480-6b983b1e4b78",
        name: "Macbook air",
        description: "Description for Macbook air",
        image: "https://picsum.photos/id/6/500",
      },
      {
        id: "d2782d2d-84aa-443b-92d9-9c644c5ad293",
        name: "PS4 Dualshock controller",
        description: "Description for PS4 Dualshock controller",
        image: "https://picsum.photos/id/96/500",
      },
      {
        id: "19731b46-481e-46eb-814b-84667809728a",
        name: "Camera Sony",
        description: "Description for Camera Sony",
        image: "https://picsum.photos/id/250/500",
      },
      {
        id: "efc6c7dc-ea9f-4110-b769-b477b5bef9f5",
        name: "Camera Yashica",
        description: "Description for Camera Yashica",
        image: "https://picsum.photos/id/454/500",
      },
      {
        id: "5a434a41-1763-43a5-88bf-09302fc9290b",
        name: "Camera Canon",
        description: "Description for Camera Canon",
        image: "https://picsum.photos/id/628/500",
      },
      {
        id: "78614342-e367-475a-90a0-57ecc9b9f2c5",
        name: "Camera Nikon",
        description: "Description for Camera Nikon",
        image: "https://picsum.photos/id/435/500",
      },
      {
        id: "06c87d3c-b335-4acc-8146-7604152576e0",
        name: "Camera Nikon v2",
        description: "Description for Camera Nikon v2",
        image: "https://picsum.photos/id/91/500",
      },
    ];

    setProducts(initialProducts);
  }, [setProducts]);

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