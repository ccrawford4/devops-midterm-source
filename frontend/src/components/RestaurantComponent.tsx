import React, { useState } from 'react';
import {
    Button,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    TextField, Card, CardContent, CardActions, Typography
} from '@mui/material';

// Define the base restaurant type
interface Restaurant {
    id?: string;
    name: string;
    cuisine: string;
    location: string;
}

// Props for the form component
interface RestaurantFormProps {
    data?: Restaurant;
    onSubmit: (data: Omit<Restaurant, 'id'>) => Promise<Restaurant>;
    mode: 'create' | 'update';
}

// Props for the delete dialog
interface DeleteRestaurantDialogProps {
    restaurant: Restaurant;
    onDelete: (id: string) => Promise<void>;
    open: boolean;
    onClose: () => void;
}

// Restaurant Form Component for Creating/Updating
export const RestaurantForm: React.FC<RestaurantFormProps> = (props) => {
    const { data, onSubmit, mode } = props;

    const [formData, setFormData] = useState<Omit<Restaurant, 'id'>>({
        name: data?.name || '',
        location: data?.location || '',
        cuisine: data?.cuisine || ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onSubmit(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Card className="max-w-md p-4">
            <CardContent>
                <Typography variant="h6" className="mb-4">
                    {mode === 'create' ? 'Add New Restaurant' : 'Update Restaurant'}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Restaurant Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="my-2"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="my-2"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Cuisine Type"
                        name="cuisine"
                        value={formData.cuisine}
                        onChange={handleChange}
                        className="my-2"
                        required
                    />
                    <CardActions className="justify-end">
                        <Button
                            variant={"outlined"}
                            onClick={() => setFormData({ name: '', location: '', cuisine: '' })}
                        >
                            Clear
                        </Button>
                        <Button type="submit">
                            {mode === 'create' ? 'Add Restaurant' : 'Update Restaurant'}
                        </Button>
                    </CardActions>
                </form>
            </CardContent>
        </Card>
    );
};

// Delete Confirmation Dialog
export const DeleteRestaurantDialog: React.FC<DeleteRestaurantDialogProps> = ({
                                                                                  restaurant,
                                                                                  onDelete,
                                                                                  open,
                                                                                  onClose
                                                                              }) => {
    const handleDelete = async () => {
        if (restaurant.id) {
            await onDelete(restaurant.id);
            onClose();
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Delete Restaurant</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete {restaurant.name}? This action cannot be undone.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant={"outlined"} onClick={onClose}>Cancel</Button>
                <Button onClick={handleDelete}>Delete</Button>
            </DialogActions>
        </Dialog>
    );
};