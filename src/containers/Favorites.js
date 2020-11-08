import React, { useContext, useMemo } from 'react';
import { useStore } from "../hooks-store/store";
// import { ProductsContext } from "../context/products-context";
import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';

const Favorites = props => {
  const [store] = useStore();
  const favoriteProducts = useMemo(() => store.products.filter(p => p.isFavorite), [store]);
  // const { products } = useContext(ProductsContext);
  // const favoriteProducts = useMemo(() => products.filter(p => p.isFavorite),[products]);

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
