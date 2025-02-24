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

export const addRestaurant = async (restaurant: { name: string; location: string; cuisine: string }): Promise<Restaurant> => {
    const resp = await axios.post(`${API_URL}/restaurants`, restaurant);
    return {
        id: resp.data.ID,
        name: resp.data.name,
        cuisine: resp.data.cuisine,
        location: resp.data.location,
    }
};

export const updateRestaurant = async (id: string, restaurant: { name: string; location: string; cuisine: string }) => {
    await axios.put(`${API_URL}/restaurants/${id}`, restaurant);
};

export const deleteRestaurant = async (id: string) => {
    await axios.delete(`${API_URL}/restaurants/${id}`);
};
