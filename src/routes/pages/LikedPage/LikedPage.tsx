import { useEffect, useState } from "react";
import { ProductList } from "@/components/ProductList";
import { IProduct } from "@/interfaces/product.interface.ts";
import styles from './LikedPage.module.css';

export const LikedPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
      setProducts(JSON.parse(localStorage.getItem('products') || '[]') || []);
  }, []);

  return (
    <>
      <h2 className={styles.title}>Liked Products</h2>
      <ProductList products={products} />
    </>
  );
}