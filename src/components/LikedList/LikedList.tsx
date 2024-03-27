import { Product } from "@/components/Product";
import { IProduct } from "@/interfaces/product.interface.ts";

export const LikedList = () => {
  const products: IProduct[] = [];

  return (
    <div className="liked-list">
      {products.length ? products.map(product => (
        <Product key={product.id} product={product} />
      )) : "No products liked yet"}
    </div>
  );
}