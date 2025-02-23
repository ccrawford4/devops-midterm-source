import axios from "axios";

const API_URL = "http://localhost:8080";

export type Restaurant = {
    id: string
    name: string
    location: string
    cuisine: string
}

export const getRestaurants = async (): Promise<Restaurant[]> => {
    const response = await axios.get(`${API_URL}/restaurants`);
    return response.data;
};

// @ts-ignore
export const addRestaurant = async (restaurant: { name: string; location: string; cuisine: string }) => {
    await axios.post(`${API_URL}/restaurants`, restaurant);
};
