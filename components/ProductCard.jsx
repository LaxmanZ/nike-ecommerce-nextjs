import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = () => {
  return (
    <Link
      href="/product/1"
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image
        alt="productImage"
        src="/product-1.webp"
        width={400}
        height={400}
        className="w-full"
      />

      <div className="text-black/[0.9] p-4">
        <h2 className="text-lg font-medium">Product Name</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377;500</p>
          <p className="text-base  font-medium line-through">&#8377;999</p>
          <p className="ml-auto text-base font-medium text-green-500">
            50% off
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
