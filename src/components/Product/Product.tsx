import { FC } from "react";
import { SwiperActions } from "@/components/SwiperActions";
import { IProduct } from "@/interfaces/product.interface.ts";
import styles from "./Product.module.css";

interface ProductProps {
  product: IProduct;
  isLiked?: boolean;
}

export const Product: FC<ProductProps> = ({ product, isLiked }) => {
  return (
    <div className={styles.product}>
      <img className={styles['product__image']} src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {isLiked ? <SwiperActions product={product}/> : null}
    </div>
  );
}