
import { useEffect, useState } from 'react';
import { ItemWithId } from '../models/api-handler.model';
import { createItem, deleteItem, fetchAll, fetchById, updateItem } from '../services/api-handler.service';


export const useApi = <T extends ItemWithId>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch all items
    const fetchData = async () => {
        setLoading(true);
        try {
            const result = await fetchAll<T>(endpoint);
            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error fetching data');
        } finally {
            setLoading(false);
        }
    };

    // Fetch a single item by ID
    const getItem = async (id: string) => {
        setLoading(true);
        try {
            const result = await fetchById<T>(endpoint, id);
            return result;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error fetching item');
        } finally {
            setLoading(false);
        }
    };

    // Create a new item
    const createNewItem = async (newItem: T) => {
        setLoading(true);
        try {
            const result = await createItem<T>(endpoint, newItem);
            setData((prevData) => [...prevData, result]);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error creating item');
        } finally {
            setLoading(false);
        }
    };

    // Update an existing item by ID
    const updateExistingItem = async (id: string, updatedItem: T) => {
        setLoading(true);
        try {
            const result = await updateItem<T>(endpoint, id, updatedItem);
            setData((prevData) => prevData.map(item => (item.id === id ? result : item)));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error updating item');
        } finally {
            setLoading(false);
        }
    };

    // Delete an item by ID
    const removeItem = async (id: string) => {
        setLoading(true);
        try {
            await deleteItem(endpoint, id);
            setData((prevData) => prevData.filter(item => item.id !== id));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error deleting item');
        } finally {
            setLoading(false);
        }
    };

    // Fetch all items on mount
    useEffect(() => {
        fetchData();
    }, [endpoint]);

    return {
        data,
        loading,
        error,
        fetchData,
        getItem,
        createNewItem,
        updateExistingItem,
        removeItem,
    };
};
