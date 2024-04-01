import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState } from 'react';
import { IProduct } from "@/interfaces/product.interface.ts";

interface ProductContextProps {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  likedProducts: IProduct[];
  setLikedProducts: Dispatch<SetStateAction<IProduct[]>>;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

interface setLikedProductsProps {
    children: ReactNode;
}

export const ProductProvider: FC<setLikedProductsProps> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [likedProducts, setLikedProducts] = useState<IProduct[]>([]);

  return (
    <ProductContext.Provider value={{ products, setProducts, likedProducts, setLikedProducts }}>
      {children}
    </ProductContext.Provider>
  );
};