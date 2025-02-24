import React, { useEffect, useState } from 'react';
import { getRestaurants, Restaurant, addRestaurant, deleteRestaurant } from '../api';
import { RestaurantForm, DeleteRestaurantDialog } from './RestaurantComponent';
import { Button } from "@mui/material"
import {
    Dialog,
    DialogContent,
} from "@mui/material"

export default function RestaurantList() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

    // useEffect(() => {
    //     loadRestaurants();
    // }, []);

    const loadRestaurants = async () => {
        const data = await getRestaurants();
        setRestaurants(data);
    };

    const handleAddRestaurant = async (formData: any) => {
        setIsAddDialogOpen(false);
        await loadRestaurants();
    };

    const handleDeleteRestaurant = async (id: string) => {
        await deleteRestaurant(id);
        await loadRestaurants();
    };

    const toggleIsAddDialogueOpen = () => {
        setIsAddDialogOpen(!isAddDialogOpen)
    }

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Restaurants</h2>
                <Button onClick={toggleIsAddDialogueOpen}>
                    Add Restaurant
                </Button>
                <Dialog open={isAddDialogOpen}>
                    <DialogContent>
                        <RestaurantForm />
                    </DialogContent>
                </Dialog>
                {/*<Dialog open={true} onChange={() => setIsAddDialogOpen} >*/}
                {/*        <Button>Add Restaurant</Button>*/}
                {/*    <DialogContent>*/}
                {/*        <RestaurantForm onSubmit={() => handleAddRestaurant} />*/}
                {/*    </DialogContent>*/}
                {/*</Dialog>*/}
            </div>

            {/*<div className="grid gap-4">*/}
            {/*    {restaurants.map((restaurant) => (*/}
            {/*        <div key={restaurant.id} className="flex items-center justify-between p-4 border rounded-lg">*/}
            {/*            <div>*/}
            {/*                <h3 className="font-semibold">{restaurant.name}</h3>*/}
            {/*                <p className="text-sm text-gray-600">{restaurant.location}</p>*/}
            {/*                <p className="text-sm text-gray-600">{restaurant.cuisine}</p>*/}
            {/*            </div>*/}
            {/*            <div className="space-x-2">*/}
            {/*                <Dialog open={true}>*/}
            {/*                        <Button variant="outlined">Edit</Button>*/}
            {/*                    <DialogContent>*/}
            {/*                        <RestaurantForm*/}
            {/*                            restaurant={restaurant}*/}
            {/*                            onSubmit={(data: any) => {*/}
            {/*                                // Implement update API call here*/}
            {/*                                loadRestaurants();*/}
            {/*                            }}*/}
            {/*                            mode="update"*/}
            {/*                        />*/}
            {/*                    </DialogContent>*/}
            {/*                </Dialog>*/}
            {/*                <DeleteRestaurantDialog*/}
            {/*                    restaurant={restaurant}*/}
            {/*                    onDelete={handleDeleteRestaurant} open={undefined} onClose={undefined}                            />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
};