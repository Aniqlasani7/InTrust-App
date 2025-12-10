import axios from 'axios';

const API_BASE_URL = 'https://api.intrust.com'; // Replace with your actual API base URL

export const fetchTradesmen = async (category) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tradesmen`, {
            params: { category }
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching tradesmen: ' + error.message);
    }
};

export const fetchTradesmanDetails = async (tradesmanId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tradesmen/${tradesmanId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching tradesman details: ' + error.message);
    }
};

export const createBooking = async (bookingData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating booking: ' + error.message);
    }
};

export const fetchUserOrders = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}/orders`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user orders: ' + error.message);
    }
};