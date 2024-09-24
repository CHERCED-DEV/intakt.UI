// src/services/apiService.ts

const BASE_URL = 'https://api.example.com';

// Helper function to handle the fetch requests
const handleFetch = async <T>(url: string, options?: RequestInit): Promise<T> => {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json() as T;
};

// Fetch all items
export const fetchAll = async <T>(endpoint: string): Promise<T[]> => {
    return await handleFetch<T[]>(`${BASE_URL}/${endpoint}`);
};

// Fetch a single item by ID
export const fetchById = async <T>(endpoint: string, id: string): Promise<T> => {
    return await handleFetch<T>(`${BASE_URL}/${endpoint}/${id}`);
};

// Create a new item
export const createItem = async <T>(endpoint: string, data: T): Promise<T> => {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json() as T;
};

// Update an existing item by ID
export const updateItem = async <T>(endpoint: string, id: string, data: T): Promise<T> => {
    const response = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return await response.json() as T;
};

// Delete an item by ID
export const deleteItem = async (endpoint: string, id: string): Promise<void> => {
    const response = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
};
