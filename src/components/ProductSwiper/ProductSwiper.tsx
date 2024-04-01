import { Product } from "@/components/Product";
import { useProductContext } from "@/contexts/ProductContext";
import styles from './ProductSwiper.module.css';

export const ProductSwiper = () => {
  const { products } = useProductContext();

  return (
    <section className={styles['product-swiper']}>
      {products.length ? products.map(product => (
        <Product key={product.id} product={product} isLiked />
      )) : <p className={styles['product-list__text']}>There are no products to rate.</p>}
    </section>
  );
}
