import { FC } from "react";
import { IProduct } from "@/interfaces/product.interface.ts";

interface ProductProps {
  product: IProduct;
}

export const Product: FC<ProductProps> = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
}