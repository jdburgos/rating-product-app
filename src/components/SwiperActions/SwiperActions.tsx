import { FC } from "react";
import { Button } from "../Button";
import { IProduct } from "@/interfaces/product.interface.ts";
import styles from './SwiperActions.module.css';
import { useSwiper } from "swiper/react";

interface SwiperActionsProps {
  currentProduct: IProduct;
}

export const SwiperActions: FC<SwiperActionsProps> = ({ currentProduct }) => {
    const swiper = useSwiper();

    const handleLikeClick = () => {
      const products = JSON.parse(localStorage.getItem('products') || '[]') || [];
      const productExists = products.some((prod: IProduct) => prod.id === currentProduct.id);

      if (productExists) {
        alert('This product has already been added to your favorites');

        return;
      }

      swiper.slideNext()
      products.push(currentProduct);
      localStorage.setItem('products', JSON.stringify(products));
    };

    const handleDislikeClick = () => {
      let products = JSON.parse(localStorage.getItem('products') || '[]') || [];

      swiper.slidePrev()
      products = products.filter((product: IProduct) => product.id !== currentProduct.id);
      localStorage.setItem('products', JSON.stringify(products));
    };

    return (
        <div className={styles['swiper-actions']}>
            <Button icon="/x-icon.svg" onClick={handleDislikeClick} altText='Dislike' type='secondary' />
            <Button icon="/heart-icon.svg" onClick={handleLikeClick} altText='Like' type='primary' />
        </div>
    )
}