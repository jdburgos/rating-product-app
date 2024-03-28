import { FC } from "react";
import { Product } from "@/components/Product";
import { IProduct } from "@/interfaces/product.interface.ts";
import styles from "./ProductList.module.css";

interface ProductListProps {
  products: IProduct[];
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles['product-list']}>
      {products.length ? products.map(product => (
        <Product key={product.id} product={product} />
      )) : <p className={styles['product-list__text']}>No products found</p>}
    </div>
  );
}