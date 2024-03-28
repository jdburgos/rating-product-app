import { Product } from "@/components/Product";

export const ProductList = () => {
  const products = [
    {
      id: "a7416f2d-1d42-4792-ba61-c54889cd6d66",
      name: "Product 1",
      description: "Description for product 1",
      image: "https://via.placeholder.com/1000",
    },
    {
      id: "3506bbef-e2da-4535-a0bb-e50d5be28b87",
      name: "Product 2",
      description: "Description for product 2",
      image: "https://via.placeholder.com/1000",
    },
    {
      id: "2efaf9e9-1508-4f6f-9734-effd187baa3f",
      name: "Product 3",
      description: "Description for product 3",
      image: "https://via.placeholder.com/1000",
    },
    {
      id: "187eaa5f-ac60-4ad0-b480-6b983b1e4b78",
      name: "Product 4",
      description: "Description for product 4",
      image: "https://via.placeholder.com/1000",
    },
    {
      id: "d2782d2d-84aa-443b-92d9-9c644c5ad293",
      name: "Product 5",
      description: "Description for product 5",
      image: "https://via.placeholder.com/1000",
    },
    {
      id: "19731b46-481e-46eb-814b-84667809728a",
      name: "Product 6",
      description: "Description for product 6",
      image: "https://via.placeholder.com/1000",
    },
    {
      id: "efc6c7dc-ea9f-4110-b769-b477b5bef9f5",
      name: "Product 7",
      description: "Description for product 7",
      image: "https://via.placeholder.com/1000",
    },
    {
      id: "5a434a41-1763-43a5-88bf-09302fc9290b",
      name: "Product 8",
      description: "Description for product 8",
      image: "https://via.placeholder.com/1000",
    },
    {
      id: "78614342-e367-475a-90a0-57ecc9b9f2c5",
      name: "Product 9",
      description: "Description for product 9",
      image: "https://via.placeholder.com/1000",
    },
    {
      id: "06c87d3c-b335-4acc-8146-7604152576e0",
      name: "Product 10",
      description: "Description for product 10",
      image: "https://via.placeholder.com/1000",
    },
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}