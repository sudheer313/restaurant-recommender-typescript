// Import necessary hooks and types
import { useState } from 'react';
import { Restaurant } from '../restaurents';

// Define the Props type for this component
interface Props {
  restaurants: Restaurant[];
  onFilterChange: (filteredRestaurants: Restaurant[]) => void;
}

// RestaurantFilter component for filtering restaurants
function RestaurantFilter(props: Props) {
  // Destructure props for easier access
  const { restaurants, onFilterChange } = props;

  // Set up local state for filter criteria
  const [priceBracket, setPriceBracket] = useState<number>(0);
  const [deliveryTime, setDeliveryTime] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);

  function handleFilterChange() {
    // Check if at least one filter criteria is set
    if (priceBracket === 0 && deliveryTime === 0 && distance === 0) {
      // Show an alert message if no criteria are set
      alert('Please enter at least one filter criterion to find restaurants.');
      return;
    }
  
    // Filter the restaurants based on the user-defined criteria
    const filteredRestaurants = restaurants.filter((restaurant) => {
      const isPriceBracketMatch = priceBracket === 0 || restaurant.priceBracket <= priceBracket;
      const isDeliveryTimeMatch = deliveryTime === 0 || restaurant.deliveryTimeMinutes <= deliveryTime;
      const isDistanceMatch = distance === 0 || restaurant.distance <= distance;
  
      return isPriceBracketMatch && isDeliveryTimeMatch && isDistanceMatch;
    });
  
    // Update the parent component with the filtered restaurants
    onFilterChange(filteredRestaurants);
  }

  // Render the filter form and input elements
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
        <input type="number" value={distance} onChange={(event) => setDistance(parseInt(event.target.value))} />
      </label>
      <br />
      {/* Filter button with onClick event Handler */}
      <button onClick={handleFilterChange}>Filter</button>
    </div>
  );
}

// Export the RestaurantFilter component as the default export
export default RestaurantFilter;
