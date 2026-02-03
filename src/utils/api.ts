import axios from 'axios';

const API_BASE_URL = 'https://api.intrust.com'; // Replace with your actual API base URL

export const fetchTradesmen = async (category: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tradesmen`, {
            params: { category }
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching tradesmen: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
};

export const fetchTradesmanDetails = async (tradesmanId: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tradesmen/${tradesmanId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching tradesman details: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
};

export const createBooking = async (bookingData: any) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating booking: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
};

export const fetchUserOrders = async (userId: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}/orders`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user orders: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
};

export const getOrders = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/orders`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching orders: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
};