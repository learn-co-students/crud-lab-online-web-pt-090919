import React from 'react';
import Restaurant from './Restaurant';

const Restaurants = ({ restaurants, deleteRestaurant }) => {
  return (
    <ul>
      {restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant} />)}
    </ul>
  );
};

export default Restaurants;