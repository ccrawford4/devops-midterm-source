import { useState, useEffect } from "react";
import { getRestaurants } from "../api";

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants().then(setRestaurants);
    }, []);

    return (
        <div>
            <h2>Restaurants</h2>
            <ul>
                {restaurants.map((r) => (
                    <li key={r.id}>{r.name} - {r.location} ({r.cuisine})</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantList;