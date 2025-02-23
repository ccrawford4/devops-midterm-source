import { useState, useEffect } from "react";
import {getRestaurants, Restaurant} from "../api";

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    useEffect(() => {
        getRestaurants().then((restaurants) => {
            if (restaurants) {
                setRestaurants(restaurants)
            }
        });
    }, []);

    return (
        <div>
            <h2>Restaurants</h2>
            <ul>
                {restaurants.map((r: Restaurant) => (
                    <li key={r.id}>{r.name} - {r.location} ({r.cuisine})</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantList;