import { ProductList } from "../ProductList";
import { SwiperActions } from "../SwiperActions";
import styles from './ProductSwiper.module.css';

export const ProductSwiper = () => {
  return (
    <section className={styles['product-swiper']}>
      <ProductList />
      <SwiperActions />
    </section>
  );
}
