import { useState } from 'react';
import { Restaurant } from '../restaurents';

interface Props {
  restaurants: Restaurant[];
  onFilterChange: (filteredRestaurants: Restaurant[]) => void;
}

function RestaurantFilter(props: Props) {
  const { restaurants, onFilterChange } = props;

  const [priceBracket, setPriceBracket] = useState<number>(0);
  const [deliveryTime, setDeliveryTime] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);

  function handleFilterChange() {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      return (
        restaurant.priceBracket <= priceBracket &&
        restaurant.deliveryTimeMinutes <= deliveryTime &&
        restaurant.distance <= distance
      );
    });

    onFilterChange(filteredRestaurants);
  }

  return (
    <div>
      <h2>Filter Restaurants</h2>
      <label>
        Price Bracket:
        <input type="number" value={priceBracket} onChange={(event) => setPriceBracket(parseInt(event.target.value))} />
      </label>
      <br />
      <label>
        Delivery Time (in minutes):
        <input type="number" value={deliveryTime} onChange={(event) => setDeliveryTime(parseInt(event.target.value))} />
      </label>
      <br />
      <label>
        Distance (in km):
        <input type="number" value={distance} onChange={(event) => setDistance(Number(event.target.value))} />
      </label>
      <br />
      <button onClick={handleFilterChange}>Filter</button>
    </div>
  );
}

export default RestaurantFilter;
