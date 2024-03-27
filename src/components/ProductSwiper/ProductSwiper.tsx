import { ProductList } from "../ProductList";
import { SwiperActions } from "../SwiperActions";

export const ProductSwiper = () => {
  return (
    <section className="product-list">
      <ProductList />
      <SwiperActions />
    </section>
  );
}
