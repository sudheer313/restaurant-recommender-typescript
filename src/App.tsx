import React, { useState } from 'react';
import './App.css';
import RestaurantFilter from './components/RestaurantFilter';
import restaurantsData, { Restaurant } from './restaurents';

function App() {
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(restaurantsData);

  function handleFilterChange(filteredRestaurants: Restaurant[]) {
    setFilteredRestaurants(filteredRestaurants);
  }

  return (
    <div className="App">
      <h1>Restaurant Recommender</h1>
      <RestaurantFilter restaurants={restaurantsData} onFilterChange={handleFilterChange} />
      <h2>Filtered Restaurants</h2>
      {filteredRestaurants.length > 0 ? (
        filteredRestaurants.map((restaurant) => (
          <div key={restaurant.name}>
            <h3>{restaurant.name}</h3>
            <p>Price Bracket: {restaurant.priceBracket}</p>
            <p>Delivery Time: {restaurant.deliveryTimeMinutes} mins</p>
            <p>Open Hours: {restaurant.openHour} - {restaurant.closeHour}</p>
            <p>Distance: {restaurant.distance} km</p>
          </div>
        ))
      ) : (
        <p>Please try another option to find restaurants.</p>
      )}
    </div>
  );
}

export default App;
