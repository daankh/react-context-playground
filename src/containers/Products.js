import React, { useContext, useMemo } from 'react';
// import { ProductsContext } from "../context/products-context";
import { useStore } from "../hooks-store/store";

import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = props => {
  const [state, dispatch] = useStore();
  const productList = useMemo(() => state.products, [state]);

  // const {products: productList} = useContext(ProductsContext);

  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
