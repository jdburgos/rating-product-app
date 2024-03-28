import { ProductList } from "@/components/ProductList";
import {IProduct} from "@/interfaces/product.interface.ts";

export const LikedPage = () => {
  const products: IProduct[] = [];

  return (
    <>
      <ProductList products={products} />
    </>
  );
}