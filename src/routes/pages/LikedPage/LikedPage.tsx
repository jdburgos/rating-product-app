import { ProductList } from "@/components/ProductList";
import { useProductContext } from "@/contexts/ProductContext";
import styles from './LikedPage.module.css';

export const LikedPage = () => {
  const { likedProducts } = useProductContext();

  return (
    <>
      <h2 className={styles.title}>Liked Products</h2>
      <ProductList products={likedProducts} />
    </>
  );
}