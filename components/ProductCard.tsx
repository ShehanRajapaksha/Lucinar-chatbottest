'use client';

import Image from 'next/image';
import { Product } from '@/types/chatbot';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden max-w-sm">
      {product.image_url && (
        <div className="w-full h-48 bg-gray-100 relative">
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-gray-600 text-sm mb-3">
            {product.description}
          </p>
        )}
        <div className="mb-3">
          <p className="text-xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </p>
          {product.regular_price !== product.price && (
            <p className="text-sm text-gray-500 line-through">
              Regular: ${product.regular_price.toFixed(2)}
            </p>
          )}
        </div>
        <div className="mb-3 text-sm text-gray-600">
          <p>Category: {product.categories}</p>
          <p>Stock: {product.stock_status}</p>
          {product.total_sales > 0 && (
            <p>Sales: {product.total_sales}</p>
          )}
        </div>
        {product.permalink && (
          <a
            href={product.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            View Product
          </a>
        )}
      </div>
    </div>
  );
}
