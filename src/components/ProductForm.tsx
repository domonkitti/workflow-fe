import React, { useState } from "react";

// ประกาศโครงสร้างของ props ที่จะถูกส่งมายังคอมโพเนนต์
type ProductFormProps = {
  onAddProduct: (product: { 
    id: number; 
    title: string; 
    amount: string; 
    imageUrl: string 
  }) => void;
};

const ProductForm = ({ onAddProduct }: ProductFormProps) => {
  const [newProduct, setNewProduct] = useState({
    id: 0,
    title: "",
    amount: "",
    imageUrl: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddProduct(newProduct);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="imageUrl"
          value={newProduct.imageUrl}
          onChange={handleInputChange}
          placeholder="Enter image URL"
        />
      </div>
      <div>
        <input
          type="text"
          name="title"
          value={newProduct.title}
          onChange={handleInputChange}
          placeholder="Enter product title"
        />
      </div>
      <div>
        <input
          type="text"
          name="amount"
          value={newProduct.amount}
          onChange={handleInputChange}
          placeholder="Enter product amount"
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
