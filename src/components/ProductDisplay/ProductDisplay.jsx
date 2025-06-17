import React from 'react';
import PropTypes from 'prop-types';

export function ProductDisplay({
  product,
  showDescription,
  showStockStatus,
  onAddToCart,
  children
}) {
  return (
    <div className="flex flex-col items-center">
-     {product.imageUrl && (
-       <img
-         src={https: "//images.pexels.com/photos/4917455/pexels-photo-4917455.jpeg?cs=srgb&dl=pexels-curayagjovan-4917455.jpg&fm=jpg" }
-         alt={product.name}
-         className="w-full mb-4"
-       />
-     )}
+     {product.imageUrl && (
+       <img
+         src={product.imageUrl}
+         alt={product.name}
+         className="product-image"    /* ← use our CSS */
+       />
+     )}

      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
      {showDescription && <p className="mt-2 text-sm text-gray-700">{product.description}</p>}
      {showStockStatus && (
        <p className={`mt-1 text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      )}
      {onAddToCart && product.inStock && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add to Cart
        </button>
      )}
      {children}
    </div>
  );
}


ProductDisplay.propTypes = {
  product: PropTypes.shape({
    id:          PropTypes.string.isRequired,
    name:        PropTypes.string.isRequired,
    price:       PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl:    PropTypes.string,
    inStock:     PropTypes.bool.isRequired,
  }).isRequired,
  showDescription:  PropTypes.bool,
  showStockStatus:  PropTypes.bool,
  onAddToCart:      PropTypes.func,
  children:         PropTypes.node,
};

ProductDisplay.defaultProps = {
  showDescription: false,
  showStockStatus: false,
  onAddToCart:     null,
  children:        null,
};
