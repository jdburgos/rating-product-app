import { FC } from "react";
import { Button } from "../Button";
import { IProduct } from "@/interfaces/product.interface.ts";
import { useProductContext } from "@/contexts/ProductContext";
import styles from './SwiperActions.module.css';

interface SwiperActionsProps {
  product: IProduct;
}

export const SwiperActions: FC<SwiperActionsProps> = ({ product }) => {
    const { setProducts, likedProducts, setLikedProducts } = useProductContext();

    const handleLikeClick = () => {
      const productExists = likedProducts.some((prod: IProduct) => prod.id === product.id);

      if (productExists) {
        alert('This product has already been added to your favorites');

        return;
      }

      setLikedProducts(prevProducts => [...prevProducts, product]);
      setProducts(prevProducts => prevProducts.filter((prod: IProduct) => prod.id !== product.id));
    };

    const handleDislikeClick = () => {
      setProducts(prevProducts => prevProducts.filter((prod: IProduct) => prod.id !== product.id));
    };

    return (
        <div className={styles['swiper-actions']}>
            <Button icon="/x-icon.svg" onClick={handleDislikeClick} altText='Dislike' type='secondary' />
            <Button icon="/heart-icon.svg" onClick={handleLikeClick} altText='Like' type='primary' />
        </div>
    )
}