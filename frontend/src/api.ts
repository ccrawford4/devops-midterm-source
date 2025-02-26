import axios from "axios";
import dotenv from "dotenv"
dotenv.config();

const API_URL = process.env.API_URL;

export type Restaurant = {
    ID: string
    name: string
    location: string
    cuisine: string
}

export type RestaurantCreateInput = {
    name: string;
    location: string;
    cuisine: string;
}

export const getRestaurants = async (): Promise<Restaurant[]> => {
    const response = await axios.get(`${API_URL}/restaurants`);
    return response.data;
};

export const addRestaurant = async (data: RestaurantCreateInput): Promise<Restaurant> => {
    const resp = await axios.post(`${API_URL}/restaurants`, data);
    return {
        ID: resp.data.ID,
        name: resp.data.name,
        cuisine: resp.data.cuisine,
        location: resp.data.location,
    }
};

export const updateRestaurant = async (data: { data: Omit<Restaurant, "ID">; ID: any }) => {
    await axios.put(`${API_URL}/restaurants/${data.ID}`, data.data);
};

export const deleteRestaurant = async (id: string) => {
    await axios.delete(`${API_URL}/restaurants/${id}`);
};
