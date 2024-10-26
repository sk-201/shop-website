import React from "react";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 199.99,
      image: "https://example.com/images/headphones.jpg",
      category: "Electronics",
      description:
        "High-quality wireless headphones with noise-cancellation and long battery life.",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 799.99,
      image: "https://example.com/images/smartphone.jpg",
      category: "Electronics",
      description:
        "Latest model smartphone with stunning display and advanced camera features.",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 120.0,
      image: "https://example.com/images/shoes.jpg",
      category: "Sports",
      description:
        "Comfortable and durable running shoes, designed for performance and style.",
    },
    {
      id: 4,
      name: "Laptop",
      price: 1199.99,
      image: "https://example.com/images/laptop.jpg",
      category: "Computers",
      description:
        "Powerful laptop with a high-resolution display, perfect for both work and entertainment.",
    },
    {
      id: 5,
      name: "Digital Camera",
      price: 550.0,
      image: "https://example.com/images/camera.jpg",
      category: "Photography",
      description:
        "Compact digital camera with advanced zoom and 4K video recording capabilities.",
    },
    {
      id: 6,
      name: "Leather Backpack",
      price: 79.99,
      image: "https://example.com/images/backpack.jpg",
      category: "Fashion",
      description:
        "Stylish and spacious leather backpack, ideal for daily use and travel.",
    },
    {
      id: 7,
      name: "Smartwatch",
      price: 299.99,
      image: "https://example.com/images/smartwatch.jpg",
      category: "Wearables",
      description:
        "Fitness tracking smartwatch with heart-rate monitor, GPS, and customizable watch faces.",
    },
    {
      id: 8,
      name: "Bluetooth Speaker",
      price: 149.99,
      image: "https://example.com/images/speaker.jpg",
      category: "Electronics",
      description:
        "Portable Bluetooth speaker with excellent sound quality and waterproof design.",
    },
    {
      id: 9,
      name: "Gaming Keyboard",
      price: 89.99,
      image: "https://example.com/images/keyboard.jpg",
      category: "Gaming",
      description:
        "Mechanical gaming keyboard with customizable RGB lighting and responsive keys.",
    },
    {
      id: 10,
      name: "Yoga Mat",
      price: 35.0,
      image: "https://example.com/images/yogamat.jpg",
      category: "Fitness",
      description:
        "Non-slip yoga mat made of eco-friendly materials, perfect for all levels of practice.",
    },
  ];

  return (
    <div>
      <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => {
              return <ProductCard product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
