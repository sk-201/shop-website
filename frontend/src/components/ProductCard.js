import React from "react";

const ProductCard = ({ product }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleShow = () => {
    setShowDrawer((prev) => !prev);
  };
  return (
    <div>
      {" "}
      <div class="group relative">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg"
            alt="Front of men&#039;s Basic Tee in black."
            class="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {product.name}
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{product.category}</p>
          </div>
          <p class="text-sm font-medium text-gray-900">{product.price}</p>
        </div>
        <button className="bg-red-500 w-full text-white" onClick={toggleShow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
